<template>
  <div class="icon-modal-wrapper">
    <div class="modal-left">
      <p class="icon-name">adidas</p>
      <div>selected Icon</div>
    </div>
    <div class="modal-right">
      <div class="modal-right-left">
        <div class="right-left-top">
          <p class="html-code">WEB COMPONENT CODE</p>
          <button class="icon-usage">USAGE</button>
        </div>
        <ssh-pre
          class="modal-icon-code"
          language="html"
          reactive="true"
          dark
          copy-button
        >
          &lt;i class="ii ii-arrow-right"&gt;&lt;/i&gt;
        </ssh-pre>
      </div>
      <div class="modal-right-right">
        <button class="svg-download">svg Download</button>
      </div>
    </div>
  </div>
</template>

<script>
import SshPre from 'simple-syntax-highlighter';
import 'simple-syntax-highlighter/dist/sshpre.css';
export default {
  name: 'IconModal',
  components: {
    SshPre,
  },
};
</script>

<style scoped lang="scss">
.icon-modal-wrapper {
  display: flex;
  justify-content: space-between;
  width: 150%;
  height: 90px;
  padding: 0px 30px;
  border-radius: 20px;
  background-color: rgb(59, 59, 59);
  color: white;
  .modal-left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 40%;
    font-weight: 700;
    font-size: 18px;
    .icon-name {
      margin-right: 30%;
    }
  }
  .modal-right {
    display: flex;
    justify-content: space-between;
    width: 60%;
    height: 100%;
    .modal-right-left {
      width: 70%;
      .right-left-top {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        .icon-usage {
          border-style: none;
          padding: 0px;
          color: white;
          font-size: 12px;
          background-color: rgb(59, 59, 59);
          cursor: pointer;
          &:hover {
            border-bottom: 1px solid white;
          }
        }
      }
      .modal-icon-code {
        display: flex;
        height: 20px;
        padding: 0px;
        margin: -5px;
        font-size: 14px;
      }
    }
    .modal-right-right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25%;
      .svg-download {
        border-style: none;
        height: 35px;
        padding: 0px 10px;
        border-radius: 10px;
        color: white;
        background-color: rgb(141, 141, 141);
      }
    }
  }
}
</style>
