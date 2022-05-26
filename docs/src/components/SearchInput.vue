<template>
  <div id="search-input">
    <search-box type="text" placeholder="search icons..." />
  </div>
</template>

<script>
import styled from 'vue3-styled-components';

export const SearchBox = styled.input`
  border-style: none;
  width: 100%;
  height: 60px;
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

export default {
  name: 'search-input',
  components: {
    SearchBox,
  },
  data() {
    return {
      scrollposition: 0,
    };
  },
  method: {
    handleScroll(e) {
      this.scrollposition = e.target.scrollTop;
      console.log(e.target.scrollTop);
    },
  },
};
</script>

<style scoped></style>
