import React from 'react';

const Page3 = ({ onRouteChange }) =>
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Welcome to React 3</h1>
        </header>
        <button onClick={() => onRouteChange('page1')}>Page 1</button>
        <button onClick={() => onRouteChange('page2')}>Page 2</button>
    </div>

export default Page3