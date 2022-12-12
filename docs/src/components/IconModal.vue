<template>
  <div class="icon-modal-wrapper">
    <div class="modal-left">
      <p class="modal-icon-name">{{ glyph }}</p>
      <i v-bind:class="`ii-${glyph?.split('.').join(' ')}`"></i>
    </div>
    <div class="modal-right">
      <div class="modal-right-left">
        <div class="modal-right-left-top">
          <p class="modal-html-code">WEB COMPONENT CODE</p>
          <router-link to="/usage" class="modal-icon-usage">Usage</router-link>
        </div>
        <div class="modal-code-wrapper">
          <div class="modal-code-block" @click="codeCopy">
            &lt;i class="ii ii-{{ glyph?.split('.').join(' ') }}"&gt;&lt;/i&gt;
          </div>
          <transition>
            <div class="modal-copied" v-show="copied">copied</div>
          </transition>
        </div>
      </div>
      <!-- <div class="modal-svg-download-wrapper">
        <button class="modal-svg-download">SVG</button>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

/* eslint-disable no-undef */
defineProps({
  glyph: String,
});

const copied = ref(false);

const codeCopy = () => {
  navigator.clipboard.writeText(
    document.querySelector('.modal-code-block').innerText
  );
  copied.value = true;
  setTimeout(() => (copied.value = false), 500);
};
</script>

<style scoped lang="scss">
.icon-modal-wrapper {
  display: flex;
  position: fixed;
  bottom: 20px;
  justify-content: space-between;
  width: 45%;
  height: 90px;
  margin-left: -30px;
  padding: 0px 30px;
  border-radius: 20px;
  background-color: rgb(59, 59, 59);
  color: white;
  opacity: 0;
  transition-duration: 0.5s;
  visibility: hidden;
  box-shadow: 7px 7px gray;
  @media (max-width: 1000px) {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    bottom: 20px;
    right: 20px;
    width: 90%;
    height: 130px;
  }
  @media (max-width: 700px) {
    width: 80%;
    right: 40px;
  }
  @media (max-width: 500px) {
    width: 75%;
    right: 20px;
  }
  .modal-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 27%;
    padding: 5px 0;
    font-weight: 700;
    font-size: 12px;
    @media (max-width: 1000px) {
      margin-bottom: -20px;
      width: 100%;
      padding: 0;
    }
    i {
      font-size: 30px;
      @media (max-width: 1000px) {
        display: none;
      }
    }
    .modal-icon-name {
      font-size: 12px;
      width: 100%;
      text-align: center;
      @media (max-width: 1000px) {
        font-size: 16px;
      }
    }
  }
  .modal-right {
    display: flex;
    justify-content: flex-end;
    width: 70%;
    height: 100%;
    @media (max-width: 1000px) {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      font-size: 10px;
    }
    .modal-right-left {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      width: 100%;
      .modal-right-left-top {
        width: 100%;
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
    }
    .modal-code-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      background-color: black;
      overflow: auto;
      overflow: hidden;
      padding: 0 0 0 10px;
      @media (max-width: 1000px) {
        font-size: 11px;
        width: 100%;
      }
      .modal-code-block {
        border-style: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 80%;
        height: 40px;
        font-size: 12px;
        color: white;
        font-weight: bold;
        cursor: pointer;
        @media (max-width: 1000px) {
          font-size: 11px;
          width: 70%;
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
        width: 35px;
        height: 25px;
        color: black;
        font-size: 13px;
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
    /* .modal-svg-download-wrapper {
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
    } */
  }
}
</style>
