# TypeFrame

### TypeFrame is Lightweight TypeScript Framework that does all the heavy lifting.

---

### What is TypeFrame?

TypeFrame is a lightweight TypeScript framework for building web applications with ease. It provides a structured approach to developing frontend applications, emphasizing type safety, modularity, and extensibility.

### Check Out a Working Demo Here!: [User Demo](https://jpbruehw.github.io/typeframe/)

### Features:

- **Type Safety:** Built entirely in TypeScript, TypeFrame leverages static typing to catch errors at compile time, reducing bugs and improving code quality.

- **Modular Architecture:** TypeFrame encourages a modular architecture, allowing you to break your application into reusable components that can be composed together to build complex user interfaces.

- **Component-Based Development:** Utilize the power of components to encapsulate UI elements and logic, making your codebase more maintainable and scalable.

- **Simplified State Management:** Manage application state effortlessly with built-in state management utilities, reducing boilerplate code and complexity.

- **Integration with Third-Party Libraries:** Seamlessly integrate with popular third-party libraries and frameworks, leveraging their functionality while maintaining type safety.

### Stay Tuned!

TypeFrame is constantly being updated to make the development experience even better. Want to contribute? If you encounter any issues, have feature requests, or want to contribute improvements, please submit an issue or pull request on GitHub.

### Check out our User Demo!

We have put together a simple demo app rendering some user information from a JSON Server file. The purpose of this demo is to help developers get familiar with the framework. Follow these steps to get started:

1. #### Clone the repo
   <code>
      git clone https://github.com/jpbruehw/typeframe
   </code>
2. #### cd into repo
   <code>
      cd typeframe
   </code>
3. #### Install Packages
   <code>
      npm install or yarn install
   </code>
4. #### Run startup command
   <code>
      npx parcel index.html
   </code>
**Note:** if you want to run the user demo app with your own __db.json__ file, navigate to __index.ts__ and comment out the following line:

```TypeScript
const jsonDbLink = "https://my-json-server.typicode.com/jpbruehw/typescript-web-framework/blob/main/users";
```

Now, uncomment the line under it:

```TypeScript
// link for local development
const jsonDbLink = 'https://localhost:3000/users'
```

By doing this, you can customize the **db.json** file as you see fit. If you do this, you can also run the "db" and parcel startup command concurrently:
<code>
npm start
</code>

_See package.json for reference:_

```JSON
  "scripts": {
    "start:parcel": "npx parcel index.html",
    "start:db": "npx json-server --watch db.json",
    "start": "concurrently npm:start:*"
  },
```

### License

TypeFrame is licensed under the [MIT License](https://opensource.org/licenses/MIT)
