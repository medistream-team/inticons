<template>
  <home-wrapper>
    <width-setting>
      <main-top class="main-top">
        <main-introduction-top class="main-introduction-top">
          Open source icons. <br />
          Lovingly hand-crafted.
        </main-introduction-top>
        <main-introduction-bottom class="main-introduction-bottom">
          Premium designed icons for use in web, iOS, Android, and desktop apps.
          Support for SVG and web font. Completely open source, MIT licensed and
          built by Ionic.
        </main-introduction-bottom>
      </main-top>
      <search-target id="target-scroll" />
      <search-box
        v-model="this.$store.state.handleInput"
        type="text"
        id="target-focus"
        placeholder="search icons..."
      />
      <icon-wrapper class="icon-for">
        <IconBoxs />
      </icon-wrapper>
    </width-setting>
  </home-wrapper>
</template>

<script>
import styled from 'vue3-styled-components';
import IconBoxs from '../components/IconBoxs.vue';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  min-height: 1000px;
  margin: 150px 0px;
`;
export const WidthSetting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  padding: 30px;
`;
export const MainTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainIntroductionTop = styled.article`
  margin-top: 100px;
  font-size: 35px;
  text-align: center;
  line-height: 1.3;
`;
export const MainIntroductionBottom = styled.article`
  width: 50%;
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
`;
export const SearchBox = styled.input`
  border-style: none;
  width: 100%;
  height: 40px;
  padding: 0px 20px;
  border-radius: 5px;
  background-color: #f8f8fc;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgb(196, 196, 196);
    font-size: 15px;
  }
`;
export const IconWrapper = styled.div`
  width: 100%;
`;
export const SearchBtn = styled.button`
  position: fixed;
  bottom: 170px;
  right: 100px;
  width: 50px;
  height: 50px;
  border-style: none;
  cursor: pointer;
  @media() {
    display: none;
  }
`;
export const SearchTarget = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  &:focus {
    border: 2px solid red;
  }
`;

export default {
  name: 'HomePage',
  components: {
    IconBoxs,
    // styled-components
    HomeWrapper,
    WidthSetting,
    MainTop,
    MainIntroductionTop,
    MainIntroductionBottom,
    IconWrapper,
    SearchTarget,
    SearchBox,
  },
};
</script>
