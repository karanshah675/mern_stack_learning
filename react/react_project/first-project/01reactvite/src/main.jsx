import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    const name = "karan shah"
    return (
        <h1>this is me {name}</h1>
    )
}

const anotherElement = (<a href='https://google.com' target='_blank'>go to google</a>)
const name = "karan shah"
const reactElement = React.createElement(

    'a',
    {
        href:'https://google.com',
        target:'_blank',
    },
    'go to google',
    name
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
