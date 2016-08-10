# postcss-dotted-border [![Build Status](https://travis-ci.org/OsukeUesugi/postcss-dotted-border.svg)](https://travis-ci.org/OsukeUesugi/postcss-dotted-border)

[PostCSS](https://github.com/postcss/postcss) plugin to change the spacing between dots of dotted border by using linear-gradient.

You can use four property.
* dotted-border-top: <border-width> || <border-height> || <spacing> || <border-color>;
* dotted-border-right: <border-width> || <border-height> || <spacing> || <border-color>;
* dotted-border-bottom: <border-width> || <border-height> || <spacing> || <border-color>;
* dotted-border-left: <border-width> || <border-height> || <spacing> || <border-color>;


```css
//before
.aaa {
  dotted-border-top: 1px 1px 4px #000;
}
.bbb {
  dotted-border-right: 1px 1px 4px #000;
}
.ccc {
  dotted-border-bottom: 1px 1px 4px #000;
}
.ddd {
  dotted-border-left: 1px 1px 4px #000;
}

```

```css
//after
.aaa {
  background-image: linear-gradient(to right, #000, #000 1px, transparent 1px, transparent 4px);
  background-size: 5px 1px;
  background-position: top;
  background-repeat: repeat-x;
}
.bbb {
  background-image: linear-gradient(to bottom, #000, #000 1px, transparent 1px, transparent 4px);
  background-size: 1px 5px;
  background-position: right;
  background-repeat: repeat-y;
}
.ccc {
  background-image: linear-gradient(to right, #000, #000 1px, transparent 1px, transparent 4px);
  background-size: 5px 1px;
  background-position: bottom;
  background-repeat: repeat-x;
}
.ddd {
  background-image: linear-gradient(to bottom, #000, #000 1px, transparent 1px, transparent 4px);
  background-size: 1px 5px;
  background-position: left;
  background-repeat: repeat-y;
}
```

## Usage

```js
postcss([ require('postcss-dotted-border') ])
```

## Install
```shell
npm install postcss-dotted-border
```
