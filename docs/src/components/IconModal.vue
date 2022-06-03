<template>
  <div ref="modal" id="icon-modal-wrapper">
    <div class="modal-left">
      <p class="icon-name">{{ glyph }}</p>
      <i v-bind:class="`ii-${glyph}`"></i>
    </div>
    <div class="modal-right">
      <div class="modal-right-left">
        <div class="right-left-top">
          <p class="html-code">WEB COMPONENT CODE</p>
          <router-link to="/usage" class="icon-usage">Usage</router-link>
        </div>
        <div class="code-wrapper" @click="showProps">
          <div class="code-block">
            &lt;i class="ii ii-{{ glyph }}&gt;&lt;/i&gt;
          </div>
          <button class="copy-btn" @click="copyThat">copy</button>
        </div>
      </div>
      <div class="modal-right-right">
        <button class="svg-download" @click="downSVG">SVG</button>
      </div>
    </div>
  </div>
</template>

<script>
import 'simple-syntax-highlighter/dist/sshpre.css';
export default {
  name: 'IconModal',
  props: ['glyph'],
  methods: {
    copyThat() {
      console.log('copy that');
    },
    downSVG() {
      console.log('download SVG');
    },
  },
};
</script>

<style scoped lang="scss">
#icon-modal-wrapper {
  display: flex;
  position: fixed;
  bottom: 5px;
  justify-content: space-between;
  width: 55%;
  height: 90px;
  padding: 0px 30px;
  border-radius: 20px;
  background-color: rgb(59, 59, 59);
  color: white;
  opacity: 0;
  transition-duration: 1s;
  visibility: hidden;
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
          outline: none;
          padding: 10px;
          color: white;
          font-size: 15px;
          background-color: rgb(59, 59, 59);
          text-decoration: none;
          cursor: default;
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
    .code-wrapper {
      display: flex;
      justify-content: space-between;
      .code-block {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 40px;
        font-size: 19px;
        background-color: black;
      }
      .copy-btn {
        border-style: none;
        background-color: transparent;
        font-size: 20px;
        color: rgb(255, 131, 152);
        cursor: pointer;
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
        cursor: pointer;
      }
    }
  }
}
</style>
