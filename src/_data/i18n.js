module.exports = {
  // Supported languages
  languages: {
    en: {
      name: "English",
      nativeName: "English",
      code: "en",
      dir: "ltr"
    },
    fr: {
      name: "French",
      nativeName: "Français", 
      code: "fr",
      dir: "ltr"
    },
    // Easy to add new languages:
    // es: {
    //   name: "Spanish",
    //   nativeName: "Español",
    //   code: "es",
    //   dir: "ltr"
    // },
    // de: {
    //   name: "German",
    //   nativeName: "Deutsch",
    //   code: "de",
    //   dir: "ltr"
    // }
  },

  // Common UI translations
  ui: {
    en: {
      home: "Home",
      getStarted: "Get Started", 
      toggleTheme: "Toggle dark mode",
      switchLanguage: "Switch language",
      copyCode: "Copy code to clipboard",
      copied: "Copied!",
      programming: "Programming Languages",
      learnMore: "Learn more"
    },
    fr: {
      home: "Accueil",
      getStarted: "Commencer",
      toggleTheme: "Basculer le mode sombre", 
      switchLanguage: "Changer de langue",
      copyCode: "Copier le code",
      copied: "Copié !",
      programming: "Langages de Programmation",
      learnMore: "En savoir plus"
    }
  },

  // Basic site content (not page-specific content)
  content: {
    en: {
      siteTitle: "Learn from EliApps",
      siteDescription: "Learn and get started with anything."
    },
    fr: {
      siteTitle: "Learn from EliApps",
      siteDescription: "Apprenez et commencez avec n'importe quoi."
    }
  },

  // Default language
  defaultLang: "en",

  // Get all supported language codes
  getSupportedLangs() {
    return Object.keys(this.languages);
  },

  // Get language info
  getLangInfo(langCode) {
    return this.languages[langCode] || this.languages[this.defaultLang];
  },

  // Get UI translation
  getUI(langCode, key) {
    const lang = this.ui[langCode] || this.ui[this.defaultLang];
    return lang[key] || key;
  },

  // Get content translation  
  getContent(langCode, key) {
    const lang = this.content[langCode] || this.content[this.defaultLang];
    return lang[key] || key;
  }
}; 