<template>
  <MainNav />
  <router-view />
  <MainFooter />
</template>

<script>
import MainNav from './components/MainNav.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  name: 'App',
  components: {
    MainNav,
    MainFooter,
  },
};
</script>

<style>
@import url('./assets/fonts/inticons.bundle.css');
@import url('pretendard/dist/web/static/pretendard.css');

#app {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
    'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif;
}
</style>
