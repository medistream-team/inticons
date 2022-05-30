<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="userInput" />
    <ul>
      <li v-for="glyph in filteredGlyphs" :key="glyph.uid">
        <i v-bind:class="`ii-${glyph.css}`"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import glyphs from './config.json';

export default {
  data: function () {
    return {
      glyphs,
      userInput: '',
    };
  },
  computed: {
    filteredGlyphs: function () {
      return this.glyphs.filter(glyph =>
        glyph.search.map(x => x.startsWith(this.userInput)).includes(true)
      );
    },
  },
};
</script>
