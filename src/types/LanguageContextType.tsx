interface LanguageContextType {
   language: string;
   toggleLanguage: (lang: string) => void;
   t: (key: string) => string;
}

export default LanguageContextType;
