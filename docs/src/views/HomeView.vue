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
      <input-wrapper id="main-search">
        <SearchInput />
      </input-wrapper>
      <icon-wrapper class="icon-for">
        <IconBoxs />
      </icon-wrapper>
    </width-setting>
  </home-wrapper>
</template>

<script>
import styled from 'vue3-styled-components';
import IconBoxs from '../components/IconBoxs.vue';
import SearchInput from '../components/SearchInput.vue';

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 1000px;
  margin: 150px 0px;
`;
export const WidthSetting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
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
export const InputWrapper = styled.div`
  margin-top: 40px;
  width: 70%;
  height: 50px;
`;
export const IconWrapper = styled.div`
  width: 100%;
`;

export default {
  name: 'HomePage',
  components: {
    IconBoxs,
    SearchInput,
    // styled-components
    HomeWrapper,
    WidthSetting,
    MainTop,
    MainIntroductionTop,
    MainIntroductionBottom,
    InputWrapper,
    IconWrapper,
  },
  created() {
    // fetch('').then(res => res.json()).then(data => console.log(data))
  },
};
</script>
