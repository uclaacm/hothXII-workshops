# Intro

This workshop introduces the foundational building blocks of the web: HTML, CSS, and JavaScript. Learn how to use these work together to create super cool websites!

Link to Slides: [Slides](https://docs.google.com/presentation/d/183WJ3dzvoR-5tiJm2AtaWxPMg75GvIJQdzoCc45M-w0/edit?usp=sharing)

### Setup

1. Install a text editor (e.g., [VSCode](https://code.visualstudio.com/)).
2. Create a new folder for your project files.
3. Create three files:
   - `index.html`: Where you'll write your HTML structure.
   - `styles.css`: Where you'll write your CSS to style the page.
   - `script.js`: Where you'll write JavaScript to make your page interactive.

## HTML

HTML (HyperText Markup Language) provides the basic structure of a website using elements and tags. Think of it as the skeleton of a webpage.

A **tag** is a keyword enclosed in angle brackets (<>) that defines how content should appear or behave in an HTML document. Most tags come in pairs: an opening tag and a closing tag (with a / before the tag name in the closing tag).

```html
<p>This is a paragraph.</p>
```

Some tags are self-closing and do not require a closing tag.

```html
<img src="image.jpg" alt="Description" />
```

An HTML **element** consists of an opening tag, content, and a closing tag.

```html
<h1>Welcome to My Website</h1>
```

### Common HTML Elements

- **`<h1>` to `<h6>`**: Headings, `<h1>` is the largest
- **`<p>`**: Paragraph
- **`<a>`**: Anchor, creates hyperlinks
- **`<img>`**: Image
- **`<ul>`**: Unordered list
- **`<ol>`**: Ordered list
- **`<li>`**: List item
- **`<div>`**: Container for grouping content

### Attributes

**Attributes** provide additional information about an HTML element. They are always included in the opening tag and follow the format:

```
<tagname attribute="value">Content</tagname>
```

### Common Attributes

- **`id`**: Unique identifier for an element
- **`class`**: Specifies one or more class names for an element
- **`href`**: URL for links (`<a>`)
- **`src`**: Source of an image (`<img>`)
- **`alt`**: Alternative text for an image

### Creating Your Own HTML Page

1. Open the folder you created earlier in VS Code.
2. If you haven't already, create an `index.html` file.
3. In your `index.html` file, add the following boilerplate code. This is the basic structure of every HTML document.

```html
<!DOCTYPE html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

### Basic HTML Structure

- **`<!DOCTYPE html>`**: Tells the browser this is an HTML file
- **`<html>`**: The root element, everything goes inside this
- **`<head>`**: Contains metadata (e.g., title, links to CSS)
- **`<body>`**: Holds everything visible on the webpage

## CSS

### What is CSS?

**CSS (Cascading Style Sheets)** is used to style the appearance of HTML elements on a webpage. It controls things like layout, colors, fonts, and spacing. Basically, it makes everything pretty!

### Inline vs. Internal vs. External CSS

- **Inline CSS**: Styles applied directly within an HTML element using the `style` attribute.
  ```html
  <h1 style="color: blue;">Hello World</h1>
  ```
- **Internal CSS**: Styles defined within the <style> tag in the <head> section of the HTML document.

```html
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>
```

- **External CSS**: Styles defined in a separate .css file linked to the HTML document.

```html
<link rel="stylesheet" href="styles.css" />
```

### Selectors

Selectors are used to target HTML elements in CSS to apply styles. Common types of selectors include:

- **Element Selector**: Targets all instances of an HTML element.

```css
p {
  color: green;
}
```

- **Class Selector**: Targets elements with a specific class attribute. Use a period (.) before the class name.

```css
.myClass {
  font-size: 16px;
}
```

- **ID Selector**: Targets a specific element with an ID. Use a hash (#) before the ID name.

```css
#myID {
  font-weight: bold;
}
```

### Syntax

CSS syntax consists of **selectors** and **declarations**:

- A selector specifies which HTML element to style.
- A declaration contains one or more property-value pairs, wrapped in curly braces {}.

```css
selector {
  property: value;
}
```

Example:

```css
p {
  color: blue;
  font-size: 18px;
}
```

### Common Properties

- **`color`**: Defines the text color.
- **`background-color`**: Sets the background color of an element.
- **`font-size`**: Controls the size of the text.
- **`text-align`**: Aligns the text (e.g., `left`, `right`, `center`).
- **`border`**: Adds a border around an element.
- **`margin`**: Defines space outside an element.
- **`width`**: Sets the width of an element.
- **`height`**: Sets the height of an element.

### Linking CSS To HTML

To apply CSS to an HTML document, you can link an external .css file in the <head> section of your HTML using the <link> tag:

```html
<link rel="stylesheet" href="styles.css" />
```

## JavaScript

JavaScript is a versatile programming language that allows you to add interactivity and dynamic behavior to your web pages. It is commonly used for manipulating the DOM, handling events, and making web pages responsive.

### What is JavaScript?

JavaScript is a programming language that makes web pages interactive. It adds behaviors to websites like updating content, validating forms, and handling user input dynamically.

### Basic Programming Concepts

- **Variables** - Store data values for use throughout your program (`let`, `const`, `var`)
- **Arrays** - Hold multiple values in a single variable, accessible by index
- **Operators** - Perform operations on values, like arithmetic (`+`, `-`), comparison (`==`, `>`, `<`), and logical (`&&`, `||`)
- **If/Else Statements** - Allow conditional execution of code based on whether a condition is true or false
- **Loops** - Repeat a block of code multiple times (for, while, do-while)
- **Functions** - Reusable blocks of code that perform a task and can accept parameters

```javascript
function greet(name) {
  console.log("Hello, " + name);
}
greet("Joe");
```

- **Objects** - Store key-value pairs, representing real-world entities and their properties

```javascript
let person = { name: "Joe", age: 30, city: "New York" };
```

### THE DOM

The **DOM** (Document Object Model) allows JavaScript to interact with the HTML elements on a webpage by letting you select, change, add, or delete elements and their content dynamically.

Example:

```javascript
const message = document.getElementById("message");
message.textContent = "I just changed my content!";
```

### Common DOM Methods

- **`getElementById()`**: Selects an element by its unique `id` attribute.
- **`getElementsByClassName()`**: Selects all elements with a specified class name.
- **`querySelector()`**: Selects the first element that matches a CSS selector.
- **`createElement()`**: Creates a new HTML element.
- **`appendChild()`**: Adds a new child element to a parent element.
- **`removeChild()`**: Removes a specified child element from its parent.
- **`classList.add()`**: Adds one or more classes to an element's class list.

### Event Handlers

**Event handlers** allow you to respond to user actions such as clicks, typing, or mouse movements.

Example:

```javascript
const button = document.getElementById("clickMeButton");
button.onclick = function () {
  alert("Button was clicked!");
};
```

### Linking JS to HTML

To apply JS to an HTML document, you can link an external .js file in the <head> section of your HTML using the <script> tag:

```javascript
<script src="script.js" defer></script>
```

# Closing Notes

This is just the tip of the iceberg when it comes to HTML, CSS, and JavaScript, but hopefully this gives you a solid starting point to dive into your project! The best way to learn and get better is through trial and error so, good luck, have fun, and happy hacking!

For more resources, check out;

- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)
