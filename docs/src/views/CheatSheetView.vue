<template>
  <div class="cheatsheet">
    <h2>Cheatsheet</h2>
    <section class="usage">
      <h3>Usage</h3>
      <pre
        class="usage-icon"
      ><code>&lt;i class="ii ii-{{usageIcon}}"&gt;&lt;/i&gt;</code></pre>
    </section>

    <section class="icons">
      <h3>
        All Icons <span class="icons-count">({{ icons.length }})</span>
      </h3>
      <blockquote class="icons-note">
        Click the hex codepoint or name below to copy the value to your
        clipboard.
      </blockquote>
      <ul @click="copy" class="icons-list">
        <li class="icons-item" v-for="icon in icons" :key="icon.uid">
          <i class="ii" :class="`ii-${icon.css.split('.').join(' ')}`"></i>
          <code class="icons-item-hex">{{ icon.code.toString(16) }}</code>
          <span class="icons-item-name"
            >ii-{{ icon.css.split('.').join(' ') }}</span
          >
        </li>
      </ul>
    </section>

    <section class="extras">
      <h3>Extras</h3>
      <p>The helper CSS classes are listed below.</p>

      <ul class="extras-list">
        <ExtraItem v-for="extra in extras" :key="extra.header" v-bind="extra" />
      </ul>
    </section>

    <div v-if="isIconClicked" class="copied">Copied to clipboard</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import config from '../assets/config.json';
import ExtraItem from '../components/ExtraItem.vue';

const extras = [
  {
    header: 'Size',
    examples: ['ii-2x', 'ii-3x', 'ii-4x'],
  },
  {
    header: 'Rotate',
    examples: [
      'ii-rotate-45',
      'ii-rotate-90',
      'ii-rotate-135',
      'ii-rotate-180',
      'ii-rotate-225',
      'ii-rotate-270',
      'ii-rotate-315',
    ],
  },
  {
    header: 'Flip',
    examples: ['ii-flip-h', 'ii-flip-v'],
  },
  {
    header: 'Spin',
    examples: ['ii-spin'],
  },
  {
    header: 'Weight',
    examples: ['ii-weight-600'],
  },
];

const icons = ref(config.glyphs);
const usageIcon = ref(config.glyphs[0].css);
const isIconClicked = ref(false);

const isClickable = computed(() => !isIconClicked.value);

const changeUsageIcon = (e, isName) => {
  if (isName) {
    usageIcon.value = e.target.innerHTML.substring(3);
  }
};

const copy = e => {
  if (!isClickable.value) {
    return;
  }

  const isHex = e.target.classList.contains('icons-item-hex');
  const isName = e.target.classList.contains('icons-item-name');

  if (isHex || isName) {
    isIconClicked.value = true;
    navigator.clipboard.writeText(e.target.innerHTML);
    changeUsageIcon(e, isName);

    setTimeout(() => {
      isIconClicked.value = false;
    }, 500);
  }
};
</script>

<style scoped lang="scss">
ul {
  padding: 0;
  list-style-type: none;
}

code {
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
    Liberation Mono, monospace;
  font-size: 12px;
}

.cheatsheet {
  width: 80%;
  margin: 0 auto;

  h2 {
    margin-top: 80px;
  }

  .usage {
    &-icon {
      padding: 10px;
      border: 1px solid #ddd;
      background-color: #f1f1f1;
    }
  }

  .icons {
    &-count {
      font-size: 16px;
    }

    &-note {
      padding: 0 16px;
      border-left: 4px solid #d0d7de;
      margin: 0;
      color: #57606a;
      line-height: 2;
    }

    &-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    &-item {
      margin-bottom: 8px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      code,
      span {
        cursor: pointer;

        &:hover {
          color: #1d77ff;
        }
      }

      code {
        display: inline-block;
        padding: 4px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    }
  }

  .copied {
    position: fixed;
    top: 100px;
    left: 50%;
    width: 200px;
    padding: 10px 15px;
    border: 1px solid #1d77ff;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    background-color: #1d77ff;
    transform: translateX(-50%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  @media screen and (min-width: 640px) {
    .icons-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 1024px) {
    .icons-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
