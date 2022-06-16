<template>
  <div class="home-wrapper">
    <div class="width-setting">
      <div class="main-top">
        <div class="main-introduction-top">
          <i :class="`ii ii-${shownIcon}`"></i>
        </div>
        <div class="typing-effect">
          &lt;i class="ii ii-
          <VueWriter
            :array="arr"
            :typeSpeed="120"
            :eraseSpeed="20"
            :intervals="50"
            @typed="changeIcon"
          /><span class="typing-effect-span">"&gt;&lt;/i&gt;</span>
        </div>
        <div class="main-introduction-bottom">
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
        <i class="ii ii-x search-reset" @click="inputReset"></i>
      </div>
      <div class="icon-wrapper">
        <IconBoxs :glyphs="glyphs" />
      </div>
    </div>
  </div>
</template>

<script>
import IconBoxs from '../components/IconBoxs.vue';
import glyphs from '../assets/config.json';
import VueWriter from 'vue-writer/src/vue-writer.vue';

const cssAniArr = [
  'ii-spin',
  'ii-flip-v',
  'ii-flip-h',
  'ii-rotate-45',
  'ii-rotate-90',
  'ii-rotate-135',
  'ii-rotate-180',
  'ii-rotate-225',
  'ii-rotate-270',
  'ii-rotate-315',
];

const cssGlyphs = glyphs.glyphs.map(
  glyph =>
    `${glyph.css} ${
      Math.floor(Math.random() * 2)
        ? `${cssAniArr[Math.floor(Math.random() * cssAniArr.length)]}`
        : ''
    }`
);

const shuffle = arr => {
  const strikeOut = [];
  while (arr.length) {
    const lastIdx = arr.length - 1;
    let roll = Math.floor(Math.random() * arr.length);
    [arr[lastIdx], arr[roll]] = [arr[roll], arr[lastIdx]];
    strikeOut.push(arr.pop());
  }
  return strikeOut;
};

const shuffledArr = shuffle(cssGlyphs);

export default {
  name: 'HomePage',
  data() {
    return {
      glyphs: glyphs.glyphs,
      arr: shuffledArr,
      shownIcon: shuffledArr[0],
    };
  },
  components: {
    IconBoxs,
    VueWriter,
  },
  methods: {
    goSearch() {
      document.getElementById('target-scroll').scrollIntoView(true);
      document.getElementById('target-focus').focus();
    },
    inputReset() {
      return (this.$store.state.handleInput = '');
    },
    changeIcon(icon) {
      this.shownIcon = icon;
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
  display: block;
  margin-top: 20px;
  font-size: 18px;
  color: black;
  padding: 0px 20px;
  font-family: 'monaco';
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  .is-typed {
    display: inline;
    margin-left: -7px;
  }
  @media (max-width: 1100px) {
    font-size: 15px;
  }
  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
    font-size: 10px;
  }

  &-span {
    margin-left: -1.2em;
  }
}
.main-introduction-top {
  width: 70%;
  margin-top: 30px;
  color: #607d8b;
  font-size: 50px;
  text-align: center;
  i {
    color: black;
    @media (max-width: 700px) {
      font-size: 30px;
    }
  }
  @media (max-width: 1000px) {
    width: auto;
  }
}
.main-introduction-bottom {
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
