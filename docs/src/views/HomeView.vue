<template>
  <div class="home-wrapper">
    <div class="main-top">
      <div class="logo">
        <img src="../assets/images/inticons.svg" width="150" alt="IntIcons" />
      </div>
      <div class="introduction">
        <h2>INTICONS</h2>
        <p>
          IntIcons is a collaborative multi-platform icons<br />
          library and toolkit for developers and designers
        </p>
        <p>built by <u id="target-scroll">INTEGRATION Corp</u>.</p>
      </div>
    </div>
    <typing-effect />
    <div class="width-setting">
      <div class="home-search-wrapper">
        <input
          class="home-search-box"
          v-model="this.$store.state.handleInput"
          type="text"
          id="target-focus"
          placeholder="Search icons..."
          @keyup="this.goSearch"
        />
        <i
          v-if="this.$store.state.handleInput.length > 0"
          class="ii ii-x search-reset"
          @click="inputReset"
        >
        </i>
      </div>
      <div class="icon-wrapper">
        <IconBoxs :glyphs="glyphs" />
      </div>
    </div>
  </div>
</template>

<script>
import TypingEffect from '../components/TypingEffect.vue';
import IconBoxs from '../components/IconBoxs.vue';
import glyphs from '../assets/config.json';

export default {
  name: 'HomePage',
  data() {
    return {
      glyphs: glyphs.glyphs,
    };
  },
  components: {
    TypingEffect,
    IconBoxs,
  },
  methods: {
    goSearch() {
      document.getElementById('target-scroll').scrollIntoView(true);
      document.getElementById('target-focus').focus();
    },
    inputReset() {
      return (this.$store.state.handleInput = '');
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 80px 0 50px;
  background-color: #f8f8fc;
  @media (max-width: 1000px) {
    padding: 50px 0 30px;
  }
}
.typing-effect {
  margin: 50px 0;
}
.logo img {
  width: 150px;
  @media (max-width: 1000px) {
    width: 80px;
  }
}
.introduction {
  margin: 30px 20px 0;
  color: gray;
  font-size: 20px;
  line-height: 160%;
  text-align: center;
  h2 {
    color: #000;
    font-weight: normal;
  }
  p {
    margin: 10px 0;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
    br {
      display: none;
    }
  }
}
.home-search-wrapper {
  position: relative;
  width: 100%;
  .home-icon {
    position: absolute;
    top: 15px;
    left: 10px;
    font-size: 30px;
    color: rgb(196, 196, 196);
  }
  .home-search-box {
    border-style: none;
    width: 100%;
    height: 60px;
    padding: 0 0 0 20px;
    border-radius: 5px;
    background-color: #f8f8fc;
    box-sizing: border-box;
    font-size: 16px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgb(196, 196, 196);
      font-size: 15px;
    }
  }
  .search-reset {
    position: absolute;
    top: 15px;
    right: 10px;
    font-size: 30px;
    color: rgb(196, 196, 196);
    cursor: pointer;
  }
}
.icon-wrapper {
  width: 100%;
}
</style>
