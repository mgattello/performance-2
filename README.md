## AsyncComponent

It's a Higher-order Component and allows you to import Components only when is needed. It enable Code Splitting, because the import is run after the first import cycle (Dynamic Import).

>  Higher-order Component: a component that return another component

```
import React, { Component } from 'react';

export default function asyncComponent(importComponent)  {
    ...
}

```

The importComponent is a parameter, that allows to import the component needed. It'll be more clear after. AsyncComponent is still a component with a state: 

```
 this.state = {
                component: null
            }
```

The `async componentDidMount(){ ... }` allows us to set the promise (importComponent) in the state, when loaded. 

```
render(){
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null
        }
```

Here is where the magic happen. If Component exists, then render it with all the props; If not return null. `{...this.props}` is a "Spread" operator that helps to access to all the props.

```
return AsyncComponent
```
At the end we want to render the all component.

