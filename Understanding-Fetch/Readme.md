[
{
"toy": "Teddy Bear",
"color": "Brown",
"size": "Big",
"price": 200
}
]

The data you see above is called **JSON Data** (JavaScript Object Notation).  
It looks very similar to an **object**. JSON is a standard format used to share data between the frontend (what the user sees) and the backend (the server).

No matter which programming language is used on the backend — for example, C++, C#, Ruby on Rails, or others — the data is usually sent and received in **JSON format**.

This makes it easy for different systems and languages to communicate with each other.

In the example above, notice that both the **keys** (like `"toy"`, `"color"`, `"size"`, `"price"`) and their **values** (like `"Teddy Bear"`, `"Brown"`, `"Big"`, `200`) are written inside **quotes** (except numbers, which don’t need quotes).

---

### 🔹 What is **fetch**?

**Fetch** means **"to get data"** from somewhere else (like a server or API).

---

### Example (imagine like a conversation):

- Your website → “Hey server, give me the weather.”
- Server → “Here is the weather data.”
- **Fetch** → The tool that goes to the server, takes the data, and gives it back to your website.

So basically:
👉 **Fetch = a helper that brings data for you.**

---

### 🔹 Coding Example (JavaScript):

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // convert response into JSON
  .then((data) => {
    console.log("We got the data:", data); // show data
  })
  .catch((error) => {
    console.log("Something went wrong:", error); // handle error
  });
```

---

✅ In short:

- `fetch("URL")` → Ask server for data.
- `.then(...)` → Wait and get the data.
- `.catch(...)` → If there’s a problem, catch the error.
