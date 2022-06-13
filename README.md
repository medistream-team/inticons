<p align="center">
  <a href="https://github.com/medistream-team/inticon" target="_blank">
  <img alt="inticons" src="https://user-images.githubusercontent.com/73154157/173287685-f48b2a71-de64-458f-80a1-573424da2a14.svg" width="150" />
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
