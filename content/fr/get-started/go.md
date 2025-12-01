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
