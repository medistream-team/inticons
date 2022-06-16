<template>
  <div class="footer-wrapper">
    <div class="footer-top">
      <img :src="logoSrc" height="30" alt="Inticons" />
    </div>
    <div class="footer-bottom">
      Copyright © 2022. Built by INTEGRATION Corp.
    </div>
  </div>
</template>
<script>
export default {
  name: 'main-footer',
  data() {
    return {
      logoSrc: require('../assets/images/inticon.svg'),
    };
  },
};
</script>
<style scoped lang="scss">
.footer-wrapper {
  width: 100%;
  padding: 30px 0;
  font-size: 12px;
  background-color: #f8f8fc;
  text-align: center;
  color: rgb(118, 118, 118);
  .footer-top {
    opacity: 0.5;
  }
  .footer-top img {
    filter: grayscale(1);
  }
  .footer-bottom {
    margin-right: 10px;
    line-height: 150%;
    text-align: center;
    margin-top: 10px;
  }
}
</style>
