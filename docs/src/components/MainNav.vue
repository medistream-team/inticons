<template>
  <div class="nav-wrapper">
    <div class="width-setting">
      <div class="nav-left">
        <router-link :to="{ name: 'Home' }">
          <img :src="logoSrc" height="20" alt="IntIcons" />
        </router-link>
        <div class="site-version">{{ version }}</div>
      </div>
      <div class="nav-search-wrapper">
        <i class="ii ii-search-outline nav-icon" :class="{ notvisible }"> </i>
        <input
          class="nav-search-box"
          :class="{ notvisible }"
          @input="setInput"
          @change="setInput"
          :value="input"
          type="text"
          placeholder="Search icons..."
          @keyup="goSearch"
        />
      </div>
      <div class="nav-right">
        <router-link
          :to="{ name: 'Home' }"
          class="nav-docs"
          :class="{ active: route.path === '/' }"
        >
          Icons
        </router-link>
        <router-link
          :to="{ name: 'Usage' }"
          class="nav-docs"
          :class="{ active: route.path === 'usage' }"
        >
          Usage
        </router-link>
        <router-link
          :to="{ name: 'CheatSheet' }"
          class="nav-docs"
          :class="{ active: route.path === 'cheatsheet' }"
        >
          Cheatsheet
        </router-link>
        <!-- <button class="pkg-download">Design Pack</button> -->
        <a
          href="https://github.com/medistream-team/inticons"
          target="_blank"
          class="nav-docs"
        >
          <u>GitHub</u>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const { version } = require('../../../package.json');
const logoSrc = require('../assets/images/inticons.svg');

const notvisible = ref(true);
const scrollY = ref(0);
const searchTargetScroll = 550;

const route = useRoute();
const store = useStore();

const input = computed(() => store.state.input);

const setInput = e => {
  const { value } = e.target;
  store.commit('setInput', value);
};

const handleScroll = () => {
  scrollY.value = window.scrollY;

  if (!notvisible.value) {
    notvisible.value = window.scrollY < searchTargetScroll;
  } else if (window.scrollY > searchTargetScroll) {
    notvisible.value = !notvisible.value;
  } else if (window.scrollY === 0) {
    notvisible.value = true;
  }
};

const goSearch = () => {
  document.getElementById('target-scroll')?.scrollIntoView(true);
  document.getElementById('target-focus')?.focus();
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
.nav-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 80px;
  background-color: white;
  border-bottom: 1px solid lightgray;
  z-index: 1;
  .width-setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
    }
    .nav-left {
      display: flex;
      align-items: center;
      justify-content: center;
      .site-version {
        width: 40px;
        height: 14px;
        margin: 0 20px 0 10px;
        font-size: 12px;
        color: rgb(90, 90, 90);
        text-align: center;
        border: 1px solid rgb(235, 235, 235);
        border-radius: 3px;
        background-color: rgb(235, 235, 235);
        @media (max-width: 1000px) {
          margin: 0 0 0 10px;
        }
      }
    }
    .nav-search-wrapper {
      position: relative;
      width: 100%;
      .nav-icon {
        position: absolute;
        top: 11px;
        left: 10px;
        color: rgb(196, 196, 196);
        @media (max-width: 1000px) {
          display: none;
        }
      }
      .nav-search-box {
        border-style: none;
        width: 90%;
        height: 40px;
        padding: 0 0 0 35px;
        border-radius: 5px;
        background-color: #f8f8fc;
        @media (max-width: 1000px) {
          display: none;
        }
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: rgb(196, 196, 196);
          font-size: 15px;
        }
      }
    }
    .notvisible {
      opacity: 0;
      transition-duration: 1s;
    }
    .nav-right {
      display: flex;
      align-items: center;
      @media (max-width: 1000px) {
        margin-top: 10px;
        font-size: 14px;
      }
      /* .pkg-download {
        border-style: none;
        border: 1px solid #1d77ff;
        border-radius: 10px;
        background-color: white;
        color: #1d77ff;
        width: 100px;
        height: 40px;
        cursor: pointer;
        margin-left: 30px;
        box-shadow: 2px 2px 2px #1d77ff;
        &:active {
          box-shadow: 4px 4px 4px #1d77ff60 inset;
        }
        @media (max-width: 1000px) {
          font-size: 11px;
          width: 80px;
          height: 30px;
        }
      }
      .download-link {
        text-decoration: none;
        color: black;
        &:active {
          color: black;
        }
      } */
      .nav-docs {
        margin-left: 30px;
        text-decoration: none;
        color: black;
      }
      .nav-docs.active {
        opacity: 0.5;
      }
    }
  }
}
</style>
