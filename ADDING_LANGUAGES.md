# Adding New Languages

This site is designed to make adding new languages very easy. Here's how to do it:

## Step 1: Add Language Configuration

Edit `src/_data/i18n.js` and add your language to the `languages` object:

```javascript
languages: {
  en: { /* existing */ },
  fr: { /* existing */ },
  es: {  // Add Spanish
    name: "Spanish",
    nativeName: "Español",
    code: "es",
    dir: "ltr"
  }
}
```

## Step 2: Add UI Translations

In the same file, add translations for UI elements:

```javascript
ui: {
  en: { /* existing */ },
  fr: { /* existing */ },
  es: {
    home: "Inicio",
    getStarted: "Comenzar",
    toggleTheme: "Cambiar modo oscuro",
    switchLanguage: "Cambiar idioma",
    copyCode: "Copiar código",
    copied: "¡Copiado!",
    programming: "Lenguajes de Programación",
    learnMore: "Saber más"
  }
}
```

## Step 3: Add Content Translations

Add page content translations:

```javascript
content: {
  en: { /* existing */ },
  fr: { /* existing */ },
  es: {
    siteTitle: "Learn from EliApps",
    siteDescription: "Aprende y comienza con cualquier cosa.",
    homeTitle: "Aprende y comienza con cualquier cosa.",
    homeSubtitle: "Lenguajes de Programación:",
    pythonDesc: "Aprende a configurar y comenzar con el desarrollo en Python...",
    javascriptDesc: "Aprende a configurar y comenzar con el desarrollo en JavaScript..."
  }
}
```

## Step 4: Create Content Directory

Create the content directory structure:

```bash
mkdir -p content/es/get-started
```

## Step 5: Add Content Files

Create translated content files:

1. `content/es/index.md` - Homepage
2. `content/es/get-started/python.md` - Python guide
3. `content/es/get-started/javascript.md` - JavaScript guide

Use the existing files as templates and update:
- `lang: es` in frontmatter
- `permalink: /es/...` in frontmatter
- Translate the content

## That's it!

The language switcher, navigation, and all UI elements will automatically update to include the new language. The system will:

- ✅ Automatically detect the new language
- ✅ Add it to the language switcher
- ✅ Generate proper URLs
- ✅ Handle translations with fallbacks

## Example Language Addition

To add German (`de`):

1. Add to `languages`, `ui`, and `content` in `i18n.js`
2. Create `content/de/` directory
3. Add translated content files
4. Build the site - everything works automatically!

The system supports RTL languages too - just set `dir: "rtl"` in the language configuration.

## Key Benefits

- **Single source of truth**: All language configuration is in `src/_data/i18n.js`
- **Automatic UI updates**: Language switcher and navigation update automatically
- **Fallback system**: Missing translations fall back to the default language
- **Clean separation**: Content in `content/` directory, configuration in `_data/`
- **No duplication**: No need to update multiple files for basic language support 