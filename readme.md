# Sketch-icons

<img src="./assets/sketch-icons.svg" width="120" alt="React Icons">

Sketch-icons is an icon library that makes using icons simple for everyone.

<!-- **Note** : Sketch-icons is still a beta version.We recommend you to wait till we publish the package -->

https://sketch-icons.gitbook.io/docs/

[![npm](https://img.shields.io/static/v1?label=npm&message=6.14.16&color=red)](https://www.npmjs.com/package/sketch-icons)
[![yarn](https://img.shields.io/static/v1?label=yarn&message=1.22.17&color=blue)](https://www.npmjs.com/package/sketch-icons)
[![npm downloads](https://img.shields.io/npm/dm/@legitmelon/sketch-icons.svg?style=flat-square&color=purple)](https://www.npmjs.com/package/sketch-icons)
<a href="https://github.com/tabler/tabler-icons/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@tabler/icons.svg" alt="License"></a>

## Installation

```bash
npm i sketch-icons
# or
yarn add sketch-icons
```

## Usage

```jsx
import { PlayFill } from "sketch-icons";

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

## Properties

| Property    | Attribute                    | Default   |
| ----------- | ---------------------------- | --------- |
| color       | `color="color"`              | `#2A2238` |
| height      | `height={height}`            | `32`      |
| width       | `width={width}`              | `32`      |
| stroke      | `stroke="stroke-color"`      | `#2A2238` |
| strokeWidth | `strokeWidth="stroke-width"` | `1.5`     |

```jsx
import { ArrowUpCircle, ArrowDown } from "sketch-icons";

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

1. Create an icon with color `#2A2238` and strokeWidth of `1` or `1.5`.
1. Export your icon to `svg` format.
1. Place your assets in the `assets` folder.
2. Add your asset in [icon_list](icon_list.md).
3. Run the `yarn build` command. (*optional)
4. Type `yarn changeset` and choose major/minor/patch, then write a summary. (*optional)
5. Submit a Pull Request with title `[Icon request]`
6. Your asset will be added to the list.

**Note :** Only icons with color will be permitted for 3D icons. Feel free to contribute.

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

## Icons List

| Image                                   | Name                                                   | Image                                    | Name                                                    |
| --------------------------------------- | ------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------- |
| ![](./assets/arrow-up.svg)              | <mark style="color:blue;">`ArrowUp`</mark>             | ![](./assets/arrow-left.svg)             | <mark style="color:blue;">`ArrowLeft`</mark>            |
| ![](./assets/arrow-up-fill.svg)         | <mark style="color:blue;">`ArrowUpFill`</mark>         | ![](./assets/arrow-left-fill.svg)        | <mark style="color:blue;">`ArrowLeftFill`</mark>        |
| ![](./assets/arrow-up-circle.svg)       | <mark style="color:blue;">`ArrowUpCircle`</mark>       | ![](./assets/arrow-left-circle.svg)      | <mark style="color:blue;">`ArrowLeftCircle`</mark>      |
| ![](./assets/arrow-down.svg)            | <mark style="color:blue;">`ArrowDown`</mark>           | ![](./assets/arrow-right.svg)            | <mark style="color:blue;">`ArrowRight`</mark>           |
| ![](./assets/arrow-down-fill.svg)       | <mark style="color:blue;">`ArrowDownFill`</mark>       | ![](./assets/arrow-right-fill.svg)       | <mark style="color:blue;">`ArrowRightFill`</mark>       |
| ![](./assets/arrow-down-circle.svg)     | <mark style="color:blue;">`ArrowDownCircle`</mark>     | ![](./assets/arrow-right.svg)            | <mark style="color:blue;">`ArrowRightCircle`</mark>     |
| ![](./assets/arrow-to-down-circle.svg)  | <mark style="color:blue;">`ArrowToDownCircle`</mark>   | ![](./assets/arrow-to-down-fill.svg)     | <mark style="color:blue;">`ArrowToDownFill`</mark>      |
| ![](./assets/arrow-to-up-circle.svg)    | <mark style="color:blue;">`ArrowToUpCircle`</mark>     | ![](./assets/arrow-to-up-fill.svg)       | <mark style="color:blue;">`ArrowToUpFill`</mark>        |
| ![](./assets/arrow-to-left-circle.svg)  | <mark style="color:blue;">`ArrowToLeftCircle`</mark>   | ![](./assets/arrow-to-left-fill.svg)     | <mark style="color:blue;">`ArrowToLeftFill`</mark>      |
| ![](./assets/arrow-to-right-circle.svg) | <mark style="color:blue;">`ArrowToRightCircle`</mark>  | ![](./assets/arrow-to-right-fill.svg)    | <mark style="color:blue;">`ArrowToRightFill`</mark>     |
| ![](./assets/backward-circle.svg)       | <mark style="color:blue;">`BackwardCircle`</mark>      | ![](./assets/backward-fill.svg)          | <mark style="color:blue;">`BackwardFill`</mark>         |
| ![](./assets/forward-circle.svg)        | <mark style="color:blue;">`ForwardCircle`</mark>       | ![](./assets/forward-fill.svg)           | <mark style="color:blue;">`ForwardFill`</mark>          |
| ![](./assets/bluetooth.svg)             | <mark style="color:blue;">`Bluetooth`</mark>           | ![](./assets/bluetooth-fill.svg)         | <mark style="color:blue;">`BluetoothFill`</mark>        |
| ![](./assets/code-alt.svg)              | <mark style="color:blue;">`CodeAlt`</mark>             | ![](./assets/code-fill.svg)              | <mark style="color:blue;">`CodeFill`</mark>             |
| ![](./assets/pause-circle.svg)          | <mark style="color:blue;">`PauseCircle`</mark>         | ![](./assets/pause-fill.svg)             | <mark style="color:blue;">`PauseFill`</mark>            |
| ![](./assets/play-circle.svg)           | <mark style="color:blue;">`PlayCircle`</mark>          | ![](./assets/play-fill.svg)              | <mark style="color:blue;">`PlayFill`</mark>             |
| ![](./assets/align-center.svg)          | <mark style="color:blue;">`AlignCenter`</mark>         | ![](./assets/align-horizontal-left.svg)  | <mark style="color:blue;">`AlignHorizontalLeft`</mark>  |
| ![](./assets/align-justify.svg)         | <mark style="color:blue;">`AlignJustify`</mark>        | ![](./assets/align-horizontal-right.svg) | <mark style="color:blue;">`AlignHorizontalRight`</mark> |
| ![](./assets/align-left.svg)            | <mark style="color:blue;">`AlignLeft`</mark>           | ![](./assets/align-right.svg)            | <mark style="color:blue;">`AlignRight`</mark>           |
| ![](./assets/align-vertical-bottom.svg) | <mark style="color:blue;">`AlignVerticalBottom`</mark> | ![](./assets/align-vertical-center.svg)  | <mark style="color:blue;">`AlignVerticalCenter`</mark>  |
| ![](./assets/align-vertical-top.svg)    | <mark style="color:blue;">`AlignVerticalTop`</mark>    | ![](./assets/compass-1.svg)              | <mark style="color:blue;">`Compass1`</mark>             |
| ![](./assets/dashboard-fill.svg)        | <mark style="color:blue;">`DashboardFill`</mark>       | ![](./assets/compass-2.svg)              | <mark style="color:blue;">`Compass2`</mark>             |
| ![](./assets/dashboard.svg)             | <mark style="color:blue;">`Dashboard`</mark>           | ![](./assets/home-fill.svg)              | <mark style="color:blue;">`HomeFill`</mark>             |
| ![](./assets/location-marker-fill.svg)  | <mark style="color:blue;">`LocationMarkerFill`</mark>  | ![](./assets/location-marker.svg)        | <mark style="color:blue;">`LocationMarker`</mark>       |
| ![](./assets/task.svg)                  | <mark style="color:blue;">`Task`</mark>                | ![](./assets/task-fill.svg)              | <mark style="color:blue;">`TaskFill`</mark>             |
| ![](./assets/bookmark.svg)                  | <mark style="color:blue;">`Bookmark`</mark>                | ![](./assets/bookmark-fill.svg)              | <mark style="color:blue;">`BookmarkFill`</mark>             |
| ![](./assets/browser.svg)                  | <mark style="color:blue;">`Browser`</mark>                | ![](./assets/category-fill.svg)              | <mark style="color:blue;">`CategoryFill`</mark>             |
| ![](./assets/category.svg)                  | <mark style="color:blue;">`Category`</mark>                | ![](./assets/headset-1.svg)              | <mark style="color:blue;">`Headset1`</mark>             |
| ![](./assets/headset.svg)                  | <mark style="color:blue;">`Headset`</mark>                | ![](./assets/headset-fill.svg)              | <mark style="color:blue;">`HeadsetFill`</mark>             |
| ![](./assets/heart.svg)                  | <mark style="color:blue;">`Heart`</mark>                | ![](./assets/terminal.svg)              | <mark style="color:blue;">`Terminal`</mark>             |
| ![](./assets/activity.svg)                  | <mark style="color:blue;">`Activity`</mark>                | ![](./assets/adjust.svg)              | <mark style="color:blue;">`Adjust`</mark>             |
| ![](./assets/bell.svg)                  | <mark style="color:blue;">`Bell`</mark>                | ![](./assets/brightness.svg)              | <mark style="color:blue;">`Brightness`</mark>             |
| ![](./assets/clock.svg)                  | <mark style="color:blue;">`Clock`</mark>                | ![](./assets/clock-1.svg)              | <mark style="color:blue;">`Clock1`</mark>             |
| ![](./assets/contact-book-fill.svg)                  | <mark style="color:blue;">`ContactBookFill`</mark>                | ![](./assets/contact-book.svg)              | <mark style="color:blue;">`ContactBook`</mark>             |
| ![](./assets/contact-line.svg)                  | <mark style="color:blue;">`ContactLine`</mark>                | ![](./assets/divide.svg)              | <mark style="color:blue;">`Divide`</mark>             |
| ![](./assets/do-not-disturb.svg)                  | <mark style="color:blue;">`DoNotDisturb`</mark>                | ![](./assets/dots-horizontal.svg)              | <mark style="color:blue;">`DotsHorizontal`</mark>             |
| ![](./assets/dots-horizontal-rounded.svg)                  | <mark style="color:blue;">`DotsHorizontalRounded`</mark>                | ![](./assets/dots-vertical.svg)              | <mark style="color:blue;">`DotsVertical`</mark>             |
| ![](./assets/dots-vertical-rounded.svg)                  | <mark style="color:blue;">`DotsVerticalRounded`</mark>                | ![](./assets/edit.svg)              | <mark style="color:blue;">`Edit`</mark>             |
| ![](./assets/encircle-divide.svg)                  | <mark style="color:blue;">`EncircleDivide`</mark>                | ![](./assets/encircle-divide-fill.svg)              | <mark style="color:blue;">`EncircleDivideFill`</mark>             |
| ![](./assets/encircle-minus.svg)                  | <mark style="color:blue;">`EncircleMinus`</mark>                | ![](./assets/encircled-minus-fill.svg)              | <mark style="color:blue;">`EncircledMinusFill`</mark>             |
| ![](./assets/encircled-multiply-fill.svg)                  | <mark style="color:blue;">`EncircledMultiplyFill`</mark>                | ![](./assets/encircle-multiply.svg)              | <mark style="color:blue;">`EncircleMultiply`</mark>             |
| ![](./assets/filter.svg)                  | <mark style="color:blue;">`Filter`</mark>                | ![](./assets/filter-fill.svg)              | <mark style="color:blue;">`FilterFill`</mark>             |
| ![](./assets/flag.svg)                  | <mark style="color:blue;">`Flag`</mark>                | ![](./assets/flag-fill.svg)              | <mark style="color:blue;">`FlagFill`</mark>             |
| ![](./assets/image.svg)                  | <mark style="color:blue;">`Image`</mark>                | ![](./assets/image-fill.svg)              | <mark style="color:blue;">`ImageFill`</mark>             |
| ![](./assets/info.svg)                  | <mark style="color:blue;">`Info`</mark>                | ![](./assets/info-fill.svg)              | <mark style="color:blue;">`InfoFill`</mark>             |
| ![](./assets/list-li.svg)                  | <mark style="color:blue;">`ListLi`</mark>                | ![](./assets/list-ui.svg)              | <mark style="color:blue;">`ListUi`</mark>             |
| ![](./assets/lock-fill.svg)                  | <mark style="color:blue;">`LockFill`</mark>                | ![](./assets/message.svg)              | <mark style="color:blue;">`Message`</mark>             |
| ![](./assets/minux.svg)                  | <mark style="color:blue;">`Minus`</mark>                | ![](./assets/multiply.svg)              | <mark style="color:blue;">`Multiply`</mark>             |
| ![](./assets/pie-chart.svg)                  | <mark style="color:blue;">`PieChart`</mark>                | ![](./assets/plus.svg)              | <mark style="color:blue;">`Plus`</mark>             |
| ![](./assets/react-icon.svg)                  | <mark style="color:blue;">`ReactIcon`</mark>                | ![](./assets/react-fill.svg)              | <mark style="color:blue;">`ReactFill`</mark>             |
| ![](./assets/sand-clock.svg)                  | <mark style="color:blue;">`SandClock`</mark>                | ![](./assets/save-alt.svg)              | <mark style="color:blue;">`SaveAlt`</mark>             |
| ![](./assets/sent.svg)                  | <mark style="color:blue;">`Sent`</mark>                | ![](./assets/share.svg)              | <mark style="color:blue;">`Share`</mark>             |
| ![](./assets/sms.svg)                  | <mark style="color:blue;">`Sms`</mark>                | ![](./assets/tag-alt.svg)              | <mark style="color:blue;">`TagAlt`</mark>             |
| ![](./assets/tag-alt-2.svg)                  | <mark style="color:blue;">`TagAlt2`</mark>                | ![](./assets/unlock-fill.svg)              | <mark style="color:blue;">`UnlockFill`</mark>             |
| ![](./assets/user-fill.svg)                  | <mark style="color:blue;">`UserFill`</mark>                | ![](./assets/user-fill-1.svg)              | <mark style="color:blue;">`UserFill1`</mark>             |
| ![](./assets/user-profile.svg)                  | <mark style="color:blue;">`UserProfile`</mark>                | ![](./assets/user-profile-fill.svg)              | <mark style="color:blue;">`UserProfileFill`</mark>             |
| ![](./assets/view-list.svg)                  | <mark style="color:blue;">`ViewList`</mark>                | ![](./assets/warning.svg)              | <mark style="color:blue;">`Warning`</mark>             |
| ![](./assets/warning-fill.svg)                  | <mark style="color:blue;">`WarningFill`</mark>                | ![](./assets/encircle-plus.svg)              | <mark style="color:blue;">`EncirclePlus`</mark>             |
| ![](./assets/encircled-plus-fill.svg)                  | <mark style="color:blue;">`EncircledPlusFill`</mark>                | ![]()              | <mark style="color:blue;">` `</mark>             |
