import React from 'react';

const Page1 = ({ onRouteChange }) =>
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Welcome to React 1</h1>
        </header>
        <button onClick={() => onRouteChange('page2')}>Page 2</button>
        <button onClick={() => onRouteChange('page3')}>Page 3</button>
    </div>

export default Page1