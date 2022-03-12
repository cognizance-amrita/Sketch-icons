# Sketches

Sketches is a library for icons that helps people to use icons in a simple manner.

**Note** : Sketch-icons is still a beta version.We recommend you to wait till we publish the package

https://sketch-icons.gitbook.io/docs/

[![npm](https://img.shields.io/static/v1?label=npm&message=6.14.16&color=red)](https://www.npmjs.com/package/sketch-icons)
[![yarn](https://img.shields.io/static/v1?label=yarn&message=1.22.17&color=blue)](https://www.npmjs.com/package/sketch-icons)
[![npm downloads](https://img.shields.io/npm/dm/sketch-icons.svg?style=flat-square)](https://www.npmjs.com/package/sketch-icons)

## Installation

```bash
npm i sketch-icons
# or 
yarn add sketch-icons
```

example usage

```jsx
import { Gift } from 'sketch-icons';

class Icons extends React.Component {
    render() {
        return <h2> Here's a Gift <Gift /></h2>
    }
}
```

# Contributing

Please see [CONTRIBUTING GUIDELINES](CONTRIBUTING.md)

# Code of Conduct

Please read the [CODE OF CONDUCT](CODE\_OF\_CONDUCT.md)

# Versioning

Refer [Versioning](VERSIONING.md)

# How to Contribute Assets

1. Add you asset (only svg) to the `assets` folder
2. Now run the command `yarn build`
3. `yarn changeset` and select major/minor/patch and write summary
4. Raise a Pull Request
5. Your asset will be added
