<template>
  <docs-wrapper class="docs">
    <width-setting>
      <h-one>Usage</h-one>
      <p-tag
        >Ionicons is a completely open-source icon set with 1,300 icons crafted
        for web, iOS, Android, and desktop apps. Ionicons was made for Ionic
        Framework, a cross-platform hybrid and Progressive Web App framework.
      </p-tag>
      <h-two>Using the web component</h-two>
      <p-tag
        >The Ionicons Web Component is an easy and performant way to use
        Ionicons in your app. The component will dynamically load an SVG for
        each icon, so your app is only requesting the icons that you need.
        <br />
        <br />
        Also note that only visible icons are loaded, and icons which are "below
        the fold" and hidden from the user's view do not make fetch requests for
        the svg resource.
      </p-tag>
      <h-three>Installation</h-three>
      <p-tag>
        If you're using Ionic Framework, Ionicons is packaged by default, so no
        installation is necessary. Want to use Ionicons without Ionic Framework?
        Place the following "script" near the end of your page, right before the
        closing "body" tag, to enable them.
      </p-tag>
      <!-- <code-wrapper> -->
        <ssh-pre
          class="highlight-code"
          language="html"
          copy-button="true"
          label="HTML Vue Template"
          reactive="true"
          dark
        >
          &lt;script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"&gt;
          &lt;/script&gt; &lt;script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"&gt;&lt;/script&gt;
        </ssh-pre>
      <!-- </code-wrapper> -->
      <h-three>Basic usage</h-three>
      <p-tag
        >To use a built-in icon from the Ionicons package, populate the name
        attribute on the ion-icon component:
      </p-tag>
      <ssh-pre
        class="highlight-code"
        language="html"
        copy-button="true"
        label="HTML Vue Template"
        reactive="true"
        dark
      >
        &lt;ion-icon name="heart"&gt;&lt;/ion-icon&gt;
      </ssh-pre>
      <h-three>Custom icons</h-three>
      <p-tag>
        To use a custom SVG, provide its url in the src attribute to request the
        external SVG file. The src attribute works the same as <b>img</b> in
        that the url must be accessible from the webpage that's making a request
        for the image. Additionally, the external file can only be a valid svg
        and does not allow scripts or events within the svg element.
      </p-tag>
      <ssh-pre
        class="highlight-code"
        language="html"
        copy-button="true"
        label="HTML Vue Template"
        reactive="true"
        dark
      >
        &lt;ion-icon src="/path/to/external/file.svg"&gt;&lt;/ion-icon&gt;
      </ssh-pre>
      <h-two>Variants</h-two>
      <p-tag>
        Each app icon in Ionicons has a filled, outline and sharp variant. These
        different variants are provided to make your app feel native to a
        variety of platforms. The filled variant uses the default name without a
        suffix. Note: Logo icons do not have outline or sharp variants.
      </p-tag>
      <ssh-pre
        class="highlight-code"
        language="html"
        copy-button="true"
        label="HTML Vue Template"
        reactive="true"
        dark
      >
        &lt;ion-icon name="heart"&gt;&lt;/ion-icon&gt; &lt;!--filled--&gt;
        &lt;ion-icon name="heart-outline"&gt;&lt;/ion-icon&gt;
        &lt;!--outline--&gt; &lt;ion-icon
        name="heart-sharp"&gt;&lt;/ion-icon&gt; &lt;!--sharp--&gt;
      </ssh-pre>
      <h-three>Platform Specificity</h-three>
      <p-tag>
        When using icons in Ionic Framework you can specify different icons per
        platform. Use the md and ios attributes and provide the platform
        specific icon/variant name.
      </p-tag>
      <ssh-pre
        class="highlight-code"
        language="html"
        copy-button="true"
        label="HTML Vue Template"
        reactive="true"
        dark
      >
        &lt;ion-icon ios="heart-outline" md="heart-sharp"&gt;&lt;/ion-icon&gt;
      </ssh-pre>
      <h-two>Size</h-two>
      <p-tag>
        To specify the icon size, you can use the size attribute for our
        pre-defined font sizes.
      </p-tag>
      <ssh-pre
        class="highlight-code"
        language="html"
        copy-button="true"
        label="HTML Vue Template"
        reactive="true"
        dark
      >
        &lt;ion-icon size="small"&gt;&lt;/ion-icon&gt; &lt;ion-icon
        size="large"&gt;&lt;/ion-icon&gt;
      </ssh-pre>
      <br />
      <br />
      <p-tag>
        Or you can set a specific size by applying the font-size CSS property on
        the ion-icon component. It's recommended to use pixel sizes that are a
        multiple of 8 (8, 16, 32, 64, etc.)
      </p-tag>
      <ssh-pre
        class="highlight-code"
        language="css"
        copy-button="true"
        label="css"
        reactive="true"
        dark
      >
        ion-icon { font-size: 64px; }
      </ssh-pre>
      <h-two>Color</h-two>
      <p-tag>
        Specify the icon color by applying the color CSS property on the
        ion-icon component.
      </p-tag>
      <h-two>Stroke weight</h-two>
      <p-tag>
        When using an outline icon variant it is possible to adjust the stroke
        weight, for improved visual balance relative to the icon's size or
        relative to the weight of adjacent text. You can set a specific size by
        applying the --ionicon-stroke-weight CSS custom property to the ion-icon
        component. The default value is 32px
      </p-tag>
      <ssh-pre
        class="highlight-code"
        language="html"
        copy-button="true"
        label="HTML Vue Template"
        reactive="true"
        dark
      >
        &lt;ion-icon name="heart-outline"&gt;&lt;/ion-icon&gt;
      </ssh-pre>
      <ssh-pre
        class="highlight-code"
        language="css"
        copy-button="true"
        label="css"
        reactive="true"
        dark
      >
        ion-icon { --ionicon-stroke-width: 16px; }
      </ssh-pre>
      <h-two>Migration from V4</h-two>
      <p-tag>
        See the 5.0 release notes for a list of icon deletions/renames. You can
        find an archived version of the v4 site here.
      </p-tag>
    </width-setting>
  </docs-wrapper>
</template>
<script>
import styled from 'vue3-styled-components';

import SshPre from 'simple-syntax-highlighter';
import 'simple-syntax-highlighter/dist/sshpre.css';

export const HOne = styled.h1`
  margin-top: 20px;
`;
export const HTwo = styled.h2`
  margin-top: 80px;
`;
export const HThree = styled.h3`
  margin-top: 50px;
`;
export const PTag = styled.p`
  margin-top: 20px;
`;
export const DocsWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 1000px;
  margin: 150px 0px;
`;
export const WidthSetting = styled.div`
  width: 45%;
`;
export const CodeWrapper = styled.div`
  overflow: auto;
`;

export default {
  name: 'docs-view',
  components: {
    SshPre,
    //styled-components
    HOne,
    HTwo,
    HThree,
    PTag,
    DocsWrapper,
    WidthSetting,
    // CodeWrapper,
  },
};
</script>
<style scoped>
.highlight-code {
  white-space: pre;
  font-size: 14px;
  padding: 0px;
  /* overflow: hidden; */
}
</style>
