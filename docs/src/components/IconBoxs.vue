<template>
  <icon-box id="icon-box">
    <p class="category-name">"App Icons"</p>
    <div class="icon-wrap">
      <div class="icon">v-for=""</div>
    </div>
  </icon-box>
</template>

<script>
import styled from 'vue3-styled-components';

export const IconBox = styled.div`
  width: 100%;
  margin-top: 150px;
`;
export default {
  name: 'icons-boxs',
  components: {
    //styled-components
    IconBox,
  },
};
</script>

<style scoped>
#icons {
  width: 100%;
  margin-top: 150px;
}
</style>
