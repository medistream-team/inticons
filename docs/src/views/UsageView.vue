<template>
  <div class="usage">
    <div class="markdown-body">
      <div v-html="changeMarkdown"></div>
    </div>
  </div>
</template>

<script>
const prism = require('prismjs');
const { marked } = require('marked');
import 'prismjs/themes/prism.min.css';
import 'github-markdown-css/github-markdown-light.css';
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
        highlight: (code, lang) => {
          if (prism.languages[lang]) {
            return prism.highlight(code, prism.languages[lang], lang);
          } else {
            return code;
          }
        },
        langPrefix: 'language-',
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

<style scoped lang="scss">
.usage {
  max-width: 80%;
  margin: 0 auto;
  text-align: left;

  .markdown-body {
    margin-top: 80px - 24px;
  }
}
</style>
