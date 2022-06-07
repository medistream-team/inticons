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
          <div class="modal-code-block" @click="codeCopy">
            &lt;i class="ii ii-{{ glyph }}&gt;&lt;/i&gt;
          </div>
          <div class="modal-copied" v-if="copied" @click="codeCopy">copied</div>
        </div>
      </div>
      <div class="modal-right-right">
        <button class="modal-svg-download" @click="downSVG">SVG</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconModal',
  props: ['glyph', 'nextSelectIcon'],
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    codeCopy() {
      navigator.clipboard.writeText(
        document.querySelector('.modal-code-block').innerText
      );
      this.copied = true;
      setTimeout(() => (this.copied = false), 500);
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
  @media (max-width: 1000px) {
    flex-direction: column;
    position: fixed;
    bottom: 20px;
    right: 10px;
    width: 80%;
    height: 130px;
  }
  .modal-left {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 250px;
    font-weight: 700;
    font-size: 18px;
    @media (max-width: 1000px) {
      margin-bottom: -20px;
    }
    i {
      font-size: 25px;
      @media (max-width: 1000px) {
        display: none;
      }
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
    @media (max-width: 1000px) {
      width: 130%;
      font-size: 10px;
    }
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
      align-items: center;
      background-color: black;
      .modal-code-block {
        border-style: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 60%;
        height: 40px;
        padding: 0px 20px;
        font-size: 14px;
        color: white;
        @media (max-width: 1000px) {
          width: 100%;
        }
      }
      .modal-copied {
        border-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 10px;
        padding: 0px 5px;
        border-radius: 10px;
        width: 15%;
        height: 20px;
        color: black;
        font-size: 15px;
        background-color: gray;
        cursor: pointer;
        transition-duration: 1s;
        @media (max-width: 1000px) {
        }
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
        @media (max-width: 1000px) {
          display: none;
        }
      }
    }
  }
}
</style>
