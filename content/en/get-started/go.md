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
