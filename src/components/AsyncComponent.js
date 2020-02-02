import React, { Component } from 'react';

// Higher-order component: A component that return another component
export default function asyncComponent(importComponent)  {
    class AsyncComponent extends Component {
        constructor (props) {
            super(props)        
            this.state = {
                component: null
            }
        }

        async componentDidMount () {
            const { default: component } = await importComponent();
            this.setState({
                component: component
            })
        }

        render(){
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null
        }
    }
    
    return AsyncComponent;
}
