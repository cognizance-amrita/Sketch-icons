# ✎ Sketches

Sketches is a library for icons that helps people to use icons in a simple manner.

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-icons


## Installation 
``` bash 
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
Contributing

Please see [CONTRIBUTING GUIDELINES](Contributing.md)

Code of Conduct

Please read the [CODE OF CONDUCT](CODE_OF_CONDUCT.md)

How to Contribute Assets

1. Add you asset (only svg) to the `assets` folder
2. Now run the command `yarn build`
3. `yarn changeset` and select major/minor/patch and write summary
4. Raise a Pull Request 
5. Your asset will be added
