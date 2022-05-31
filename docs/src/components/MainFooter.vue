<template>
  <footer-wrapper id="main-footer">
    <width-setting>
      <footer-left>
        <footer-left-top>
          <img src="" alt="inticon-logo" class="inticon-logo" />
          <p>inticon open source</p>
        </footer-left-top>
        <div class="footer-left-bottom">Released by Medistream</div>
      </footer-left>
      <footer-right class="footer-right">
        <p class="cheatsheet">Cheatsheet</p>
        <p class="cheatsheet">ReleaseNote</p>
        <p class="cheatsheet">Cheatsheet</p>
      </footer-right>
    </width-setting>
  </footer-wrapper>
</template>
<script>
import styled from 'vue3-styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  font-size: 12px;
  background-color: #f8f8fc;
  color: rgb(118, 118, 118);
  font-weight: bold;
`;
export const WidthSetting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;
export const FooterLeft = styled.div`
  width: 50%;
`;
export const FooterLeftTop = styled.div`
  display: flex;
  align-items: center;
`;
export const FooterRight = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
`;

export default {
  name: 'main-footer',
  components: {
    // styled-components
    FooterWrapper,
    WidthSetting,
    FooterLeft,
    FooterLeftTop,
    FooterRight,
    // components
  },
};
</script>
<style scoped>
.inticon-logo {
  margin-right: 10px;
}
</style>
