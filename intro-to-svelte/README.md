# Intro to Svelte Workshop:

## 📌 Overview
This workshop introduces **Svelte**, a modern frontend framework that simplifies UI development by combining **markup, styles, and behavior** in a single component-based structure.

By the end, you'll:
- Understand **components** in Svelte.
- Learn **state management** and **reactivity**.
- Build a **basic Cookie Clicker app** using Svelte.

---

## ⚙️ Installation Steps

### 1️ Prerequisites
Ensure you have **Node.js** (v16+) installed.  
Check your version:
```sh
node -v
```

### 2️ Create a Svelte Project
Run the following command:
```sh
npm create vite@latest svelte-workshop --template svelte
```

### 3️ Navigate & Install Dependencies
```sh
cd svelte-workshop
npm install
```

### 4️ Start the Development Server
```sh
npm run dev
```
Then open **`http://localhost:5173`** in your browser.

---

## Concepts Covered

### 1️ What is Svelte?
- A tool for **building web applications**.
- Combines **markup, styles, and behaviors** into **single-file components**.
- Helps with **large-scale project organization**.

### 2️ Components in Svelte
- A **component** is a **self-contained, reusable block** that includes **HTML, CSS, and JavaScript**.
- Example:
```svelte
<script>
  let message = "Hello Svelte!";
</script>

<h1>{message}</h1>
```
- **Styles are scoped** using `<style>` tags.

### 3️ State & Reactivity
- Svelte automatically updates the UI when **state (variables) change**.
- Example:
```svelte
<script>
  let count = 0;
  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>Clicked {count} times</button>
```

---

## Skeleton Code: Cookie Clicker App

### 📂 Project Structure
```
svelte-workshop/
│── src/
│   ├── App.svelte  # Main App
│   ├── Cookie.svelte  # Cookie Clicker component
│   ├── main.js  # Entry point
│── package.json
│── tsconfig.json (if using TypeScript)
│── svelte.config.js
│── vite.config.js
```

### 1️ `App.svelte` (Main App)
```svelte
<script>
  import Cookie from "./Cookie.svelte";

  let count = 0;
  let clickPower = 1;

  function increment() {
    count += clickPower;
  }

  function upgrade() {
    if (count >= 10) {
      count -= 10;
      clickPower += 1;
    }
  }
</script>

<h1>Cookie Clicker</h1>

<Cookie {count} {increment} />

<button on:click={upgrade} disabled={count < 10}>
  Upgrade Click Power (Cost: 10)
</button>

<p>Click Power: {clickPower}</p>
```

### 2️ `Cookie.svelte` (Component)
```svelte
<script>
  export let count = 0;
  export let increment;
</script>

<div on:click={increment} style="font-size: 50px; cursor: pointer;">
  🍪
</div>

<p>Cookies: {count}</p>
```

---

