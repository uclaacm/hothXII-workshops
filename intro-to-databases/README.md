# HOTHXII Intro to Databases & MongoDB Workshop
**Date of Workshop:** March 2, 2025

**Teacher:** Lorelei Tang

**Description:** Hi!! This workshop provides a beginner-friendly introduction to databases and MongoDB. Participants will learn what databases are, why we use them, different types of databases, and how to perform CRUD (Create, Read, Update, Delete) operations in MongoDB. The session includes a live demo to reinforce key concepts. 

- [Slides](https://bit.ly/hothXII-db)
- [Workshop Recording]()

Let's hop right in!

## Workshop Overview
This workshop provides a beginner-friendly introduction to **databases** and **MongoDB**. You’ll learn:
- What databases are and why they’re essential
- The difference between **SQL** and **NoSQL** databases
- How **MongoDB** works and its advantages
- The **CRUD (Create, Read, Update, Delete) operations** in MongoDB
- Hands-on **MongoDB Demo** :D

By the end of this session, you’ll understand the basics of databases, how to store and retrieve data, and how to work your way around **MongoDB**.

---

## 1. What is a Database?
### DEFINITION:
A **database** is an organized collection of data that allows efficient storage, retrieval, and management.

### ANALOGY:
Think of it as a smart bookshelf that organizes and retrieves books (data) when needed. Databases store structured and unstructured data, making it easier to manage large amounts of information.
- Instead of storing books randomly, it **categorizes and organizes** them.
- You can **quickly find a book** instead of searching through a pile.
- You can **add, remove, or update** books without messing up the organization.

A database does the same thing—but with **digital data**!

#### The Smart Bookshelf = The Database
* Just like a database stores and organizes data, this smart bookshelf stores and organizes books.
* Instead of manually searching, you can ask the bookshelf to find a book for you, just like running a query in a database!
#### Shelves = Collections
* Each shelf on the bookshelf represents a collection in MongoDB.
* One shelf might contain fiction books, another shelf science books, and another history books—just like MongoDB collections store different types of related data (e.g., students, courses, orders, products).
#### Books = Documents
* Each book on a shelf represents a document in a MongoDB collection.
* Every book has different details (title, author, genre, number of pages).
* Unlike traditional libraries (SQL databases), where every book must follow a strict catalog format, this bookshelf allows each book to have different types of information.
* Example: Some books might have illustrations, extra footnotes, or bookmarks, while others don’t—just like MongoDB allows flexible document structures!
#### Book Metadata = Fields in a Document
* Each book has a cover, title, author, and summary—these details are like fields in a MongoDB document.
#### The Bookshelf’s Search System = Queries in MongoDB
* Instead of manually scanning the shelves, you can ask the smart bookshelf to find books for you.
* Example:
- “Find all books written by J.K. Rowling” →
```JavaScript
db.books.find({ author: "J.K. Rowling" })
```
- “Show me all science books” → 
```JavaScript
db.books.find({ genre: "Science" })
```
* The bookshelf instantly retrieves the right books, just like MongoDB quickly searches for and returns documents.

### Key Features of a Database
- **Organized Storage** – Keeps data structured and manageable
- **Fast Retrieval** – Enables quick searches
- **Efficient Updates** – Allows easy modifications
- **Data Security** – Protects sensitive information
- **Concurrency** – Supports multiple users accessing data simultaneously

### Examples of data stored in databases:
- **Social Media:** User profiles, posts, and comments
- **E-Commerce:** Products, orders, customer info
- **Healthcare:** Patient records, appointments

---

## 2️. Why Do We Use Databases?

Databases are really good at storing stuff! Without a database, storing and managing data would be **chaotic** and **inefficient**.

### Why Not Just Use Excel or Text Files?
- **Scalability:** Databases handle **millions of records** efficiently, while spreadsheets slow down.
- **Data Integrity:** Ensures **accurate** and **consistent** data.
- **Security:** Restricts access to **authorized users** only.
- **Automation:** Allows automatic updates and **real-time** data handling.

 **Example:** Imagine running an online store without a database.
- How would you track **thousands of customer orders**?
- How would you **update inventory** when products run out?
- How would you **search for past purchases**?

A database makes all of this **automatic, fast, and scalable**.

---

## 3️. Types of Databases

### **Relational Databases (SQL) – Structured & Table-Based**
Relational databases use **tables** with **rows** and **columns** to store data.

* **Structured & Schema-based**
* **Uses SQL (Structured Query Language) to retrieve data**
* **Best for applications needing strict organization**

#### Example Table (SQL Database - MySQL, PostgreSQL):
```plaintext
| ID | Name  | Age | City      |
|----|-------|-----|-----------|
| 1  | Alice | 25  | New York  |
| 2  | Bob   | 30  | LA        |
| 3  | Eve   | 28  | Chicago   |
```

**Drawback?** **Fixed Schema** – Every row must follow the same format!

---  

### **NoSQL Databases – Flexible & Scalable**
NoSQL databases store data in **key-value pairs, documents, or graphs** instead of tables.

* **Flexible structure** (Documents don’t need to follow a strict format)
* **Scales easily across servers**
* **Great for modern web apps, IoT, and big data**

#### Example (NoSQL - MongoDB):
```json
{
  "name": "Alice",
  "age": 25,
  "city": "New York"
}
```

No fixed columns—each document can store **different fields!**

**MongoDB** is what we will be using today, and it is a prime example of a NoSQL database!

---

## 4️. What is MongoDB?

MongoDB is a **NoSQL database** that stores data in a **JSON-like format** called **documents**.

### Key Features of MongoDB
- **Document-Based** – Uses JSON-like structure instead of tables
- **Flexible Schema** – Documents can have different fields
- **Scalable** – Designed for high-performance, distributed applications
- **Fast Queries** – Indexing and aggregation for quick data retrieval
- **Real-Time Processing** – Handles streaming and analytics data efficiently

### MongoDB vs. SQL – What's the Difference?

| Feature       | SQL (Relational DB)  | MongoDB (NoSQL)  |
|--------------|--------------------|----------------|
| Structure    | Tables & Rows       | JSON Documents  |
| Schema       | Fixed Columns       | Flexible Fields  |
| Scalability  | Vertical Scaling    | Horizontal Scaling |
| Speed       | Slower for Big Data  | Faster for Large Datasets  |
| Best For     | Banking, Finance    | Social Media, E-commerce  |

---

## 5️. CRUD Operations in MongoDB

CRUD = **Create, Read, Update, Delete**
MongoDB uses JavaScript-like commands to perform these operations.

### 1️. Create (Insert Data)
```js
db.users.insertOne({ name: "Alice", age: 25, city: "New York" });
```

### 2️. Read (Find Data)
```js
db.users.find({ city: "New York" });
```

### 3️. Update (Modify Data)
```js
db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } });
```

### 4️. Delete (Remove Data)
```js
db.users.deleteOne({ name: "Alice" });
```

---

## 6️. Demo with MongoDB!

### Hands-On Activity
In this demo, we’ll:
- Set up a **MongoDB database**
- Create a **collection** and insert documents
- Perform CRUD operations
- Run **queries** to retrieve data

### Prerequisites
- Install **MongoDB** OR use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create an account
- Install VSCode or some sort of IDE where you can edit your code.

**Resources**
- [MongoDB Official Docs](https://www.mongodb.com/docs/)
- [Online MongoDB Playground](https://mongoplayground.net/)
- [How to Connect MongoDB to VSCode](https://www.mongodb.com/docs/mongodb-vscode/connect/)

---

## Who Should Attend?
- **Beginners** – No prior database experience required!
- **Developers** – Learn how NoSQL databases work
- **Tech Enthusiasts** – Curious about modern database technologies

---

## Conclusion
By the end of this workshop, you’ll:
* Understand **databases and their importance**
* Know the difference between **SQL and NoSQL databases**
* Perform **CRUD operations in MongoDB**
* Be able to build **basic NoSQL applications**

Get ready to **master MongoDB** and start building powerful applications!! Good luck hackers!!!!
