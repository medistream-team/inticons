<template>
  <div class="typing-effect">
    <div class="icon">
      <i v-if="shownIcon" :class="`ii ii-${shownIcon}`"></i>
      <img v-else src="../assets/images/loading.svg" alt="" />
    </div>
    <div class="typing">
      <span class="tag-heading">&lt;i class=&quot;ii ii-</span>
      <vue-writer
        :array="iconClassNames"
        :typeSpeed="120"
        :eraseSpeed="20"
        :intervals="50"
        :delay="delay"
        @typed="changeIcon"
      />
      <span class="tag-following">&quot;&gt;&lt;/i&gt;</span>
    </div>
  </div>
</template>

<script>
import VueWriter from 'vue-writer/src/vue-writer.vue';
import glyphs from '../assets/config.json';

export default {
  name: 'TypingEffect',
  components: {
    VueWriter,
  },
  props: {
    iconClassNames: {
      type: Array,
      default: () => {
        const cssAniArr = [
          'ii-spin',
          'ii-flip-v',
          'ii-flip-h',
          'ii-rotate-45',
          'ii-rotate-90',
          'ii-rotate-135',
          'ii-rotate-180',
          'ii-rotate-225',
          'ii-rotate-270',
          'ii-rotate-315',
        ];

        const cssGlyphs = glyphs.glyphs.map(
          glyph =>
            `${glyph.css.split('.').join(' ')} ${
              Math.floor(Math.random() * 2)
                ? `${cssAniArr[Math.floor(Math.random() * cssAniArr.length)]}`
                : ''
            }`
        );

        const shuffle = arr => {
          const strikeOut = [];
          while (arr.length) {
            const lastIdx = arr.length - 1;
            let roll = Math.floor(Math.random() * arr.length);
            [arr[lastIdx], arr[roll]] = [arr[roll], arr[lastIdx]];
            strikeOut.push(arr.pop());
          }
          return strikeOut;
        };

        return shuffle(cssGlyphs);
      },
    },
  },
  data() {
    return {
      delay: 3000,
      shownIcon: '',
    };
  },
  methods: {
    changeIcon(icon) {
      this.shownIcon = icon;
      setTimeout(() => {
        this.shownIcon = '';
      }, this.delay);
    },
  },
};
</script>

<style scoped lang="scss">
.icon {
  height: 60px;
  color: black;
  text-align: center;
  i {
    font-size: 50px;
  }
  img {
    opacity: 0.5;
    width: 60px;
    height: 60px;
  }
  @media (max-width: 1000px) {
    height: 40px;
    img {
      width: 40px;
      height: 40px;
    }
    i {
      font-size: 30px;
    }
  }
}
.typing {
  overflow: hidden;
  max-width: 100%;
  margin-top: 20px;
  color: black;
  font-family: 'monaco';
  font-size: 18px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
  .tag-heading,
  .tag-following {
    display: inline;
    opacity: 0.5;
  }
  .is-typed {
    display: inline;
    margin: 0 -30px 0 -10px;
    @media (max-width: 1100px) {
      margin: 0 -20px 0 -5px;
    }
  }
}
</style>
