<template>
  <li>
    <h4 class="extras-example-header">{{ header }}</h4>
    <ul class="extras-example-list">
      <li class="extras-example-item" :class="{ isSize: isHeaderSize }">
        <div class="item-icon">
          <i
            :class="`ii ii-alert-check-outline ${!isHeaderSize && 'ii-2x'}`"
          ></i>
        </div>
      </li>
      <li
        v-for="example in examples"
        :key="example"
        class="extras-example-item"
        :class="{ isSize: isHeaderSize }"
      >
        <div class="item-icon">
          <i
            :class="`ii ii-alert-check-outline ${example} ${
              !isHeaderSize && 'ii-2x'
            }`"
          ></i>
        </div>
        <div class="item-name">
          <pre><code>{{ example }}</code></pre>
        </div>
      </li>
    </ul>
  </li>
</template>

<script setup>
import { computed } from 'vue';

/* eslint-disable no-undef */
const props = defineProps({
  header: String,
  examples: Array,
});

const isHeaderSize = computed(() => props.header === 'Size');
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

code {
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
    Liberation Mono, monospace;
  font-size: 12px;
}

.extras-example-list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 20px;
  padding: 0;
  list-style-type: none;

  .extras-example-item {
    display: flex;
    align-items: center;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    overflow: hidden;

    &:last-child {
      margin-right: 0;
    }

    &.isSize {
      .item-icon {
        width: 75px;
        height: 75px;
      }

      .item-name {
        min-width: 85px;
        height: 75px;
      }
    }

    .item-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
    }

    .item-name {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      padding: 0 12px;
      color: #fff;
      background-color: #222;
    }
  }
}
</style>
