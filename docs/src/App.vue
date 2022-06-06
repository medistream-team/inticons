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

<style scoped>
@import url('./assets/fonts/inticon.bundle.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

code:not([class]) {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
}
</style>
