import React, { Component } from 'react';
import './App.css';
import Page1 from './components/page1';
// import Page2 from './components/page2';
// import Page3 from './components/page3';


class App extends Component {
  constructor () {
    super();
    this.state = {
      route: "page1",
      component: null
    }
  }

  onRouteChange = (route) => {
    // No code Splitting:
    // this.setState({route: route});
    // Whit code Splitting
    if(route === "page1") {
      this.setState({route: route})
    } else if (route === "page2") {
      // Webpack allows you to do it:
      import('./components/page2').then((page2)=> {
        console.log(page2);
        this.setState({route: route, component: page2.default})
      })
    } else if (route === "page3") {
      // Webpack allows you to do it:
      import('./components/page3').then((page3)=> {
        this.setState({route: route, component: page3.default})
      })
    }
  }
  render(){
  //   if (this.state.route === 'page1') {
  //     return <Page1 onRouteChange={this.onRouteChange}/>
  //   } else if (this.state.route === 'page2') {
  //     return <Page2 onRouteChange={this.onRouteChange}/>
  //   } else if (this.state.route === 'page3') {
  //     return <Page3 onRouteChange={this.onRouteChange}/> 
  //   }
  // } 
  if (this.state.route === 'page1') {
    return <Page1 onRouteChange={this.onRouteChange} />
  } else {
    return <this.state.component onRouteChange={this.onRouteChange} />
  }
}
}

export default App;
