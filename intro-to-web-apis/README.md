# HOTH XII Workshop - Intro to Web APIs

**Date**: February 17, 2025<br>
**Teacher**: Nishant Ray

Hi there! Welcome to the Intro to Web APIs workshop, made for HOTH XII. We'll be going over what a client-server model is, an overview of APIs and web APIs, HTTP, some extra stuff, and a fun demo.  If you're looking to easily add complex functionality to your projects, or just learn what web APIs are, you're in the right place!

## Resources
- [Slides](https://tinyurl.com/web-apis-slides)
- [Recording](https://drive.google.com/file/d/1aslP_LMyeh-fHw63eMgGz0Esfs3iAI_C/view?usp=sharing)

## Topics Covered
- [Client-Server Model](#client-server-model)
- [Understanding APIs](#understanding-apis)
- [Overview of HTTP](#overview-of-http)
- [Extra Stuff](#extra-stuff)
- [Demo](#demo)
  
## Client-Server Model
Before we get to web APIs, we need to learn the client-server model, a fundemental system design architecture. But what even are servers and clients? 

You can think of clients and servers as computers that keep running, where clients ask servers for some information or to complete some task through **requests**, and servers respond to these requests made by the clients through **responses**. Servers are made to *serve* clients. To easily understand these concepts, we'll use a running analogy of a restaurant throughout this workshop.

In a restaurant, customers/patrons are clients and the kitchen is a server. The customers come to the restaurant, and similar to how clients make requests to a server to have some action be performed or to receive some data, customers can order different dishes or maybe even make special requests to the kitchen.

What makes this model so powerful is that many clients can access the same shared resources just through one server (like how many customers can order dishes from the same kitchen). Additionally, servers do all the hard work of completing the clients' requests, hiding the complexities from the clients (like how a kitchen makes all the food for customers behind closed doors). This is an example of **abstraction**, a term you might've heard in computer science: from the perspective of a client, you just make a simple request to the server and suddenly some complex operation is completed.

At this point, you might be wondering, isn't there another imporant element missing from our restaurant analogy? And how are APIs involved? These are valid questions, and we'll answer them in the next section.

## Understanding APIs
In a restaurant, customers typically don't directly communicate with the kitchen. That's what **waiters** are for! They take orders from customers, inform the kitchen what needs to be made, and serve customers food made from the kitchen, acting as the ultimate middle-men between customers and the kitchen. In our analogy, waiters are equivalent to an **API**, the middle man between clients and a server.

API is an acronym that stands for **application programming interface**. In general, an API is actually just a way for different software components to interact. But for what we're interested in, it's just a two-way channel of communication between clients and a server.

So what are web APIs? A **web API** is a communication channel over the internet that uses the **HTTP** protocol. To understand how web APIs fit into the client-server model: if we created an app that uses a web API by Google, then our app is the client and Google's web API services is the server.

## Overview of HTTP
You can think of HTTP as the "language" that web APIs speak, defining how requests are made and how responses are structured. In our analogy, HTTP is equivalent to the ordering process in a restaurant. Customers don't just shout out random food names—they place orders from the menu. The waiter (API) understands these orders (**HTTP requests**) and eventually bring back the food (**HTTP responses**) to the customers. Waiters must follow this ordering process, as web APIs must follow the HTTP protocol.

HTTP is another fancy acronym that stands for **hyper text transfer protocol**. It's the main way communication is done over the World Wide Web. You might have heard of HTTPS—a more secure version of HTTP that stands for, you guessed it, hyper text transfer protocol **secure**.

As we mentioned earlier, HTTP defines different requests and responses.

### HTTP Requests:
- An HTTP request is made of several components, including a **method**, **URL**, **headers**, and a **body**.
- A method defines what type of operation the client wants the server to make. Also known as **CRUD operations** (create, read, update, delete), the 4 most essential and common HTTP methods are:
    - **GET**: a request to read/access some info from the server.
    - **POST**: a request to create new data on the server.
    - **PUT**: a request to update existing data on the server.
    - **DELETE**: a request to delete existing data from the server.
- A URL specifies where the request should go and what to retrieve. It's typically made of a protocol (i.e. HTTP or HTTPS), domain/host (e.g. example.com), path (e.g. /api/orders), and optional query parameters that may provide extra details for the request.
- Headers are also optional additional details provided as a part of the request, like content type and authentication.
- A body typically contains data being sent in the request, but is not used in GET requests.
- See if you can identify the components described above in this example of an HTTP request:
    ```
    POST example.com/api/orders HTTP/1.1
    Content-Type: application/json
    {
        "data": "ABC123"
    }
    ```
- One thing to note is that these component definitions aren't super strict and may differ slightly from online examples. Just focus on the concepts themselves rather than memorizing the different components!

### HTTP Responses:
- After handling a received request, a server will send a response back to the client, consisting of a **head** and a **body**.
- The head contains metadata about the response, including headers, and most importantly, the status of the response. Statuses are represented by 3-digit numbers, known as status codes. You've heard of error 404, right? The first number of the status code indicates the type of status indicated.
    - 1XX: information (request was received but is still being processed)
    - 2XX: successful (request was recevied and processed successfully)
    - 3XX: redirection (request was received but it was redirected to someplace else or some additional action must be completed)
    - 4XX: client error (request wasn't made by the client correctly)
    - 5XX: server error (server failed to complete the received request)
- The body contains any data/files that were requested.

## Extra Stuff
Before we get to the demo, there are a couple of things relevant to web APIs that aren't strictly necessary to know but are fairly fundemental.

### JSON:
- **JSON** is something you have maybe heard in the context of web technologies. It stands for JavaScript Object Notation and is a common format for exchanging data with web APIs.
- While JavaScript is in its name, it can be used by almost any language. They're the go-to format used in the body components of HTTP requests and responses. They're formed by human-readable text consisting of name-value pairs (similar to a dictionary) and arrays.
- Here is a simple JSON example that would describe a person:
    ```
    {
        "first_name": "John",
        "last_name": "Smith",
        "is_alive": true,
        "age": 27,
        "address": {
            "street_address": "21 2nd Street",
            "city": "New York",
            "state": "NY",
            "postal_code": "10021"
        },
        "children": [
            "Catherine",
            "Thomas",
            "Trevor"
        ],
        "spouse": null
    }
    ```

### Using Web APIs
- When creating a project, you can utilize web APIs to access cool features with just a few lines of code! For example, you can create a simple frontend that lets you post a tweet to your Twitter account using the Twitter API, where a button click leads to making a request to the Twitter API server (your frontend is the client).
- Many web APIs have an online dashboard where you can create a unique API key. An API key is essentially a secret password that you send along with your request to let the server know that you're authorized to make requests to the server. If you use web APIs in a public repository, look into how to use `.env` files so you don't accidentally share your API key with the rest of the world!

## Demo
We're going to now go through a demo that uses the Spotify Web API in a simple React app. If you aren't familiar with React, I'd recommend checking out our React workshop (see all of our workshops [here](https://hoth.uclaacm.com/workshops)) or just try to follow along to understand how the Spotify Web API works. **We're going to be stealing Spotify's search bar and adding it to our own site!** Feel free to follow along at your own pace! All the finished code will be at the bottom of this README.

To get started, open your terminal, navigate to the directory you'd like to have your React app stored in, and run:
```sh
npm create vite@latest spotify-demo -- --template react
```

This just creates a Vite project with a basic React template. Then navigate to the created folder and install the necessary dependencies for your React project:
```sh
cd spotify-demo
npm install
```

Once everything is set up and installed, you can start the development server with: `npm run dev`.

You'll see a link popup in your terminal which you can click on to see your project running in your browser. Be sure to have your project opened in an IDE. We'll get rid of all the starter template code for now, so feel free to delete the default components in `src/App.jsx` and the CSS file `src/index.css` (along with its reference in `src/main.jsx`). We're going to add some basic styling so just delete the contents of `src/App.css` but keep the file.

Now let's set up what we need on the Spotify Developer Dashboard! Make sure you know your Spotify account login credentials (both free and premium accounts work with the API). Login to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard). Head on over to "Your Dashboard" and click on "Create an app." Enter what you would like for "App Name" and "App Description." For "Redirect URI," just put http://127.0.0.1:3000 and click "Add." Lastly, select the "Web API" option at the end of the form and be sure to agree to the terms of service.

Now, in the Dashboard, click on the app name that you just created and then click on the "Settings" button on the top right. The *Client ID* can be found at the top, as well as the *Client Secret*, for which you have to click to reveal. With this page still open, head on over to your IDE. In the root directory of your project, create a file named `.env`. This will store all of your necessary **environment variables** that you want to hide from the world. In this file, add your Spotify app's *Client ID* and *Client Secret* like so, replacing the bracketed fields properly:
```dotenv
CLIENT_ID=[paste_your_client_id_here]
CLIENT_SECRET=[paste_your_client_secret_here]
```

Using this info, we're going to make a call to the Spotify Web API that will give us an **access token**, which will allow us to use the other cool API endpoints that Spotify offers.

For your React app client to recognize your environment variables, we need to do a bit of setup. First, in your terminal, run `npm install dotenv`. Then, add the following three lines to your `vite.config.js` file in your root directory:
1. `import dotenv from 'dotenv'` at the top under the other import statements
2. `dotenv.config();` before the `defineConfig` function
3. Then lastly add: `define: { 'process.env': process.env }` in `defineConfig` after `plugins`.

Your vite.config.js should look similar to this:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv' // 1st part added

dotenv.config(); // 2nd part added

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { // 3rd part added
    'process.env': process.env,
  }
})
```

Now, we can easily access environment variables in our React code with `process.env.[ENV_VAR_NAME]`.

---

### Side Note: async/await
When making API calls in React, we use the `async/await` keywords to handle asynchronous operations. API calls and any other network operations should be asynchronous because they often involve waiting for data from external sources. Using asynchronous operations allows our app to remain responsive without freezing or blocking other tasks while waiting for the response. `async` declares a function to be asynchronous, which also specifies that the function returns a `Promise`. `await` is used inside an `async` function to pause execution until a Promise is resolved. You'll see how we use these keywords below!

---

In `src/App.jsx`, create a state variable with `useState` to store an access token from Spotify, set to an empty string initially. Create a simple `<button>` component that calls some `async` function like `authenticateSpotify` in its `onClick`. Then, in that function, we're going to call the Spotify Web API to retrieve our access token using the built-in `fetch` function that helps us make HTTP requests. Create an `await` call to `fetch`, with the first parameter being `"https://accounts.spotify.com/api/token"` and the second parameter being our request options. Specifically, we set the HTTP request method as "POST", set a single header of `"Content-Type": "application/x-www-form-urlencoded"` (this specifies how our request body will be formatted, which will be a series of name-value pairs like `name1=value1&name2=value2&...`), and set the body to be a `new URLSearchParams` object (that matches the above format) with the initialization:
```js
{
    grant_type: "client_credentials",
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET
}
```
Save the entire `fetch` call into a constant like `response`. Check that HTTP status code of the response is `200`, deeming a successful response by typing `response.status === 200`. If the response is successful, then extract the field `access_token` from the body JSON of the HTTP response. Update our state variable with this access token. It's good practice to surround `fetch` or any other asynchronous network calls with `try/catch` blocks, so do that as well. If the response wasn't successful or if the `catch` block caught an error, then use `console.error` to print out the error.

Next, let's add our rudimentary search bar. If the access token exists, then add a `<form>` component. In the form, add an `<input>` component with a simple placeholder and some `name` attribute like `query`, and a `<button>` of attribute type `submit`. Finally, add an `onSubmit` event handler for some new function like `spotifySearch`. Here is our form component:
```html
<form onSubmit={spotifySearch}>
    <input placeholder='Enter a Spotify song' name='query'></input>
    <button type='submit'>Search</button>
</form>
```

Create a new state varable to store our song results list, like `results` and initialized to an empty array `[]`. Then, in the new function `spotifySearch`, ensure that the function has the `async` modifier and has a single parameter `event`. `event` basically helps us access info from the form once the user submits it. Add a line that calls `preventDefault` on `event` to prevent a page reload when the form is submitted. Then, extract the value from the `<input>` component into a `const` variable with: `event.target.query.value`. Next, create another `try/catch` block to encapsulate our next Spotify Web API call. Similar to how we did the previous call, make a call to `fetch` into a variable like `response` along with the `await` modifier. In this `fetch` call, set the URL to `https://api.spotify.com/v1/search?q=${query}&type=track&market=US`. When we look at Spotify's documentation for their search feature [here](https://developer.spotify.com/documentation/web-api/reference/search), we can see how to make calls to this API endpoint. The parameter `q` is the actual search query, so we set that to `query`. `type` is what type of search we're doing, so we'll just set that to `track` to create a search bar for songs. Lastly, we just set `market=US` to simplify our results. Then, ensure that the HTTP method used is `GET` and the only header we need is `"Authorization": "Bearer " + accessToken`. This header informs Spotify that we are authorized to make this call to their server. And with that, as we did before, ensure that the `status` of the `response` object is `200`, and if so, then set our `results` state variable to `responseJSON.tracks.items`, where `responseJSON` is `await response.json()`.

Finally, let's display the results to the user! Add a `<div>` component with a class like `trackResults`. In `src/App.css`, add some basic styling: `display: flex; flex-wrap: wrap; gap: 16px;` for `trackResults`. Then, back in `src/App.jsx`, in the `<div>` we just made, add a mapping on the `results` state variable to display each `track` in its own `<div>`. Inside each one, add a `<p>` element with `{track.name}` to display the track's name, another `<p>` element with something like `by {track.artists.map((artist) => artist.name).join(", ")}` to display the artists of the track, and finally a `<a>` element with an `href` attribute `track.external_urls.spotify` and `target` attribute of `_blank` to open the link in a new tab. For some finishing touches, be sure to add a `key` attribute on the track `<div>` set to `track.id` (required in React to help manage state changes), add a CSS class like `track` to the `<div>`, and finally add a simple background color like `background-color: lightblue;` in `src/App.css` for this class.

That's it! If you did everything correctly, then you should be able to search up songs like you would on Spotify! If you want to explore other features of the Spotify Web API, check them out [here](https://developer.spotify.com/documentation/web-api)! 

Here is all of the finished code:

#### .env
```dotenv
CLIENT_ID=[paste_your_client_id_here]
CLIENT_SECRET=[paste_your_client_secret_here]
```

#### vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  }
})
```

#### src/App.jsx
```jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [results, setResults] = useState([]);

  const authenticateSpotify = async () => {
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET
        })
      });

      if (response.status === 200) {
        const responseJSON = await response.json();
        if (responseJSON) {
          setAccessToken(responseJSON.access_token);
        }
      } else {
        console.error('HTTP error! Status ' + response.status);
      }
    } catch (error) {
      console.error('Error with Spotify authentication:', error);
    }
  };

  const spotifySearch = async (event) => {
    event.preventDefault();
  
    const query = event.target.query.value;
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&market=US`, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + accessToken
        }
      });

      if (response.status === 200) {
        const responseJSON = await response.json();
        if (responseJSON) {
          setResults(responseJSON.tracks.items);
        }
      } else {
        console.error('HTTP error! Status ' + response.status);
      }
    } catch (error) {
      console.error('Error with Spotify authentication:', error);
    }
  };

  return (
    <>
      <h1>Spotify Web API Demo</h1>
      <button onClick={authenticateSpotify}>Authenticate</button>

      { accessToken && 
        <form onSubmit={spotifySearch}>
          <input placeholder='Enter a Spotify song' name='query'></input>
          <button type='submit'>Search</button>
        </form>
      }

      <div className='trackResults'>
        {results.map((track) => (
          <div key={track.id} className="track">
            <p>{track.name}</p>
            <p>by {track.artists.map((artist) => artist.name).join(", ")}</p>
            <a href={track.external_urls.spotify} target="_blank">Open on Spotify</a>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
```

#### src/App.css
```css
.trackResults {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.track {
    background-color: lightblue;
}
```
## Next Steps
In this workshop, we’ve learned what web APIs are and how to use them. Now, try to add them to your own projects to create cool features! If you want to explore some other web APIs, there are plently of popular options like the Gemini Developer API, Google Maps API, YouTube API, Instagram API, Spotify Web API, and Twilio API.

That's it for this workshop! Thank you and good luck with your projects!
