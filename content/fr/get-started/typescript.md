---
layout: base.njk
title: Commencer avec TypeScript
description: Apprenez à configurer et commencer le développement TypeScript
lang: fr
permalink: /fr/get-started/typescript/
---

# Commencer avec TypeScript

TypeScript c'est [JavaScript](./javascript.md) avec des types, une syntaxe améliorée et de meilleurs outils.

## Configurations Possibles :

- [**Configuration de base :** utiliser l'outil par défaut](#configuration-de-base)
- [**Meilleure configuration (recommandée) :** utiliser l'outil moderne qui est meilleur et plus efficace](#meilleure-configuration)

## Configuration de Base

TypeScript peut être installé depuis : https://www.typescriptlang.org/download/

Une fois installé, vous pouvez vérifier la version :

```sh
tsc --version
```

### 1. Initialisation du Projet

Initialisez un projet :

```sh
tsc --init
```

Cela crée un fichier `tsconfig.json` pour la configuration.

### 2. Exécuter un Fichier TypeScript

Créez un fichier `main.ts` avec le code :

```typescript
console.log("Bonjour le Monde");
```

Exécutez le fichier :

```sh
# transpiler le TypeScript (ts) en JavaScript (js)
tsc # ou tsc main.ts

# exécuter le code transpilé
node main.js
```

### En revenant à un projet

```sh
# transpiler
tsc

# exécuter
node main.js
```

## Meilleure Configuration

Au lieu d'utiliser le compilateur TypeScript par défaut `tsc`, vous pouvez utiliser [tsx](https://tsx.is/).

`tsx` peut être installé depuis : https://tsx.is/getting-started

Une fois installé, vous pouvez vérifier la version :

```sh
tsx --version
```

### 1. Initialisation du Projet

L'initialisation et la création d'un fichier `tsconfig.json` sont optionnelles.

### 2. Exécuter un Fichier TypeScript

Créez un fichier `main.ts` avec le code :

```typescript
console.log("Bonjour le Monde");
```

Exécutez le fichier :

```sh
tsx main.ts
```

### En revenant à un projet

```sh
tsx main.ts
```
