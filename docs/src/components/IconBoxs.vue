<template>
  <icon-box id="icon-box">
    <category-name class="category-name">"App Icons"</category-name>
    <icon-wrap class="icon-wrap">
      <div class="icon">v-for=""</div>
    </icon-wrap>
  </icon-box>
</template>

<script>
import styled from 'vue3-styled-components';

export const IconBox = styled.div`
  width: 100%;
  margin-top: 150px;
`;
export const CategoryName = styled.p``;
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
