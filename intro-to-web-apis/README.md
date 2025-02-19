# HOTH XII Workshop - Intro to Web APIs

**Date**: February 17, 2025<br>
**Teacher**: Nishant Ray

Hi there! Welcome to the Intro to Web APIs workshop, made for HOTH XII. We'll be going over what a client-server model is, an overview of APIs and web APIs, HTTP, some extra stuff, and a fun demo.  If you're looking to easily add complex functionality to your projects, or just learn what web APIs are, you're in the right place!

## Resources
- [Slides](https://tinyurl.com/web-apis-slides)
- [Recording](ADD RECORDING LINK)

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

So what are web APIs? A **web API** is a communication channel over the internet that uses the **HTTP** protocol.

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
- A URL specifies to the URL where to go and what to retrieve. It's typically made of a protocol (i.e. HTTP or HTTPS), domain/host (e.g. example.com), path (e.g. /api/orders), and optional query parameters that may provide extra details for the request.
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

### HTTP Responses:
- After handling a received request, a server will send a response back to the client, consisting of a **head** and a **body**.
- The head contains metadata about the response, including headers, and most importantly, the status of the response. Statuses are represented by 3-digit numbers, known as status codes. You've heard of error 404, right? The first number of the status code indicates the type of status indicated.
    - 1XX: information (request was received but is still being processed)
    - 2XX: successful (request was recevied and processed successfully)
    - 3XX: redirection (request was received but it was redirected to someplace else or some additional action must be completed)
    - 4XX: client error (request wasn't made by the client correctly)
    - 5XX: server error (server failed to complete the received request)
- The body contains any data/files that were requested

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
- Some popular web APIs that you can check out: Google Maps API, YouTube API, Instagram API, and Spotify Web API

## Demo
