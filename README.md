# QueueReact 
A basic queue App using React-js for front-end and node-js for backend.
In react-js here we are using `import react` this imports the main React library, which is required for creating React components. without importingReact,you won't be able to define or use React
components in your application.
`/queueApp.css` this line imports a CSS file(`queueApp.css`) that is likely used to style your React component.including CSS files this way allows you to apply styles to the elements in your component and control their appearance.
`useState,useEffect` These are two hooks provided by React. They are used to manage component state and perform side effects within functional components.
function QueueApp() { ... }: This is the definition of the functional component named QueueApp.
After this we have to perform different operations,Enqueue,Dequeue,showFirstValue,checkIsFull,checkIsEmpty,clearAll .
For backend connection i'm writing code in node.js
so here, we are  Creating a Node.js backend for a simple QueueApp involves setting up an Express.js server with endpoints for enqueueing and dequeuing items. 
Create an express application.
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
The app. post() function routes the HTTP POST requests to the specified path with the specified callback functions.
It is intended for matching and handling a specific route when requested by get http.
The app. listen() function is used to bind and listen to the connections on the specified host and port.

Sample Images:

Enqueue
![addingENQUEUE](https://github.com/janamanchiraji/queueReact/assets/117289173/8ae156a6-b972-474e-814c-73c02cbc6684)

Dequeue
![DEQUEUE2](https://github.com/janamanchiraji/queueReact/assets/117289173/24841707-4bc3-4b59-9b9d-ca8c8d03b137)
