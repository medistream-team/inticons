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
      <div class="footer-right">
        <router-link to="/cheatsheet" class="footer-link cheatsheet">
          Cheatsheet
        </router-link>
        <p class="footer-link">ReleaseNote</p>
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
  color: rgb(118, 118, 118);
  .width-setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    .footer-left {
      width: 50%;
      .footer-left-top {
        display: flex;
        align-items: center;
        .inticon-logo {
          margin-right: 10px;
        }
      }
      .footer-left-bottom {
        margin-top: 10px;
      }
    }
    .footer-right {
      display: flex;
      justify-content: space-around;
      width: 20%;
      @media (max-width: 1000px) {
        width: 80%;
        margin-top: 20px;
      }
      .footer-link {
        display: inline;
        text-decoration: none;
        color: black;
      }
      .cheatsheet {
        margin-top: 11px;
        @media (max-width: 1000px) {
          margin-right: 20px;
        }
      }
    }
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 120%;
    }
  }
}
</style>
