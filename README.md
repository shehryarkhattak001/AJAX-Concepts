# AJAX

**AJAX stands for Asynchronous JavaScript And XML. It is not a programming language. It is a technology for developing better, faster and interactive Web Applications using HTML, CSS, JavaScript and XML.**

- *HTML : Hypertext Markup Language (HTML) is used for defining the structure of a Web Application.*
- *CSS : Cascading Style Sheet (CSS) is used to provide look and style to a Web Application.*
- *JavaScript : JavaScript is used for making a Web Application interactive, interesting and user friendly.*
- *XML : Extensible Markup Language (XML) is a format to store and transport data from the Web Server.* 

> **Note:** Although XML was traditionally used with AJAX, **JSON (JavaScript Object Notation)** is now more common because it is easier to work with in JavaScript applications.

## Q: What's the meaning of Asynchronous in AJAX?

Asynchronous means that the Web Application could send and receive data from the Web Server without refreshing the page. This background process of sending and receiving data from the server along with updating different sections of a web page defines the asynchronous property/feature of AJAX.

# Understanding CPU, RAM, and JavaScript's Synchronous vs. Asynchronous Nature

When we talk about the **CPU (Central Processing Unit)**, many people mistakenly refer to the entire computer box as the CPU. However, that is actually the **base unit**, not the CPU itself. The CPU is a **small chip** that is fixed onto the **motherboard** inside the computer.

The CPU consists of two main components:

1. **Control Unit (CU)** - It manages and controls the flow of data and instructions.  
2. **Arithmetic Logic Unit (ALU)** - It performs arithmetic (mathematical) and logical operations.

These components operate using basic **AND** and **OR gates**, which work purely on **binary code (0s and 1s)**. The CPU cannot understand human languages or high-level programming languages directly.

## How High-Level Languages Work

When we write code in **high-level languages** (languages humans can understand easily), it needs to be **translated** into **machine code (0s and 1s)**. This translation is done by a **compiler**. Once translated, the CPU and RAM work together to execute the instructions.

## The Role of RAM

Everything you are doing on your computer right now is happening in the **RAM (Random Access Memory)**. RAM is a **temporary memory** where data is stored while in use. For example:

- If you open **VS Code**, it is stored and running in the RAM.  
- If you open a **browser**, it is also running in the RAM.

Whenever you perform an operation (e.g., running a function), the request is sent from **RAM to the CPU**. The CPU processes the request and sends the result back to the RAM.

## Requests and Responses Between RAM and CPU

When RAM sends a request to the CPU, the response it receives is called a **response**. These requests and responses are handled in two ways:

1. **Synchronous Requests**: The system **waits** for the CPU to process the request before moving to the next task.  
2. **Asynchronous Requests**: The system **does not wait** for the CPU and moves to the next task, even if the previous task is still being processed.

## Real-Life Example (Restaurant Analogy)

Think of a restaurant:

- **Asynchronous**: You (the customer) place an order with the waiter (RAM). The waiter delivers the order to the kitchen (CPU) but does not wait there. Instead, they move on to serve other tables while the kitchen prepares the food. When the order is ready, the waiter comes back to deliver it.

- **Synchronous**: You place an order, and the waiter stays in the kitchen until the food is prepared. Only after receiving the food will the waiter return to you and move on to the next customer.

## How JavaScript Handles Requests

JavaScript primarily works **asynchronously**, which means it does not wait for the CPU to complete the task before moving to the next one. For example:

```javascript
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 3)); // Output: 8
```

When this function is called, the request is sent to the CPU. In an **asynchronous** environment, JavaScript will continue executing other code without waiting for the CPU to finish the calculation.

### JavaScript's Event Loop Mechanism

JavaScript handles asynchronous operations using the **Event Loop**. The process involves three key components:

1. **Call Stack**: Handles synchronous code execution line by line.
2. **Web APIs**: Executes asynchronous tasks like AJAX requests and timers.
3. **Callback Queue**: Queues the asynchronous results, which the event loop moves to the call stack when it's empty.

## Why JavaScript Is Not Suitable for Heavy Computation

JavaScript is not ideal for tasks that require **complex computations** because of its **asynchronous nature**. It cannot handle heavy mathematical calculations directly. For such tasks, **synchronous languages** like **C#** are better suited, as they wait for the CPU to complete the calculations before moving on.

In short:  
- **Asynchronous**: Faster but does not wait for the CPU (e.g., JavaScript).  
- **Synchronous**: Slower but waits for the CPU (e.g., C#).


