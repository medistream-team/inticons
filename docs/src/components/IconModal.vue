<template>
  <div class="icon-modal-wrapper">
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
        <div class="modal-code-wrapper">
          <div class="modal-code-block" @click="codeCopy">
            &lt;i class="ii ii-{{ glyph }}&gt;&lt;/i&gt;
          </div>
          <transition>
            <div class="modal-copied" v-show="copied">copied</div>
          </transition>
        </div>
      </div>
      <div class="modal-right-right">
        <button class="modal-svg-download">SVG</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconModal',
  props: ['glyph'],
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
  },
};
</script>

<style scoped lang="scss">
.icon-modal-wrapper {
  display: flex;
  position: fixed;
  bottom: 20px;
  justify-content: space-between;
  width: 70%;
  height: 90px;
  margin-left: -200px;
  padding: 0px 30px;
  border-radius: 20px;
  background-color: rgb(59, 59, 59);
  color: white;
  opacity: 0;
  transition-duration: 0.5s;
  visibility: hidden;
  box-shadow: 7px 7px gray;
  @media (max-width: 1000px) {
    flex-direction: column;
    position: fixed;
    bottom: 20px;
    right: 30px;
    width: 80%;
    height: 130px;
  }
  .modal-left {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
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
    width: 70%;
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
      overflow: auto;
      .modal-code-block {
        border-style: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 210px;
        height: 40px;
        padding: 0px 20px;
        font-size: 15px;
        color: white;
        font-weight: bold;
        @media (max-width: 1000px) {
          font-size: 11px;
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
        width: 50px;
        height: 20px;
        color: black;
        font-size: 15px;
        background-color: white;
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s;
      }
      .v-enter-active,
      .v-leave-active {
        transition: opacity 0.5s;
      }

      .v-enter-from,
      .v-leave-to {
        opacity: 0;
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
        color: black;
        background-color: white;
        font-weight: bold;
        cursor: pointer;
        @media (max-width: 1000px) {
          display: none;
        }
      }
    }
  }
}
</style>
