function customRender(reactElement, Container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    Container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
    for (const prop in reactElement["props"]) {
        console.log(prop);
        if(prop === 'children') continue;// safty check, not needed btw
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    Container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google',
    // hello: 'Hello world' // used for debugging
}


const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)