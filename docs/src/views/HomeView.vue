<template>
  <div class="home-wrapper">
    <div class="width-setting">
      <div class="main-top">
        <div class="main-introduction-top">
          Open source icons. <br />
          Lovingly hand-crafted.
        </div>
        <div class="main-introduction-bottom">
          Premium designed icons for use in web, iOS, Android, and desktop apps.
          Support for SVG and web font. Completely open source, MIT licensed and
          built by Ionic.
        </div>
      </div>
      <div class="search-target" id="target-scroll"></div>
      <input
        class="home-search-box"
        v-model="this.$store.state.handleInput"
        type="text"
        id="target-focus"
        placeholder="search icons..."
        @keyup="this.goSearch"
      />
      <div class="icon-wrapper">
        <IconBoxs :glyphs="glyphs" />
      </div>
    </div>
  </div>
</template>

<script>
import IconBoxs from '../components/IconBoxs.vue';
import glyphs from '../assets/config.json';

export default {
  name: 'HomePage',
  data() {
    return {
      glyphs: glyphs.glyphs,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  components: {
    IconBoxs,
  },
  methods: {
    goSearch() {
      document.getElementById('target-scroll').scrollIntoView(true);
      document.getElementById('target-focus').focus();
    },
  },
};
</script>
<style scoped lang="scss">
.home-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  min-height: 700px;
  margin: 50px 0px;
}
.width-setting {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  @media (max-width: 1000px) {
    width: 90%;
  }
}
.main-top {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-introduction-top {
  width: 50%;
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
}
.main-introduction-bottom {
  width: 50%;
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
}
.search-target {
  width: 100px;
  height: 100px;
  display: flex;
}
.home-search-box {
  border-style: none;
  width: 100%;
  height: 60px;
  padding: 0px 20px;
  border-radius: 5px;
  background-color: #f8f8fc;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgb(196, 196, 196);
    font-size: 15px;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
}
.icon-wrapper {
  width: 100%;
}
</style>
