---
layout: base.njk
title: Bien démarrer avec Go
description: Apprenez à configurer et à démarrer avec le langage de programmation Go
lang: fr
permalink: /fr/get-started/go/
---

# Commencer avec Go

## Installation

Go peut être installé depuis : https://go.dev/doc/install

Une fois installé, vous pouvez vérifier la version :

```sh
go version
```

### 1. Initialisation du projet

Créez un nouveau dossier pour votre projet et ouvrez-le :

```sh
mkdir hello
cd hello
```

Initialisez un module Go :

```sh
go mod init example/hello
```

Ceci crée un fichier `go.mod` qui définit le nom de votre module et stockera les informations des dépendances.

### 2. Exécuter un fichier Go

Créez un fichier `main.go` avec :

```go
package main

import "fmt"

func main() {
    fmt.Println("Bonjour le monde!")
}
```

Exécutez le programme :

```sh
go run .
```

### 3. Installer et utiliser des bibliothèques

Modifiez `main.go` pour utiliser un paquet externe :

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

Demandez à Go de résoudre et télécharger les dépendances :

```sh
go mod tidy
```

Cela va :

- Ajouter le module `rsc.io/quote` à `go.mod`
- Créer ou mettre à jour `go.sum` avec les sommes de contrôle

Exécutez à nouveau le programme :

```sh
go run .
```

Vous devriez voir une citation liée à Go s’afficher.
