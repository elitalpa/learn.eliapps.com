---
layout: base.njk
title: Get Started with TypeScript
description: Learn how to set up and get started with TypeScript development
lang: en
permalink: /en/get-started/typescript/
---

# Get Started with TypeScript

TypeScript is [JavaScript](./javascript.md) with types, improved syntax, and better tooling.

## Possible Setups:

- [**Basic setup:** using the default tool](#basic-setup)
- [**Better setup (recommended):** using the modern tool that is better and more efficient](#better-setup)

## Basic Setup

TypeScript can be installed from: https://www.typescriptlang.org/download/

Once installed, you can check the version:

```sh
tsc --version
```

### 1. Project Initialization

Initialize a project:

```sh
tsc --init
```

This creates a `tsconfig.json` file for configuration.

### 2. Running a TypeScript File

Create a `main.ts` file with the code:

```typescript
console.log("Hello World");
```

Run the file:

```sh
# transpile ts into js
tsc # or tsc main.ts

# run the transpiled code
node main.js
```

### When getting back to a project

```sh
# transpile
tsc

# run
node main.js
```

## Better Setup

Instead of using the default TypeScript `tsc`, you can use [tsx](https://tsx.is/)

`tsx` can be installed from: https://tsx.is/getting-started

Once installed, you can check the version:

```sh
tsx --version
```

### 1. Project Initialization

Initializing and creating a `tsconfig.json` file is optional.

### 2. Running a TypeScript File

Create a `main.ts` file with the code:

```typescript
console.log("Hello World");
```

Run the file:

```sh
tsx main.ts
```

### When getting back to a project

```sh
tsx main.ts
```
