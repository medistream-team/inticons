<template>
  <div class="home-wrapper">
    <div class="width-setting">
      <div class="main-top">
        <typing-effect />
        <div class="introduction">
          <p>
            Collaborative multi-platform icons library and toolkit<br />
            for developers and designers
          </p>
          <p>built by <u id="target-scroll">INTEGRATION Corp</u>.</p>
        </div>
      </div>
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
  margin-top: 100px;
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
}
.typing-effect {
  width: 100%;
}
.introduction {
  margin-top: 60px;
  color: gray;
  font-size: 20px;
  width: 100%;
  line-height: 160%;
  text-align: center;
  p {
    margin: 10px 0;
  }
  @media (max-width: 1000px) {
    width: 100%;
    font-size: 14px;
    br {
      display: none;
    }
  }
}
.home-search-wrapper {
  position: relative;
  width: 100%;
  margin-top: 70px;
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
    font-size: 16px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgb(196, 196, 196);
      font-size: 15px;
    }
    @media (max-width: 1000px) {
      width: 100%;
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
