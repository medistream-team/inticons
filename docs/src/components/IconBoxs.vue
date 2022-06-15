<template>
  <div class="icon-box">
    <div class="category-name">INTICONS</div>
    <div class="icon-wrap">
      <div class="icon-all">
        <button
          class="icon-list"
          v-for="glyph in filteredGlyphs"
          :key="glyph"
          @click="this.targetModal"
          :value="`${glyph.css}`"
        >
          <i v-bind:class="`ii-${glyph.css}`"></i>
        </button>
      </div>
      <div class="undefined" v-if="notSearched">
        NO RESULT FOR "{{ this.$store.state.handleInput.toUpperCase() }}"
      </div>
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
    selectIcon: null,
    nextSelectIcon: null,
  }),
  computed: {
    filteredGlyphs() {
      return this.glyphs.filter(glyph =>
        glyph.search.some(word =>
          word
            .toLowerCase()
            .includes(this.$store.state.handleInput.toLowerCase())
        )
      );
    },
    notSearched() {
      return this.filteredGlyphs.length === 0;
    },
  },
  mounted() {
    document.querySelector('.home-wrapper').addEventListener('click', e => {
      if (
        !(
          e.target.className === 'icon-list' ||
          e.target.className.includes('modal') ||
          e.target.className.includes('ii')
        )
      ) {
        document.querySelector('.icon-modal-wrapper').style.opacity = '';
        document.querySelector('.icon-modal-wrapper').style.visibility =
          'hidden';
        this.nextSelectIcon = null;
      }
    });
  },
  methods: {
    targetModal(e) {
      this.selectIcon = e.target.value;
      document.querySelector('.icon-modal-wrapper').style.opacity = 1;
      document.querySelector('.icon-modal-wrapper').style.visibility =
        'visible';
      if (this.nextSelectIcon !== e.target.value) {
        this.nextSelectIcon = this.selectIcon;
      } else {
        document.querySelector('.icon-modal-wrapper').style.opacity = '';
        document.querySelector('.icon-modal-wrapper').style.visibility =
          'hidden';
        this.nextSelectIcon = null;
        e.target.blur();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.icon-box {
  position: relative;
  width: 100%;
  min-height: 200px;
  margin-top: 50px;
  font-size: 20px;
  margin-bottom: 150px;
  @media (max-width: 1000px) {
    margin-top: 80px;
    margin-bottom: 100px;
  }
  .category-name {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    position: sticky;
    top: 80px;
    height: 30px;
    background-color: white;
    border-bottom: 1px solid #1d77ff;
    @media (max-width: 1000px) {
      padding: 40px 20px 20px 20px;
    }
  }
  .icon-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    .icon-all {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
      grid-auto-rows: minmax(70px, auto);
      grid-gap: 0.5em;
      padding-bottom: 60px;
      .icon-list {
        border-style: none;
        width: 69.2578px;
        height: 69.2578px;
        padding: 10px;
        border-radius: 50%;
        margin: 5px;
        background-color: white;
        border: 2px solid white;
        transition-duration: 0.4s;
        color: black;
        cursor: pointer;

        i {
          pointer-events: none;
          font-size: 30px;
        }
        &:hover {
          border: 2px solid #1d77ff60;
        }
        &:focus {
          background-color: #1d77ff;
          border: 2px solid #1d77ff40;
          color: white;
        }
        @media (max-width: 1000px) {
          width: 65px;
          height: 65px;
        }
      }
      .undefined {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 150px;
      }
    }
  }
}
</style>
