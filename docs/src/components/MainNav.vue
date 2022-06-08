<template>
  <div class="nav-wrapper">
    <div class="width-setting">
      <div class="nav-left">
        <img src="" alt="inticon-logo" class="inticon-logo" />
        <router-link to="/" class="site-title">INTICON</router-link>
        <div class="site-version">{{ siteVersion.version }}</div>
      </div>
      <input
        class="nav-search-box"
        :class="{ notvisible: notvisible }"
        v-model="this.$store.state.handleInput"
        type="text"
        placeholder="search icons..."
        @keyup="this.goSearch"
      />
      <div class="nav-right">
        <router-link to="/" class="nav-docs">icons</router-link>
        <router-link to="/usage" class="nav-docs">Usage</router-link>
        <a href="https://github.com/medistream-team/inticon" class="nav-docs"
          >Github</a
        >
        <button class="pkg-download">Design Pack</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-nav',
  data() {
    return {
      notvisible: true,
      siteVersion: require('../../../package.json'),
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  computed: {},
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      if (!this.notvisible) {
        this.notvisible = window.scrollY < this.$store.state.searchTargetScroll;
      } else if (window.scrollY > this.$store.state.searchTargetScroll) {
        this.notvisible = !this.notvisible;
      } else if (window.scrollY === 0) {
        this.notvisible = true;
      }
    },
    goSearch() {
      document.getElementById('target-scroll').scrollIntoView(true);
      document.getElementById('target-focus').focus();
    },
  },
};
</script>

<style scoped lang="scss">
.nav-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: white;
  border-bottom: 1px solid lightgray;
  z-index: 1;
  .width-setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    .nav-left {
      display: flex;
      align-items: center;
      width: 60%;
      .inticon-logo {
        border: 1px solid white;
      }
      .site-title {
        @media (max-width: 1000px) {
          font-size: 12px;
          margin: 0px 30px;
        }
      }
      .site-version {
        width: 40px;
        height: 14px;
        margin-left: 10px;
        font-size: 12px;
        color: rgb(90, 90, 90);
        text-align: center;
        border: 1px solid rgb(235, 235, 235);
        border-radius: 3px;
        background-color: rgb(235, 235, 235);
        @media (max-width: 1000px) {
          display: none;
        }
      }
      .site-title {
        margin-left: 20px;
        text-decoration: none;
        color: black;
      }
    }
    .nav-search-box {
      border-style: none;
      width: 100%;
      height: 40px;
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
    }
    .notvisible {
      opacity: 0;
      transition-duration: 1s;
    }
    .nav-right {
      display: flex;
      align-items: center;
      @media (max-width: 1000px) {
        display: none;
      }
      .pkg-download {
        border-style: none;
        border: 1px solid gray;
        border-radius: 10px;
        background-color: white;
        color: gray;
        width: 100px;
        height: 40px;
        cursor: pointer;
        margin-left: 30px;
      }
      .nav-docs {
        margin-left: 30px;
        text-decoration: none;
        color: black;
      }
    }
  }
}
</style>
