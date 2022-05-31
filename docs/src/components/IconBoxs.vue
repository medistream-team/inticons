<template>
  <icon-box>
    <category-name class="category-name">"App Icons"</category-name>
    <icon-wrap class="icon-wrap">
      <div class="icon">v-for=""</div>
    </icon-wrap>
  </icon-box>
  <icon-box>
    <category-name class="category-name">"Brand"</category-name>
    <icon-wrap class="icon-wrap">
      <div class="icon">v-for=""</div>
    </icon-wrap>
  </icon-box>
</template>

<script>
import styled from 'vue3-styled-components';

export const IconBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  margin-top: 50px;
  font-size: 20px;
`;
export const CategoryName = styled.p`
  display: flex;
  align-items: center;
  padding: 20px;
  position: sticky;
  top: 80px;
  height: 30px;
  background-color: white;
  border-bottom: 1px solid #1d77ff;
`;
export const IconWrap = styled.div``;

export default {
  name: 'icons-boxs',
  components: {
    //styled-components
    IconBox,
    CategoryName,
    IconWrap,
  },
};
</script>

<style scoped>
#icons {
  width: 100%;
  margin-top: 150px;
}
</style>
