<template>
  <div class="cheatsheet">
    <h2>cheatsheet</h2>
    <div class="usage">
      <h3>Usage</h3>
      <pre
        class="usage-icon"
      ><code>&lt;i class="ii ii-{{usageIcon}}"&gt;&lt;/i&gt;</code></pre>
      <blockquote class="usage-note">
        Click the hex codepoint or name below to copy the value to your
        clipboard.
      </blockquote>
    </div>

    <div class="icons">
      <h3>
        All Icons <small>({{ icons.length }})</small>
      </h3>
      <ul class="icons-list">
        <li
          @click="copy"
          class="icons-item"
          v-for="icon in icons"
          :key="icon.uid"
        >
          <i class="ii" :class="`ii-${icon.css}`"></i>
          <code>{{ icon.code.toString(16) }}</code>
          <span @click="changeUsageIcon">ii-{{ icon.css }}</span>
        </li>
      </ul>
    </div>

    <div v-if="isIconClicked" class="copied">Copied to clipboard</div>
  </div>
</template>

<script>
import config from '../assets/config.json';

export default {
  data() {
    return {
      icons: config.glyphs,
      usageIcon: config.glyphs[0].css,
      isIconClicked: false,
    };
  },
  methods: {
    copy(e) {
      if (!this.isClickable) {
        return;
      }

      const isHexOrName = !(
        e.target.classList.contains('icons-item') ||
        e.target.classList.contains('ii')
      );

      if (isHexOrName) {
        this.isIconClicked = true;
        navigator.clipboard.writeText(e.target.innerHTML);
        setTimeout(() => {
          this.isIconClicked = false;
        }, 500);
      }
    },
    changeUsageIcon(e) {
      if (this.isClickable) {
        this.usageIcon = e.target.innerHTML.substring(3);
      }
    },
  },
  computed: {
    isClickable() {
      return !this.isIconClicked;
    },
  },
};
</script>

<style scoped lang="scss">
.cheatsheet {
  width: 80%;
  height: 100vh;
  margin: 0 auto;

  .usage {
    &-icon {
      padding: 10px;
      border: 1px solid #ddd;
      background-color: #f1f1f1;
    }

    &-note {
      position: relative;
      padding: 8px 8px 8px 12px;
      margin: 16px 0 0;

      &::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 0.25rem;
        height: 100%;
        border-radius: 0.25rem;
        background-color: #ddd;
      }
    }
  }

  .icons {
    &-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0;
    }

    &-item {
      margin-bottom: 8px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &::marker {
        display: none;
      }

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
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
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
