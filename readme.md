# Sketch-icons

Sketch-icons is an icon library that makes it easy for individuals to utilise icons.

<!-- **Note** : Sketch-icons is still a beta version.We recommend you to wait till we publish the package -->

https://sketch-icons.gitbook.io/docs/

[![npm](https://img.shields.io/static/v1?label=npm&message=6.14.16&color=red)](https://www.npmjs.com/package/sketch-icons)
[![yarn](https://img.shields.io/static/v1?label=yarn&message=1.22.17&color=blue)](https://www.npmjs.com/package/sketch-icons)
[![npm downloads](https://img.shields.io/npm/dm/sketch-icons.svg?style=flat-square&color=purple)](https://www.npmjs.com/package/sketch-icons)
[![Node.js Package](https://github.com/garudatechnologydevelopers/Sketch-icons/actions/workflows/npm-publish.yml/badge.svg?branch=main)](https://github.com/garudatechnologydevelopers/Sketch-icons/actions/workflows/npm-publish.yml)

## Installation

```bash
npm i @legitmelon/sketch-icons
# or 
yarn add @legitmelon/sketch-icons
```

## Usage

```jsx
import { Gift } from 'sketch-icons';

class Icons extends React.Component {
    render() {
        return <h2> Here's a Gift <Gift /></h2>
    }
}
```

## How to Contribute Assets

**Note :** At this moment, we just ask that you place your icon in the assets folder and not to run build commands.
1. Place your asset (only svg) in the `assets` folder. 
2. Run the `yarn build` command.
3. Type `yarn changeset` and choose major/minor/patch, then write a summary.
4. Submit a Pull Request
5. Your asset will be added to the list.

**Note :** Only colour icons will be permitted for 3D icons.
## Icon Description

| Icon Type  | File name       | Size     | Color   |
| --------   | --------------  |----------|---------|
| Normal     | iconName.svg    |  32 x 32 | #2a2238 |
| 3d Icons   | iconName3d.svg  |  32 x 32 | colors  |

## Contributing

Please see [CONTRIBUTING GUIDELINES](CONTRIBUTING.md)

## Code of Conduct

Please read the [CODE OF CONDUCT](CODE\_OF\_CONDUCT.md)

## Versioning

Refer [Versioning](VERSIONING.md)

## Icon List

| Image                              | Name                                               | Image | Name |
| ---------------------------------- | -------------------------------------------------- |-------|------|
| ![](./assets/arrow-up.svg) | <mark style="color:blue;">`ArrowUp`</mark> |           ![](./assets/arrow-left.svg) | <mark style="color:blue;">`ArrowLeft`</mark> | 
| ![](./assets/arrow-up-fill.svg) | <mark style="color:blue;">`ArrowUpFill`</mark> |           ![](./assets/arrow-left-fill.svg) | <mark style="color:blue;">`ArrowLeftFill`</mark> | 
| ![](./assets/arrow-up-circle.svg) | <mark style="color:blue;">`ArrowUpCircle`</mark> |           ![](./assets/arrow-left-circle.svg) | <mark style="color:blue;">`ArrowLeftCircle`</mark> | 
| ![](./assets/arrow-down.svg) | <mark style="color:blue;">`ArrowDown`</mark> |           ![](./assets/arrow-right.svg) | <mark style="color:blue;">`ArrowRight`</mark> | 
| ![](./assets/arrow-down-fill.svg) | <mark style="color:blue;">`ArrowDownFill`</mark> |           ![](./assets/arrow-right-fill.svg) | <mark style="color:blue;">`ArrowRightFill`</mark> | 
| ![](./assets/arrow-down-circle.svg) | <mark style="color:blue;">`ArrowDownCircle`</mark> |           ![](./assets/arrow-right.svg) | <mark style="color:blue;">`ArrowRightCircle`</mark> | 
