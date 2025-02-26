# HOTH XII: Intro to React Workshop

**Date**: March 3rd, 2025

**Teacher**: Melissa Shi

Hi! Welcome to the Intro to React.js Workshop for HOTH XII! We will be giving a brief introduction to React covering the basics of React. 

This workshop utilizes HTML, CSS, and JavaScript without covering them in depth. If you're not familiar with these technologies, I recommend checking out our HTML, CSS, and JavaScript workshop!

## Table of Contents
- [Introduction to React](#introduction-to-react)
- [Setup for React](#setup-for-react)
- [Components](#components)
- [Props](#props)
- [State](#state)
- [Closing](#closing)

## Resources 
- [Slides](https://tinyurl.com/HOTHXII-Workshop-React)
- [Workshop Recording](https://drive.google.com/drive/folders/1s4q0R0Qalrvp75jOpcIzfzYCdXauiO_b)

## Introduction to React
### What is React?
- Free and open-source JavaScript library
- Aims to make building user interfaces (UI) more seamless and efficient
- Used for frontend development
- Facebook, Instagram, and Netflix are some of the many websites that use React

### Why React?
- “Reacts” to state changes
- Efficient as it updates individual components instead of the whole page
- Popular and and in-demand skill for jobs

### React: JSX
- JSX stands for JavaScript XML
- Syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file

```javascript
const num = 12;
const message = <h1>HOTH {num} </h1>
```

## Setup for React
### Necessities for React
Make sure you have:
- Text Editor (such as [VSCode](https://code.visualstudio.com/download))
- [Node.js](https://nodejs.org/en/download)

### Setup
**Step 1:** Type this command into the VSCode terminal:
```bash
  npm create vite@latest
```

**Step 2:** Enter a project name when prompted `Project name: <your-project-name>`

**Step 3:** Select framework and variant (`React` and `Javascript` for this demo)

**Step 4:** Run these three commands:
```bash
  cd <your-project-name>
  npm install
  npm run dev
```

## Components
### What are Components?
- Reusable bits of code
- Building blocks for the UI
- JavaScript function that returns HTML

```javascript
function Cafe() {
    return (
        <div className='cafe'>
            <h2 className='cafe-title'>Community Goods</h2>
            <p className='cafe-title'>Location: Melrose</p>
            <img src='https://s3-media0.fl.yelpcdn.com/bphoto/AJWbt3tIaDjaFAzFTu7gzw/348s.jpg'/>
        </div>
    );
}
```

### Import and Export
To use a component in another file, we need to use import and export!
- In the component file, we need to export at the end
```javascript
export default Cafe
```
- In the file using the component, we need to import the component file
```javascript
import Cafe from './components/Cafe'
```

## Props
### What are Props?
- Props are how we pass information to our component (much like how you’d pass parameters to a function!)

### How to use Props?
- In the component, we use this props like this
```javascript
function Cafe(props) {
    return (
        <div className='cafe'>
            <h2 className='cafe-name'>{props.name}</h2>
            <p className='cafe-location'>Location: {props.location}</p>
            <img className='cafe-picture' src={props.picture}/>
        </div>
    );
}
```
- To pass information to props we do
```javascript
<Cafe 
    name='Community Goods'
    location='Melrose'
    picture='https://s3-media0.fl.yelpcdn.com/bphoto/AJWbt3tIaDjaFAzFTu7gzw/348s.jpg'
/>
```

## State
### What is State?
- State is a built-in React object that contains data about a component
- It can change over time or by user interaction

### React Hooks
- React Hooks are special functions provided by the React library 
- Allows developers to use React features in functional components
- **useState()** is a react hook!
```javascript
import React, { useState } from 'react'
```

### State Variables
To declare a state variable, we write
```javascript
const [likes, setLikes] = useState(0)
```
In this example, likes is the state variable, setLikes is the function to update the state variable, and 0 is the initial value of the variable

To update a state variable, we write
```javascript
setLikes(likes+1)
```
In this example, when the state changes, likes is set to add 1 to itself.

## Closing
Congratulations for making it through the workshop! Hopefully you leared about the basics of React and feel comfortable starting on your own project!

If you would like to see a project made with the topics introduced above, make sure to check out the cafe demo and the workshop recording! There is much you can do with React, and the topics we covered are just the beginning!

**Thank you for attending this workshop! Have fun and good luck at HOTH XII!!**