# Get Started with Python

## Possible Setups:

- [**Basic setup:** using default tools](#basic-setup)
- [**Best setup (recommended):** using modern tools that are better and more efficient](#best-setup)

## Basic Setup

Python can be installed from: https://www.python.org/downloads/

Once installed, you can check the version:

```sh
python --version
# or (depending on your system)
python3 --version
```

### 1. Virtual Environment

Create a virtual environment using venv:

```sh
python -m venv .venv
```

Activate it:

```sh
# Note: if you exit your session, always make sure to activate it again
source .venv/bin/activate
# or (depending on your system)
source .venv/Scripts/activate
```

### 2. Running a Python File

Create a `main.py` file with the code:

```python
print("Hello World")
```

Run the file:

```sh
python main.py
```

### 3. Installing Libraries

For example, to install the `python-dotenv` library:

```sh
pip install python-dotenv
```

Uninstalling a library can be done with the `pip uninstall` command.

Export a list of installed libraries:

```sh
pip freeze > requirements.txt
```

Install libraries from a `requirements.txt` file:

```sh
pip install -r requirements.txt
```

### When getting back to a project

```sh
# Create the virtual environment
python -m venv .venv

# Activate the virtual environment
source .venv/bin/activate
# or (depending on your system)
source .venv/Scripts/activate

# Install libraries
pip install -r requirements.txt

# Run Python file
python main.py
```

## Best Setup

Instead of using the default Python tools, you can use [uv](https://docs.astral.sh/uv/) from [Astral](https://astral.sh).

`uv` can be installed from: https://docs.astral.sh/uv/getting-started/installation/

### 1. Virtual Environment

`uv` creates virtual environments automatically.

When starting a new project, initialize it with:

```sh
uv init
```

### 2. Running a Python File

Create a `main.py` file with the code:

```python
print("Hello World")
```

Run the file:

```sh
uv run main.py
# instead of: python main.py
```

### 3. Installing Libraries

For example, to install the `python-dotenv` library:

```sh
uv add python-dotenv
# instead of: pip install python-dotenv
```

Uninstalling a library can be done with the `uv remove` command.

Exporting a list of installed libraries is not needed as `uv` uses the `pyproject.toml` file automatically.

### When getting back to a project

```sh
uv run main.py
# uv handles everything automatically:
# - Creates the virtual environment (.venv) and uses it
# - Installs the libraries before running the Python file
```
