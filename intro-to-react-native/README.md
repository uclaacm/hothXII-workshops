# HOTH XII: Intro to React Native

**Date**: February 27th, 2025

**Teacher**: Sebastian Mendez Johannessen

**Resources**:
- [Recording](https://youtu.be/wG-XPzpQplU?si=S0zgZM6y5RC_VC41)
- [Slides](https://docs.google.com/presentation/d/1z5EBrZiODzlhawKBo-fBLwQ7CifeVoOpd5UNEYsVVrI/edit#slide=id.g33815d82474_0_212)

Hi, and welcome to the Intro to React Native Workshop for Hack on the Hill XII! This workshop will give a brief introduction to mobile development with React Native.


## Table of Contents
- [Introduction to React Native](#introduction-to-react-native)
- [Setting up environment](#setting-up-environment)
- [Components](#components)
- [Stylesheets](#stylesheets)
- [Custom Components and Props](#custom-components-and-props)
- [Screen Changes](#screen-changes)

## Resources 
- [Slides](https://tinyurl.com/HOTHXII-Workshop-React)
- [Workshop Recording](https://drive.google.com/drive/folders/1s4q0R0Qalrvp75jOpcIzfzYCdXauiO_b)

## Introduction to React Native
### What is React Native?
- JavaScript framework for building native mobile apps.
- Native apps - installed directly on the mobile device.
- Instagram, Discord, Amazon, and many other apps are built with React Native.

### Why React?
- Cross-platform - write once, run anywhere.
- Community support - tips, tricks, third-party libraries, solutions to errors, etc.
- Maintained by Meta.

## Setting up environment
### Installations
You need the following to build with React Native:
- [VSCode](https://code.visualstudio.com/download)
    - Text editor for code 
- [Node.js](https://nodejs.org/en/download)
    - Executes JavaScript code outside of the browser
- [Expo Go](https://expo.dev/go)
    - Download on mobile device if you don’t have a simulator

### Setup
**Step 1:** Create your React Native project by running the following in  the VSCode terminal:
```bash
npx create-expo-app@latest --template blank "name of app"
```

**Step 2:** Navigate into your new project by running the following: `
```bash
cd "name of app"
```

**Step 3:** Run the following to choose a method of simulating your project:
```bash
npx expo start
```

## Components
### JSX
JSX is the language used in React Native, which is a combination of JavaScript and XML. It lets us build UI components in a way that feels like writing HTML inside JavaScript.

In simple terms, JSX allows us to define how an app looks using JavaScript. It stores markup language (the structure of the UI) inside variables, making it easy to edit and update the interface.

This is a simple example of JSX:
```JavaScript
export default function App() {
 return (
       <View>
           <Text>Hello!</Text>
       </View>
 );
}
```

### Core components
Core components are the essential building blocks of any React Native app. They allow you to create and structure the UI efficiently. Some of the most commonly used components are:

- View – A container for grouping and organizing other components.
- Text – Displays readable text on the screen.
- Image – Renders images from local files or URLs.
- Button – Handles user interactions, such as taps.
- And many more…

These components work together to build dynamic and interactive mobile applications.

```JavaScript
<View>
  <View>
    <Image source={{ uri: "ImageLink" }}/>
  </View>
  <View>
    <Text>Good morning!</Text>
    <Button onPress={() => increaseLikes(likes + 1)} title="Like" />
  </View>
</View>
```

Here, View organizes the elements, Image displays a picture, Text shows a message, and Button allows user interaction.

## Stylesheets
To control how components look, we use Stylesheets, which work similarly to CSS. They allow us to define multiple styles in one place and apply them to different components.

Some example properties are:

fontSize – Adjusts text size
- backgroundColor – Sets background color
- width – Defines element width
- height – Defines element height
- margin – Adds space around elements
- And many more…

To use stylesheets, we first have to import StyleSheet:
```JavaScript
import { StyleSheet, Text, View } from 'react-native';
```

This is an example of a style to make text bigger and bolder:
```JavaScript
const styles = StyleSheet.create({
  headline: {
    fontSize: 44,
    fontWeight: "700",
    marginBottom: 10,
  }
});
```

Styles are applied using {styles.styleName} in the specific component:
```JavaScript
export default function App() {
  return (
    <View>
      <Text style={styles.headline}>Welcome to HOTH XII!</Text>
    </View>
  );
}
```

## Custom Components and Props
### Custom Components
React Native provides core components like View, Text, and Image, but we can also create our own custom components to make our code more modular and reusable. Instead of rewriting the same UI elements multiple times, we can define them once as a component and reuse them throughout our app.

In React Native, a component is simply a JavaScript function that returns JSX, defining what appears on the screen.

To create a custom component, write a new function in a separate file. In this case, it is called Greeting.js:
```JavaScript
export default function Greeting() {
  return (
    <View>
      <Text>My name is Joe Bruin.</Text>
    </View>
  );
}
```

To use your custom component, it has to be imported in the main file, App.js:
```JavaScript
import Greeting from './Greeting';
```

The Greeting component can now be used in App.js:
```JavaScript
export default function App() {
  return (
    <View>
      <Greeting />
      <Greeting />
      <Greeting />
    </View>
  );
}
```

Here, Greeting is a custom component that displays text. We export it from Greeting.js and import it into App.js, where it is used multiple times. This keeps our code clean, organized, and reusable!









### Props
Props allow us to make components more flexible by passing in dynamic data instead of hardcoding values. This makes it easy to reuse a component while displaying different content.

For example, instead of manually typing a name inside a component, we can use props to dynamically set the name:

```JavaScript
export default function Greeting({ name }) {
   return (
       <View>
           <Text>My name is {name}.</Text>
       </View>
   );
}
```

The props are passed to the components like this:
```JavaScript
import Greeting from './Greeting';

export default function App() {
 return (
       <View>
           <Greeting name="Joe" />
           <Greeting name="Mia" />
           <Greeting name="Alex" />
       </View>
 );}
```
In App.js, we use the Greeting component multiple times, passing in different name values as props. This allows each instance of Greeting to display a unique name without modifying the component itself.







## Screen Changes
State allows components to track and update data dynamically. An example is a like button that increments when clicked.

To manage state, we use the useState() hook, which returns two values: the state variable and a function to update it. The initial value is passed as an argument:
```JavaScript
const [likes, setLikes] = useState(0);
```
Updating state triggers a re-render, displaying new content.

To use state, we first have to import useState:
```JavaScript
import { useState } from 'react';
```

 This is an example of a button increasing the like count:
```JavaScript
export default function App() {
 const [likes, setLikes] = useState(0);
 return (
   <View>
      <Button onPress={() => setLikes(likes + 1)} title="Like" />
      <Text>Likes: {likes}</Text>
   </View>
 );
}
```
Now, pressing the button updates the likes state, causing the component to re-render with the new count.

## Closing notes
Congrats on completing the workshop! Hopefully, you’ve gained a basic understanding of React Native and are ready to start your own project.

There’s still much to learn, some examples are organization, layouts, and navigation. What we covered is just the beginning, and the possibilities with React Native are endless.

Thank you for joining, and best of luck at HOTH XII!

For more resources, check out [React Native's official documentation](https://reactnative.dev)
