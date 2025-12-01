---
layout: base.njk
title: Get Started with Go
description: Learn how to set up and get started with the Go programming language
lang: en
permalink: /en/get-started/go/
---

# Get Started with Go

## Setup

Go can be installed from: https://go.dev/doc/install

Once installed, you can check the version:

```sh
go version
```

### 1. Project Initialization

Create a new folder for your project and move into it:

```sh
mkdir hello
cd hello
```

Initialize a Go module:

```sh
go mod init example/hello
```

This creates a `go.mod` file which defines your module name and will store dependency information.

### 2. Running a Go File

Create a `main.go` file with:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

Run the program:

```sh
go run .
```

### 3. Installing and using Libraries

Edit `main.go` to use an external package:

```go
package main

import (
    "fmt"
    "rsc.io/quote"
)

func main() {
    fmt.Println(quote.Go())
}
```

Tell Go to resolve and download dependencies:

```sh
go mod tidy
```

This will:

- Add the `rsc.io/quote` module to `go.mod`
- Create or update `go.sum` with checksums

Run the program again:

```sh
go run .
```

You should see a Go-related quote printed.

### 4. Formatting Your Code

Go has a built-in formatter so your code style is consistent:

```sh
# Format the current package
go fmt
```

### When Getting Back to a Project

When you return to an existing Go project:

```sh
cd hello

# Make sure dependencies are up to date
go mod tidy

# Run your program
go run .
```

Go will automatically download any missing dependencies defined in `go.mod`.

