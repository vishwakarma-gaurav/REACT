import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App !!!</h1>
        </div>
    )
}
const anotherElement = (
    <a href="https://google.com" target = '_blank'>Visit the best site in the world</a>
)// Pura elemt 

// React suitable function 
const reactElement = React.createElement(
    'a', // first line we have to define tag of the element
    {href: 'https://google.com', target: '_blank'},
    'Click here to open Google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp />,
    // reactElement
    // MyApp() this will also work fine, but it is a bad practice
    <App/>
)
