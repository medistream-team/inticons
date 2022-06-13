<p align="center">
  <a href="https://github.com/medistream-team/inticon" target="_blank">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="150" height="38.788" viewBox="0 0 495 128"><path d="M134.5 64c0 32.7.1 46.1.2 29.7.2-16.3.2-43.1 0-59.5-.1-16.3-.2-2.9-.2 29.8z"/><path d="M53.2 23.8C47 26 41.8 30 37.3 35.9c-5 6.5-6.3 12.4-6.3 28.6 0 15.8.6 17.5 6.7 17.5 5.2 0 5.7-1.8 6.3-18.6.5-15.1.5-15.2 3.6-19.6 4.1-5.6 10.2-8.8 16.7-8.8 9.9 0 17.5 6.1 19.8 15.7 1.8 7.5 2.7 9.2 5.4 10.5 2.2 1 3 .8 5.3-.9 2.4-1.9 2.7-2.7 2.6-7.9-.2-10.7-7.7-22-18-27-7.5-3.7-18.5-4.3-26.2-1.6z" fill="#1e88e5"/><path d="M179 64.5V97h18V32h-18v32.5zm124 0V97h18V32h-18v32.5zm-37-23c0 7.3-.1 7.5-2.5 7.5s-2.5.2-2.5 6.5.1 6.5 2.5 6.5h2.5v10.2c.1 14 1.1 18.6 4.8 22 4.2 3.6 10.2 4.4 18.3 2.4 3.5-.9 6.7-2 7.2-2.5.4-.4.1-3.7-.8-7.4l-1.7-6.5-3 .9c-5.7 1.6-6.8 0-6.8-10.1v-9h9V49h-9V34h-18v7.5zm-34.5 7.7c-1.6.6-4.2 2-5.7 3l-2.8 1.9v-2.5c0-2.6-.1-2.6-8-2.6h-8v48h17V69.8l3.4-3.4c4.1-4.1 5.8-4.2 8.5-.8 1.9 2.4 2.1 4 2.1 17V97h17V78.2c0-21.1-1.1-25.7-6.9-28.6-3.4-1.8-12.1-2-16.6-.4zm111.7.1c-5.3 1.7-12.8 9-14.6 14.4-4.3 12.5.5 25.3 11.7 31 4.3 2.2 6.6 2.6 12.7 2.6 9.3 0 15-2.3 20.5-8.4l3.9-4.4-8.8-2.7c-7.7-2.4-9-2.5-10.3-1.3-3.6 3.7-9.7 2.4-12.4-2.6-1.7-3.3-.5-11 2.1-13.1 2.7-2.2 7.8-2.3 10.1-.2 1.5 1.4 2.5 1.3 10.3-1.1l8.6-2.6-1.9-2.7c-4.9-7-11.8-10.2-21.6-10.1-3.8.1-8.5.6-10.3 1.2zm50.8.3c-9.7 4.2-15 12.3-15 22.9.1 15.1 10 24.5 26 24.5 16.2 0 26-9.3 26-24.5 0-10.7-4.4-17.9-13.5-22.1-6-2.9-17.9-3.2-23.5-.8zm16.8 16c3.1 3.5 3.1 10.3-.1 14-5.2 6.1-13.7 1.8-13.7-6.9 0-9.4 7.9-13.5 13.8-7.1zm26.6-16.3c-.2.7-.3 11.6-.2 24.2l.3 23h17l.3-14.2.3-14.2 3-2.5c3.6-3.1 6-3.3 8.2-.8 1.3 1.5 1.7 4.6 1.9 16.7l.3 15h17v-19c-.1-20.8-.6-23.1-6.2-27.5-2.4-1.9-3.8-2.1-10.4-1.8-6.2.2-8.3.8-11.7 3.1L453 54v-6h-7.5c-5.2 0-7.7.4-8.1 1.3zM62.3 55.5c-2 1.4-2.1 2.5-2.5 16.2-.3 13-.6 15.3-2.6 19-6.1 11.6-21.9 14.2-31.6 5.3-4.1-3.8-5.9-7.3-7-14.2-.8-4.6-2.9-6.8-6.5-6.8-4 0-6.1 2.8-6.1 8.3 0 13.8 12.2 27.7 27 30.6s30.2-5.1 36.6-19.2c2.6-5.7 2.9-7.3 3.2-20.7.4-13.7.3-14.7-1.8-17.3-2.4-3-5.5-3.5-8.7-1.2z"/></svg>
  </a>
</p>
<p align="center">
  <img alt="Version" src="https://img.shields.io/npm/v/inticon?color=blue" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## Install

```sh
npm install inticon
```

## Usage

### Import

#### CSS

```css
@import url('inticon/fonts/inticon.bundle.css');
```

#### Vue

```html
<script>
  import 'inticon/fonts/inticon.bundle.css';

  export default {
    // ...
  };
</script>
```

### Component

Each icon can be referenced by their name prefixed with `ii-`. For example, You can get the arrow-right icon with using `ii-arrow-right`. You can use `font-size` and `color` properties to change the icon appearance.

```html
<i class="ii ii-arrow-right"></i>
```

### Helper Classes

Inticon contains many helper classes to quickly modify the look of the icons.

#### Rotate

- `ii-rotate-45`: Rotate icon 45 Degrees.
- `ii-rotate-90`: Rotate icon 90 Degrees.
- `ii-rotate-135`: Rotate icon 135 Degrees.
- `ii-rotate-180`: Rotate icon 180 Degrees.
- `ii-rotate-225`: Rotate icon 225 Degrees.
- `ii-rotate-270`: Rotate icon 270 Degrees.
- `ii-rotate-315`: Rotate icon 315 Degrees.

```html
<i class="ii ii-arrow-right ii-rotate-45"></i>
```

#### Flip

- `ii-flip-h`: Flip icon horizontal.
- `ii-flip-v`: Flip icon vertical.

```html
<i class="ii ii-arrow-right ii-flip-h"></i>
```

> `ii-rotate-*` and `ii-flip-*` classes cannot be used on the same element at the same time.

#### Size

- `ii-2x`: Doubles the size.
- `ii-3x`: Triples the size.
- `ii-4x`: Quadraples the size.

```html
<i class="ii ii-arrow-right ii-4x"></i>
```

#### Spin

- `ii-spin`: Spinning icon.

```html
<i class="ii ii-arrow-right ii-spin"></i>
```

## Contributor

### 👥 [**INTEGRATION Corp.**](https://github.com/medistream-team)

- [garudanish](https://github.com/garudanish)
- [HyungwonJang0327](https://github.com/HyungwonJang0327)

## 📝 License

Copyright © 2022 [INTEGRATION Corp.](https://github.com/medistream-team)<br />
This project is [MIT](https://github.com/medistream-team/inticon/blob/master/LICENSE) licensed.
