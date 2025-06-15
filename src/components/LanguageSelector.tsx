
import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from "@/hooks/useLanguage";

export const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'fr', label: 'FR' }
  ];

  return (
    <div className="flex space-x-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "outline"}
          size="sm"
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1 text-sm ${
            language === lang.code 
              ? "bg-amber-900 hover:bg-amber-800 text-white" 
              : "border-stone-300 text-stone-700 hover:bg-stone-100"
          }`}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
};
