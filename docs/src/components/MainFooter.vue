<template>
  <div class="footer-wrapper">
    <div class="width-setting">
      <div class="footer-left">
        <div class="footer-left-top">
          <img :src="logoSrc" height="30" alt="IntIcons" />
        </div>
        <div class="footer-left-bottom">
          Released by INTEGRATION Corp.<br />
          Copyright © 2022
        </div>
      </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  font-size: 12px;
  background-color: #f8f8fc;
  @media (max-width: 1000px) {
    height: 100px;
  }
  color: rgb(118, 118, 118);
  .width-setting {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    @media (max-width: 1000px) {
      display: flex;
      justify-content: space-between;
    }
    .footer-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      .footer-left-top {
        display: flex;
        align-items: center;
        .inticon-logo {
          margin-right: 10px;
        }
      }
      .footer-left-bottom {
        text-align: center;
        margin-top: 10px;
      }
    }
  }
}
</style>
