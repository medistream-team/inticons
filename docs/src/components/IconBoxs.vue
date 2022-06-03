<template>
  <div class="icon-box">
    <div class="category-name">App Icon</div>
    <div class="icon-wrap">
      <button
        ref="icon"
        class="icon-list"
        v-for="glyph in filteredGlyphs"
        :key="glyph"
        @click="this.targetModal"
        :value="`${glyph.css}`"
      >
        <i v-bind:class="`ii-${glyph.css} ii-2x`"></i>
      </button>
    </div>
    <div class="target-modal">
      <IconModal :glyph="this.selectIcon" />
    </div>
  </div>
</template>

<script>
import IconModal from './IconModal.vue';
export default {
  name: 'icons-boxs',
  props: ['glyphs'],
  components: { IconModal },
  data: () => ({
    isModal: false,
    selectIcon: null,
    nextSelectIcon: null,
  }),
  computed: {
    filteredGlyphs() {
      return this.glyphs.filter(glyph =>
        glyph.search.some(word => word.includes(this.$store.state.handleInput))
      );
    },
  },
  methods: {
    targetModal(e) {
      this.selectIcon = e.target.value;
      document.getElementById('icon-modal-wrapper').style.opacity = 1;
      document.getElementById('icon-modal-wrapper').style.visibility =
        'visible';
      if (this.nextSelectIcon !== e.target.value) {
        this.nextSelectIcon = this.selectIcon;
      } else {
        document.getElementById('icon-modal-wrapper').style.opacity = '';
        document.getElementById('icon-modal-wrapper').style.visibility =
          'hidden';
        this.nextSelectIcon = null;
      }
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
      border-style: none;
      display: inline-block;
      width: 80.585px;
      height: 80.585px;
      padding: 10px;
      margin: 5px;
      background-color: white;
      border: 2px solid white;
      i {
        pointer-events: none;
      }
      &:hover {
        border: 2px solid lightgray;
      }
    }
  }
}
</style>
