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
          @change="setInput"
          @input="setInput"
          :value="input"
          type="text"
          id="target-focus"
          placeholder="Search icons..."
          @keyup="goSearch"
        />
        <i
          v-if="input.length > 0"
          class="ii ii-remove search-reset"
          @click="store.commit('resetInput')"
        >
        </i>
      </div>

      <div class="buttons-wrapper">
        <button
          type="button"
          :class="{ selected: selected === '' }"
          @click="selected = ''"
        >
          All
        </button>
        <button
          type="button"
          :class="{ selected: selected === 'inticons' }"
          @click="selected = 'inticons'"
        >
          Inticons
        </button>
        <button
          type="button"
          :class="{ selected: selected === 'inticons-600' }"
          @click="selected = 'inticons-600'"
        >
          Inticons (weight 600)
        </button>
        <button
          type="button"
          :class="{ selected: selected === 'untitled-ui' }"
          @click="selected = 'untitled-ui'"
        >
          Untitled UI
        </button>
      </div>

      <div class="icon-wrapper">
        <IconBoxs :glyphs="selectedGlyphs" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TypingEffect from '../components/TypingEffect.vue';
import IconBoxs from '../components/IconBoxs.vue';
import config from '../assets/config.json';
import { useStore } from 'vuex';
import { ref, computed } from 'vue';

const { glyphs } = config;

const store = useStore();

const input = computed(() => store.state.input);

const setInput = e => {
  const { value } = e.target;
  return store.commit('setInput', value);
};

const goSearch = () => {
  document.getElementById('target-scroll').scrollIntoView(true);
  document.getElementById('target-focus').focus();
};

const selected = ref('');

const selectedGlyphs = computed(() => {
  if (selected.value === 'untitled-ui') {
    return glyphs.filter(glyph => glyph.css.indexOf('untitledui-') > -1);
  } else if (selected.value === 'inticons-600') {
    return glyphs.filter(glyph => glyph.css.indexOf('ii-weight-600') > -1);
  } else if (selected.value === 'inticons') {
    return glyphs.filter(glyph => {
      return (
        glyph.css.indexOf('untitledui-') < 0 &&
        glyph.css.indexOf('ii-weight-600') < 0
      );
    });
  } else {
    return glyphs;
  }
});
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
  margin-bottom: 20px;
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
    top: 50%;
    right: 10px;
    font-size: 30px;
    color: rgb(196, 196, 196);
    cursor: pointer;
    transform: translateY(-50%);
  }
}

.buttons-wrapper {
  padding: 10px 0;

  button {
    margin-bottom: 10px;
    padding: 7px 12px;
    border: none;
    border-radius: 5px;
    background-color: #f8f8fc;
    font-size: 16px;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &.selected {
      background-color: grey;
      color: white;
    }

    & + button {
      margin-left: 10px;
    }
  }
}

.icon-wrapper {
  width: 100%;
}
</style>
