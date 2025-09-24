---
layout: base.njk
title: Commencer avec JavaScript
description: Apprenez à configurer et commencer le développement JavaScript
lang: fr
permalink: /fr/get-started/javascript/
---

# Commencer avec JavaScript

## Configurations Possibles :

- [**Configuration de base :** utiliser les outils par défaut](#configuration-de-base)
- [**Meilleure configuration (recommandée) :** utiliser des outils améliorés qui sont meilleurs et plus efficaces](#meilleure-configuration)

## Configuration de Base

Node.js (qui inclut le runtime JavaScript et npm) peut être installé depuis : https://nodejs.org/en/download

Une fois installé, vous pouvez vérifier la version :

```sh
node --version
npm --version
```

### 1. Initialisation du Projet

Initialisez un projet :

```sh
npm init -y
```

Ceci crée un fichier `package.json` qui gère les dépendances de votre projet.

### 2. Exécuter un Fichier JavaScript

Créez un fichier `main.js` avec le code :

```javascript
console.log("Bonjour le Monde");
```

Exécutez le fichier :

```sh
node main.js
```

### 3. Installer des Bibliothèques

Par exemple, pour installer la bibliothèque `dotenv` :

```sh
npm install dotenv
```

Désinstaller une bibliothèque peut se faire avec la commande `npm uninstall`.

La liste des bibliothèques installées est automatiquement maintenue dans `package.json` et `package-lock.json`.

Installer des bibliothèques depuis un fichier `package.json` :

```sh
npm install
```

### En revenant à un projet

```sh
# Installer les bibliothèques
npm install

# Exécuter le fichier JavaScript
node main.js
```

## Meilleure Configuration

Au lieu d'utiliser les outils Node.js par défaut, vous pouvez utiliser [nvm](https://github.com/nvm-sh/nvm) pour la gestion des versions de Node.js et [pnpm](https://pnpm.io/) comme gestionnaire de paquets plus rapide et efficace.

### Installer les Outils

**nvm** peut être installé depuis : https://github.com/nvm-sh/nvm#installing-and-updating

**pnpm** peut être installé depuis : https://pnpm.io/installation

### 1. Gestion des Versions de Node.js

`nvm` vous permet d'installer et de basculer entre différentes versions de Node.js facilement.

Installez la dernière version LTS de Node.js :

```sh
nvm install --lts
nvm use --lts
```

Vérifiez votre version de Node.js :

```sh
node --version
```

### 2. Initialisation du Projet

Initialisez un projet :

```sh
pnpm init
```

### 3. Exécuter un Fichier JavaScript

Créez un fichier `main.js` avec le code :

```javascript
console.log("Bonjour le Monde");
```

Exécutez le fichier :

```sh
node main.js
# ou ajoutez un script à package.json et utilisez :
# pnpm run start
```

### 4. Installer des Bibliothèques

Par exemple, pour installer la bibliothèque `dotenv` :

```sh
pnpm add dotenv
# au lieu de : npm install dotenv
```

Désinstaller une bibliothèque peut se faire avec la commande `pnpm remove`.

La liste des bibliothèques installées est automatiquement maintenue dans `package.json` et `pnpm-lock.yaml`.

### En revenant à un projet

```sh
# Utiliser la version correcte de Node.js (si .nvmrc existe)
nvm use

# Installer les bibliothèques (pnpm est beaucoup plus rapide que npm)
pnpm install

# Exécuter le fichier JavaScript
node main.js
# ou utiliser vos scripts définis :
# pnpm run start
``` 