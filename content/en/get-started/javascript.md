---
layout: base.njk
title: Get Started with JavaScript
description: Learn how to set up and get started with JavaScript development
lang: en
permalink: /en/get-started/javascript/
---

# Get Started with JavaScript

## Possible Setups:

- [**Basic setup:** using default tools](#basic-setup)
- [**Best setup (recommended):** using improved tools that are better and more efficient](#best-setup)

## Basic Setup

Node.js (which includes JavaScript runtime and npm) can be installed from: https://nodejs.org/en/download

Once installed, you can check the version:

```sh
node --version
npm --version
```

### 1. Project Initialization

Initialize a project:

```sh
npm init -y
```

This creates a `package.json` file that manages your project dependencies.

### 2. Running a JavaScript File

Create a `main.js` file with the code:

```javascript
console.log("Hello World");
```

Run the file:

```sh
node main.js
```

### 3. Installing Libraries

For example, to install the `dotenv` library:

```sh
npm install dotenv
```

Uninstalling a library can be done with the `npm uninstall` command.

The list of installed libraries is automatically maintained in `package.json` and `package-lock.json`.

Install libraries from a `package.json` file:

```sh
npm install
```

### When getting back to a project

```sh
# Install libraries
npm install

# Run JavaScript file
node main.js
```

## Best Setup

Instead of using the default Node.js tools, you can use [nvm](https://github.com/nvm-sh/nvm) for Node.js version management and [pnpm](https://pnpm.io/) as a faster, more efficient package manager.

### Installing the Tools

**nvm** can be installed from: https://github.com/nvm-sh/nvm#installing-and-updating

**pnpm** can be installed from: https://pnpm.io/installation

### 1. Node.js Version Management

`nvm` allows you to install and switch between different Node.js versions easily.

Install the latest LTS version of Node.js:

```sh
nvm install --lts
nvm use --lts
```

Check your Node.js version:

```sh
node --version
```

### 2. Project Initialization

Initialize a project:

```sh
pnpm init
```

### 3. Running a JavaScript File

Create a `main.js` file with the code:

```javascript
console.log("Hello World");
```

Run the file:

```sh
node main.js
# or add a script to package.json and use:
# pnpm run start
```

### 4. Installing Libraries

For example, to install the `dotenv` library:

```sh
pnpm add dotenv
# instead of: npm install dotenv
```

Uninstalling a library can be done with the `pnpm remove` command.

The list of installed libraries is automatically maintained in `package.json` and `pnpm-lock.yaml`.

### When getting back to a project

```sh
# Use the correct Node.js version (if .nvmrc exists)
nvm use

# Install libraries (pnpm is much faster than npm)
pnpm install

# Run JavaScript file
node main.js
# or use your defined scripts:
# pnpm run start
```
