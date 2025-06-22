
import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from "@/hooks/useLanguage";

export const LanguageSelector = () => {
  const {
    language,
    changeLanguage
  } = useLanguage();
  
  const languages: {
    code: Language;
    label: string;
  }[] = [{
    code: 'en',
    label: 'EN'
  }, {
    code: 'de',
    label: 'DE'
  }, {
    code: 'fr',
    label: 'FR'
  }];
  
  return (
    <div className="flex space-x-2">
      {languages.map(lang => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "outline"}
          size="sm"
          onClick={() => changeLanguage(lang.code)}
          className="min-w-[40px]"
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
};
