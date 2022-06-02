<template>
  <div class="icon-box">
    <div class="category-name">App Icon</div>
    <div class="icon-wrap">
      <div class="icon-list" v-for="glyph in filteredGlyphs" :key="glyph.uid">
        <i v-bind:class="`ii-${glyph.css} ii-2x`"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'icons-boxs',
  props: ['glyphs'],
  computed: {
    filteredGlyphs() {
      return this.glyphs.filter(glyph =>
        glyph.search.some(word => word.includes(this.$store.state.handleInput))
      );
    },
  },
};
</script>

<style scoped lang="scss">
.icon-box {
  position: relative;
  width: 100%;
  min-height: 400px;
  margin-top: 50px;
  font-size: 20px;
  .category-name {
    display: flex;
    align-items: center;
    padding: 20px;
    position: sticky;
    top: 80px;
    height: 30px;
    background-color: white;
    border-bottom: 1px solid #1d77ff;
  }
  .icon-wrap {
    display: flex;
    flex-wrap: wrap;
    .icon-list {
      list-style: none;
      display: inline-block;
      width: 56px;
      height: 56px;
      padding: 10px;
      margin: 5px;
      border: 2px solid white;
      &:hover {
        border: 2px solid lightgray;
      }
    }
  }
}
</style>
