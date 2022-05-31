<template>
  <nav-wrapper id="main-nav">
    <width-setting>
      <nav-right>
        <inticon-logo src="" alt="inticon-logo" />
        <site-version>0.1</site-version>
      </nav-right>
      <search-box
        v-if="visible"
        v-model="this.$store.state.handleInput"
        type="text"
        id="target-search"
        placeholder="search icons..."
        @keyup="this.goSearch"
      />
      <nav-left>
        <router-link to="/" class="nav-docs">icons</router-link>
        <router-link to="/docs" class="nav-docs">Docs</router-link>
        <a href="https://github.com/medistream-team/inticon" class="nav-docs"
          >Github</a
        >
        <pkg-download class="pkg-download">Design Pack</pkg-download>
      </nav-left>
    </width-setting>
  </nav-wrapper>
</template>

<script>
import styled from 'vue3-styled-components';

export const NavWrapper = styled.nav`
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
`;
export const WidthSetting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
export const InticonLogo = styled.img``;
export const SiteVersion = styled.div`
  padding: 2px;
  width: 20px;
  height: 12px;
  margin-left: 10px;
  font-size: 12px;
  color: rgb(90, 90, 90);
  text-align: center;
  border: 1px solid rgb(235, 235, 235);
  border-radius: 3px;
  background-color: rgb(235, 235, 235);
`;
export const SearchBox = styled.input`
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
`;
export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const PkgDownload = styled.button`
  border-style: none;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;
  color: gray;
  width: 100px;
  height: 40px;
  cursor: pointer;
`;

export default {
  name: 'main-nav',
  components: {
    // styled-components
    NavWrapper,
    WidthSetting,
    NavRight,
    InticonLogo,
    SiteVersion,
    NavLeft,
    PkgDownload,
    SearchBox,
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  computed: {},
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      if (!this.visible) {
        this.visible = window.scrollY > this.$store.state.searchTargetScroll;
      } else if (window.scrollY < this.$store.state.searchTargetScroll) {
        this.visible = !this.visible;
      }
    },
    goSearch() {
      document.getElementById('target-scroll').scrollIntoView(true);
      document.getElementById('target-focus').focus();
    },
  },
};
</script>
<style scoped>
.nav-docs,
.pkg-download {
  margin-left: 30px;
}
</style>
