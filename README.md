# Nuxt3 SVG Icons
A simple module to implement SVG icons in your nuxt3 package with quite some configuration options.

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->
- [🏀 Online playground](https://stackblitz.com/github/the-missing-pink/nuxt3-svg-icons?file=playground%2Fapp.vue)

## Features
- Configurable with several options: size, fill, stroke.
- Possible to use a different directory for your icons.

## Quick Setup

1. Add `nuxt3-svg-icons` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt3-svg-icons

# Using yarn
yarn add --dev nuxt3-svg-icons

# Using npm
npm install --save-dev nuxt3-svg-icons
```

2. Add `nuxt3-svg-icons` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt3-svg-icons'
  ]
})
```

3. If you want to set a different directory for your icons you can configure that in the `nuxt3-svg-icons` to the `modules` section of `nuxt.config.ts`
```js
export default defineNuxtConfig({
  modules: [
  'nuxt3-svg-icons'
  ]
  nuxt3SvgIcons: {
    dir: './path/to/your/icons'
  }
})
```
Be aware that you start the path with ```./```

That's it! You can now use Nuxt3 SVG Icons in your Nuxt app ✨

## Usage
1. Create either a folder 'icons' in the 'assets' folder, or any different structure in the 'assets' folder. If you create a different structure see the info above about how to change the settings for this.
2. Drop your icons in this folder with the extension **.svg**
3. In your project, use `<svg-icon name="" />` where you want to use it, the name you should enter is the name of your icon and if needed the path from the directory defined above or the 'assets/icons' folder, see subfolders for more clarification.

### Styling
#### Size
You can alter the size of the icon as you wish, by default the icon is defined as a square, but if needed you can change the dimensions of the icon. You can use units as px, em and rem.
1. Changing the size of the icon as a square you can do as follows: `<svg-icon name="icon-name" size="defined-size" />`
2. Changing the size of the icon and the aspect-ratio you can do as follows: `<svg-icon name="icon-name" size="{ width: defined-width, height: defined-height }" />`

#### Fill
For the fill there are 3 options:
1. You use the default value defined in the icon svg.
2. You define a fill color in the component `<svg-icon name="icon-name" fill="colorvalue" />`, this value can be rgb, rgba, or hex.
3. You use the inherited text-color. You define this as: `<svg-icon name="icon-name" useTextColor="true" />`

#### Stroke
You can also change the stroke of the svg, either the color and/or the width.
1. You can change the stroke-color by setting the variable stroke: `<svg-icon name="icon-name" stroke="stroke-color" />`
2. You can change the stroke-width by setting the variable stroke-width: `<svg-icon name="icon-name" stroke-width="stroke-width" />`

### Subfolders
If you would like to use some more complicated folder arrangement you will have to use paths from /icons

If you have a svg icon in nested directories such as:
```
📁icons / defined folder
└📁admin
⠀⠀└ badge.svg
└📁user
⠀⠀└ badge.svg
```
then the icons's name will be based on its own path directory and filename. Therefore, the icon's name will be:
```html
<svg-icon name="admin/badge"> and <svg-icon name="user/badge">
```

## To do
- SVG's with def are not always displayed properly, this still needs some work.

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```
