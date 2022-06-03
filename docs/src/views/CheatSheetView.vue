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
  </div>
</template>

<script>
import config from './config.json';

export default {
  data() {
    return {
      icons: config,
      usageIcon: config[0].css,
    };
  },
  methods: {
    copy(e) {
      const isHexOrName = !(
        e.target.classList.contains('icons-item') ||
        e.target.classList.contains('ii')
      );

      if (isHexOrName) {
        navigator.clipboard.writeText(e.target.innerHTML);
      }
    },
    changeUsageIcon(e) {
      this.usageIcon = e.target.innerHTML.substring(3);
    },
  },
};
</script>

<style scoped>
.cheatsheet {
  width: 80%;
  height: 100vh;
  margin: 0 auto;
}

.usage-icon {
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f1f1f1;
}

.usage-note {
  position: relative;
  padding: 8px 8px 8px 12px;
  margin: 16px 0 0;
}

.usage-note::before {
  content: ' ';
  width: 0.25rem;
  height: 100%;
  background: #ddd;
  position: absolute;
  border-radius: 0.25rem;
  top: 0;
  left: 0;
}

.icons-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
}

.icons-item {
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icons-item::marker {
  display: none;
}

.icons-item code,
.icons-item span {
  cursor: pointer;
}

.icons-item code:hover,
.icons-item span:hover {
  color: #3c90be;
}

.icons-item code {
  display: inline-block;
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
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
</style>
