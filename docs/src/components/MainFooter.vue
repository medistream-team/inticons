<template>
  <div class="footer-wrapper" id="main-footer">
    <div class="width-setting">
      <div class="footer-left">
        <div class="footer-left-top">
          <img src="" alt="inticon-logo" class="inticon-logo" />
          <p>inticon open source</p>
        </div>
        <div class="footer-left-bottom">Released by Medistream</div>
      </div>
      <div class="footer-right">
        <p class="cheatsheet">Cheatsheet</p>
        <p class="cheatsheet">ReleaseNote</p>
        <p class="cheatsheet">Cheatsheet</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'main-footer',
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
  font-weight: bold;
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
    }
    .footer-right {
      display: flex;
      justify-content: space-around;
      width: 20%;
    }
  }
}
</style>
