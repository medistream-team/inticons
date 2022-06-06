<template>
  <div ref="target-modal" id="icon-modal-wrapper">
    <div class="modal-left">
      <p class="modal-icon-name">{{ glyph }}</p>
      <i v-bind:class="`ii-${glyph}`"></i>
    </div>
    <div class="modal-right">
      <div class="modal-right-left">
        <div class="modal-right-left-top">
          <p class="modal-html-code">WEB COMPONENT CODE</p>
          <router-link to="/usage" class="modal-icon-usage">Usage</router-link>
        </div>
        <div class="modal-code-wrapper" @click="showProps">
          <div class="modal-code-block">
            &lt;i class="ii ii-{{ glyph }}&gt;&lt;/i&gt;
          </div>
          <button class="modal-copy-btn" @click="copyThat">copy</button>
        </div>
      </div>
      <div class="modal-right-right">
        <button class="modal-svg-download" @click="downSVG">SVG</button>
      </div>
    </div>
  </div>
</template>

<script>
import 'simple-syntax-highlighter/dist/sshpre.css';

export default {
  name: 'IconModal',
  props: ['glyph', 'nextSelectIcon'],
  methods: {
    copyThat() {
      navigator.clipboard.writeText(
        document.querySelector('.modal-code-block').innerText
      );
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
  bottom: 20px;
  justify-content: space-between;
  width: 55%;
  height: 90px;
  margin-left: -100px;
  padding: 0px 30px;
  border-radius: 20px;
  background-color: rgb(59, 59, 59);
  color: white;
  opacity: 0;
  transition-duration: 0.5s;
  visibility: hidden;
  .modal-left {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 250px;
    font-weight: 700;
    font-size: 18px;
    i {
      font-size: 25px;
    }
    .modal-icon-name {
      width: 150px;
    }
  }
  .modal-right {
    display: flex;
    justify-content: space-between;
    width: 60%;
    height: 100%;
    .modal-right-left {
      width: 70%;
      .modal-right-left-top {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        .modal-icon-usage {
          border-style: none;
          outline: none;
          height: 20px;
          padding: 10px 0px 0px 0px;
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
    .modal-code-wrapper {
      display: flex;
      justify-content: space-between;
      .modal-code-block {
        border-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 40px;
        font-size: 14px;
        background-color: black;
        color: white;
      }
      .modal-copy-btn {
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
      .modal-svg-download {
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
