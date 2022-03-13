# Sketch-icons

Sketch-icons is an icon library that makes it easy for individuals to utilise icons.It consists of modern icons.

<!-- **Note** : Sketch-icons is still a beta version.We recommend you to wait till we publish the package -->

https://sketch-icons.gitbook.io/docs/

[![npm](https://img.shields.io/static/v1?label=npm&message=6.14.16&color=red)](https://www.npmjs.com/package/sketch-icons)
[![yarn](https://img.shields.io/static/v1?label=yarn&message=1.22.17&color=blue)](https://www.npmjs.com/package/sketch-icons)
[![npm downloads](https://img.shields.io/npm/dm/sketch-icons.svg?style=flat-square&color=purple)](https://www.npmjs.com/package/sketch-icons)
<a href="https://github.com/tabler/tabler-icons/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons.svg" alt="License"></a>

## Installation

```bash
npm i @sketch/icons
# or
yarn add @sketch/icons
```

## Usage

```jsx
import { PlayFill } from "@sketch/icons";

class Icons extends React.Component {
  render() {
    return (
      <h2>
        Here's a <PlayFill />
      </h2>
    );
  }
}
```

# Properties

| Property    | Usage                        | Default   |
| ----------- | ---------------------------- | --------- |
| color       | `color="color"`              | `#2A2238` |
| height      | `height={height}`            | `32`      |
| width       | `width={width}`              | `32`      |
| stroke      | `stroke="stroke-color"`      | `#2A2238` |
| strokeWidth | `strokeWidth="stroke-width"` | `1.5`     |
 
```jsx
import { ArrowUpCircle , ArrowDown } from "@sketch/icons";

class Icons extends React.Component {
  render() {
    return (
      <h2>
        Go Up <ArrowUpCircle height={100} width={100} />
        Move Down <ArrowDown stroke="blue" strokeWidth="0.1" color="#ffffff" />
      </h2>
    );
  }
}
```

## How to Contribute Assets

**Note :** At this moment, we just ask that you place your icon in the assets folder and not to run build commands.

1. Place your asset (only svg) in the `assets` folder.
2. Add your asset in [icon_list](icon_list.md).
3. Run the `yarn build` command.
4. Type `yarn changeset` and choose major/minor/patch, then write a summary.
5. Submit a Pull Request
6. Your asset will be added to the list.

**Note :** Only colour icons will be permitted for 3D icons. Feel free to contribute.

## Icon Description

| Icon Type | File name            | Size    | Color   |
| --------- | -------------------- | ------- | ------- |
| Normal    | icon-name.svg        | 28 x 28 | #2a2238 |
| Circle    | icon-name-circle.svg | 28 x 28 | #2a2238 |
| Filled    | icon-name-fill.svg   | 28 x 28 | #2a2238 |
| 3d Icons  | icon-name-3d.svg     | 28 x 28 | colors  |

## Contributing

Please see [CONTRIBUTING GUIDELINES](CONTRIBUTING.md)

## Code of Conduct

Please read the [CODE OF CONDUCT](CODE_OF_CONDUCT.md)

## Versioning

Refer [Versioning](VERSIONING.md)

## Icon List

## Icons List

| Image                                   | Name                                                  | Image                                 | Name                                                |
| --------------------------------------- | ----------------------------------------------------- | ------------------------------------- | --------------------------------------------------- |
| ![](./assets/arrow-up.svg)              | <mark style="color:blue;">`ArrowUp`</mark>            | ![](./assets/arrow-left.svg)          | <mark style="color:blue;">`ArrowLeft`</mark>        |
| ![](./assets/arrow-up-fill.svg)         | <mark style="color:blue;">`ArrowUpFill`</mark>        | ![](./assets/arrow-left-fill.svg)     | <mark style="color:blue;">`ArrowLeftFill`</mark>    |
| ![](./assets/arrow-up-circle.svg)       | <mark style="color:blue;">`ArrowUpCircle`</mark>      | ![](./assets/arrow-left-circle.svg)   | <mark style="color:blue;">`ArrowLeftCircle`</mark>  |
| ![](./assets/arrow-down.svg)            | <mark style="color:blue;">`ArrowDown`</mark>          | ![](./assets/arrow-right.svg)         | <mark style="color:blue;">`ArrowRight`</mark>       |
| ![](./assets/arrow-down-fill.svg)       | <mark style="color:blue;">`ArrowDownFill`</mark>      | ![](./assets/arrow-right-fill.svg)    | <mark style="color:blue;">`ArrowRightFill`</mark>   |
| ![](./assets/arrow-down-circle.svg)     | <mark style="color:blue;">`ArrowDownCircle`</mark>    | ![](./assets/arrow-right.svg)         | <mark style="color:blue;">`ArrowRightCircle`</mark> |
| ![](./assets/arrow-to-down-circle.svg)  | <mark style="color:blue;">`ArrowToDownCircle`</mark>  | ![](./assets/arrow-to-down-fill.svg)  | <mark style="color:blue;">`ArrowToDownFill`</mark>  |
| ![](./assets/arrow-to-up-circle.svg)    | <mark style="color:blue;">`ArrowToUpCircle`</mark>    | ![](./assets/arrow-to-up-fill.svg)    | <mark style="color:blue;">`ArrowToUpFill`</mark>    |
| ![](./assets/arrow-to-left-circle.svg)  | <mark style="color:blue;">`ArrowToLeftCircle`</mark>  | ![](./assets/arrow-to-left-fill.svg)  | <mark style="color:blue;">`ArrowToLeftFill`</mark>  |
| ![](./assets/arrow-to-right-circle.svg) | <mark style="color:blue;">`ArrowToRightCircle`</mark> | ![](./assets/arrow-to-right-fill.svg) | <mark style="color:blue;">`ArrowToRightFill`</mark> |
| ![](./assets/backward-circle.svg)       | <mark style="color:blue;">`BackwardCircle`</mark>     | ![](./assets/backward-fill.svg)       | <mark style="color:blue;">`BackwardFill`</mark>     |
| ![](./assets/forward-circle.svg)        | <mark style="color:blue;">`ForwardCircle`</mark>      | ![](./assets/forward-fill.svg)        | <mark style="color:blue;">`ForwardFill`</mark>      |
| ![](./assets/bluetooth.svg)             | <mark style="color:blue;">`Bluetooth`</mark>          | ![](./assets/bluetooth-fill.svg)      | <mark style="color:blue;">`BluetoothFill`</mark>    |
| ![](./assets/code-alt.svg)              | <mark style="color:blue;">`CodeAlt`</mark>            | ![](./assets/code-fill.svg)           | <mark style="color:blue;">`CodeFill`</mark>         |
| ![](./assets/pause-circle.svg)          | <mark style="color:blue;">`PauseCircle`</mark>        | ![](./assets/pause-fill.svg)          | <mark style="color:blue;">`PauseFill`</mark>        |
| ![](./assets/play-circle.svg)           | <mark style="color:blue;">`PlayCircle`</mark>         | ![](./assets/play-fill.svg)           | <mark style="color:blue;">`PlayFill`</mark>         |
