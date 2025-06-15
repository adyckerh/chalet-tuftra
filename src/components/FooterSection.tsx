import { MapPin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Chalet Tuftra Findelbach</h3>
            <p className="text-stone-300">{t("luxury_sanctuary") || "Your light-filled family hub in the heart of Zermatt"}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("contact")}</h4>
            <div className="space-y-2 text-stone-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Zermatt, Switzerland</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@chalettuftra.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+41 27 XXX XXXX</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("guests_experience") || "Guest Experience"}</h4>
            <p className="text-stone-300 mb-2">
              {t("guestbook_note") ||
                "We encourage you to share your experience in our guest book and let us know what we can improve for future guests."}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("partnership") || "Partnership"}</h4>
            <p className="text-stone-300 mb-2">{t("managed_partnership") || "Managed by"}</p>
            <a 
              href="https://zermattskichalets.com/accommodation/chalet-tuftra-findelbach/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-emerald-200 font-semibold"
            >
              Zermatt Ski Chalets
            </a>
          </div>
        </div>
        <div className="border-t border-stone-700 mt-12 pt-8 text-center text-stone-400">
          <p>
            &copy; 2024 Chalet Tuftra. {t("rights_reserved") || "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};
