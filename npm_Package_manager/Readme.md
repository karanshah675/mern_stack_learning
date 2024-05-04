[video link to learn](https://youtu.be/P3aKRdUyr0s?si=lcuJqtk-JDDXsKTI)
# what is package manager?
## Imagine trying to build a house without a trip to the hardware store. You'd need to track down every single screw, nail, piece of lumber, and doorknob yourself. It would be time-consuming, frustrating, and likely lead to missing parts or mismatched pieces.

## A package manager is like a one-stop shop for your computer's software needs. It bundles software together with all its necessary parts (like libraries and configuration files) into a single package. This makes installing, updating, and removing software much easier and more reliable.

# what is npm?
## npm stands for Node Package Manager. It's the world's largest software registry specifically designed for the JavaScript programming language https://www.npmjs.com.

# how to use npm?
Absolutely! Here's a breakdown of the steps to get you started with npm:

**Prerequisites:**

* **Node.js:** npm comes bundled with Node.js, a JavaScript runtime environment. Make sure you have Node.js installed on your system. You can verify this by running `node -v` in your terminal. If you don't have it, download and install Node.js from the official website [https://nodejs.org/en/download](https://nodejs.org/en/download).

**Basic Steps:**

1. **Initialize a Project:**
   * Open your terminal and navigate to the directory where you want to create your new project.
   * Run `npm init -y` in your terminal. This command initializes a project by creating a file called `package.json`. The `-y` flag tells npm to accept all default prompts.

2. **Install Packages:**
   * There are millions of packages available in the npm registry. You can search for them using the `npm search <package-name>` command.
   * Once you find the package you want, use `npm install <package-name>` to install it. This will download the package and its dependencies to your project's `node_modules` folder.

3. **Using Packages:**
   * Once a package is installed, you can require it in your JavaScript code using the `require` statement:
     ```javascript
     const packageName = require('<package-name>');
     ```
   * Then, you can use the functionalities provided by the package in your code.

**Additional Tips:**

* **Package.json:** The `package.json` file stores information about your project, including dependencies, scripts, and configurations. You can edit this file to specify which packages your project relies on and their versions.
* **Global vs. Local Installation:** By default, npm installs packages locally to your project's `node_modules` folder. You can use the `-g` flag (e.g., `npm install -g <package-name>`) to install a package globally, making it available from anywhere on your system. However, it's generally recommended to keep installations local to your project for better management.
* **Learn More:** The npm documentation [[https://docs.npmjs.com/](https://docs.npmjs.com/)] is a valuable resource for learning more about npm commands, exploring the package registry, and understanding best practices for using npm in your projects.