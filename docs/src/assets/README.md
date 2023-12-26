<p align="center">
  <a href="https://github.com/medistream-team/inticons" target="_blank">
  <img alt="IntIcons" src="https://github.com/medistream-team/inticons/raw/main/docs/src/assets/images/og.png" width="540" />
  </a>
</p>
<p align="center">
  <img alt="Version" src="https://img.shields.io/npm/v/inticons?color=blue" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## Install

```sh
npm install inticons
```

## Usage

### Import

#### CSS

```css
@import url('inticons/fonts/inticons.bundle.min.css');
```

#### Vue

```html
<script>
  import 'inticons/fonts/inticons.bundle.min.css';

  export default {
    // ...
  };
</script>
```

### CDN (Not Recommended)

```html
<link href="https://inticons.com/inticons.bundle.css" rel="stylesheet" type="text/css">
<link href="https://inticons.com/inticons.bundle.min.css" rel="stylesheet" type="text/css">
```

### Component

Each icon can be referenced by their name prefixed with `ii-`. For example, You can get the arrow-right icon with using `ii-arrow-right`. You can use `font-size` and `color` properties to change the icon appearance.

```html
<i class="ii ii-arrow-right"></i>
```

### Helper Classes

Inticons contains many helper classes to quickly modify the look of the icons.

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

#### Weight

Some icons has `ii-weight-600` class, which thicken the icon.

- `ii-weight-600`: Thicken the icon.

```html
<i class="ii ii-arrow-right ii-weight-600"></i>
```

## Contributor

### 👥 [**INTEGRATION Corp.**](https://github.com/medistream-team)

- [garudanish](https://github.com/garudanish)
- [HyungwonJang0327](https://github.com/HyungwonJang0327)

## 📝 License

Inticons's code (all files, except fonts and svg icons) is distributed under MIT license.<br>
Embedded fonts and svg icons are distributed under [UI8](https://ui8.net) primary licenses. See icons info on UI8 website for [licensing agreement](https://ui8.net/licensing).
