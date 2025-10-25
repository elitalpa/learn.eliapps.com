---
layout: base.njk
title: Commencer avec Python
description: Apprenez à configurer et commencer le développement Python
lang: fr
permalink: /fr/get-started/python/
---

# Commencer avec Python

## Configurations Possibles :

- [**Configuration de base :** utiliser les outils par défaut](#configuration-de-base)
- [**Meilleure configuration (recommandée) :** utiliser des outils modernes qui sont meilleurs et plus efficaces](#meilleure-configuration)

## Configuration de Base

Python peut être installé depuis : https://www.python.org/downloads/

Une fois installé, vous pouvez vérifier la version :

```sh
python --version
# ou (selon votre système)
python3 --version
```

### 1. Environnement Virtuel

Créez un environnement virtuel en utilisant venv :

```sh
python -m venv .venv
```

Activez-le :

```sh
# Note : si vous quittez votre session, assurez-vous de l'activer à nouveau
source .venv/bin/activate
# ou (selon votre système)
source .venv/Scripts/activate
```

Vérifiez si venv est activé :

```sh
# vérifier la variable d'environnement
echo $VIRTUAL_ENV
# devrait afficher quelque chose si venv est actif

# ou utiliser du code python pour vérifier
python -c "import sys; print('venv active' if sys.prefix != sys.base_prefix else 'no venv')"
```

### 2. Exécuter un Fichier Python

Créez un fichier `main.py` avec le code :

```python
print("Bonjour le Monde")
```

Exécutez le fichier :

```sh
python main.py
```

### 3. Installer des Bibliothèques

Par exemple, pour installer la bibliothèque `python-dotenv` :

```sh
pip install python-dotenv
```

Désinstaller une bibliothèque peut se faire avec la commande `pip uninstall`.

Exporter une liste des bibliothèques installées :

```sh
pip freeze > requirements.txt
```

Installer des bibliothèques depuis un fichier `requirements.txt` :

```sh
pip install -r requirements.txt
```

### En revenant à un projet

```sh
# Créer l'environnement virtuel
python -m venv .venv

# Activer l'environnement virtuel
source .venv/bin/activate
# ou (selon votre système)
source .venv/Scripts/activate

# Vérifier si venv est activé
echo $VIRTUAL_ENV

# Installer les bibliothèques
pip install -r requirements.txt

# Exécuter le fichier Python
python main.py
```

## Meilleure Configuration

Au lieu d'utiliser les outils Python par défaut, vous pouvez utiliser [uv](https://docs.astral.sh/uv/) d'[Astral](https://astral.sh).

`uv` peut être installé depuis : https://docs.astral.sh/uv/getting-started/installation/

### 1. Environnement Virtuel

`uv` crée automatiquement les environnements virtuels.

Lors du démarrage d'un nouveau projet, initialisez-le avec :

```sh
uv init
```

### 2. Exécuter un Fichier Python

Créez un fichier `main.py` avec le code :

```python
print("Bonjour le Monde")
```

Exécutez le fichier :

```sh
uv run main.py
# au lieu de : python main.py
```

### 3. Installer des Bibliothèques

Par exemple, pour installer la bibliothèque `python-dotenv` :

```sh
uv add python-dotenv
# au lieu de : pip install python-dotenv
```

Désinstaller une bibliothèque peut se faire avec la commande `uv remove`.

Exporter une liste des bibliothèques installées n'est pas nécessaire car `uv` utilise automatiquement le fichier `pyproject.toml`.

### En revenant à un projet

```sh
uv run main.py
# uv gère tout automatiquement :
# - Crée l'environnement virtuel (.venv) et l'utilise
# - Installe les bibliothèques avant d'exécuter le fichier Python
```
