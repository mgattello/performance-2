import React from 'react';

const Page2 = ({ onRouteChange }) =>
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Welcome to React 2</h1>
        </header>
        <button onClick={() => onRouteChange('page1')}>Page 1</button>
        <button onClick={() => onRouteChange('page3')}>Page 3</button>
    </div>

export default Page2
