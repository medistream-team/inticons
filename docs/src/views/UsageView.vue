<template>
  <div class="usage">
    <h1>This is an usage page</h1>
    <div v-html="changeMarkdown"></div>
  </div>
</template>

<script>
import axios from 'axios';
import { marked } from 'marked';
import 'highlight.js/styles/a11y-dark.css';

export default {
  data: function () {
    return {
      markdown: '',
    };
  },
  mounted() {
    this.getMarkdown();
  },
  computed: {
    filteredGlyphs() {
      return this.glyphs.filter(glyph =>
        glyph.search.map(x => x.startsWith(this.userInput)).includes(true)
      );
    },
    changeMarkdown() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code, lang) {
          const hljs = require('highlight.js');
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        },
        langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
        headerIds: false,
      });
      return marked.parse(this.markdown);
    },
  },
  methods: {
    getMarkdown() {
      axios
        .get(
          'https://raw.githubusercontent.com/medistream-team/inticon/main/README.md'
        )
        .then(res => (this.markdown = res.data));
    },
  },
};
</script>

<style scoped>
.usage {
  max-width: 640px;
  margin: 0 auto;
  text-align: left;
}
</style>
