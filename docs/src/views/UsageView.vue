<template>
  <div class="usage">
    <h1>This is an usage page</h1>
    <div v-html="changeMarkdown"></div>
  </div>
</template>

<script>
import { marked } from 'marked';
import 'highlight.js/styles/a11y-dark.css';
import usage from '../assets/README.md';

export default {
  data: function () {
    return {
      markdown: usage,
    };
  },
  computed: {
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
};
</script>

<style scoped>
.usage {
  max-width: 640px;
  margin: 0 auto;
  text-align: left;
}
</style>
