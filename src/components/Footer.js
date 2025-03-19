import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export const Footer = () => {
    const { t } = useTranslation();

    const changeLanguage = (lang, event) => {
        console.log(`Language changed to ${lang}`, event);
        i18n.changeLanguage(lang)
            .then(() => console.log("Language successfully changed to:", i18n.language))
            .catch((err) => console.error("Language change error:", err));
    };

    return (
        <footer>
            <button 
                onClick={(event) => changeLanguage("en", event)}
                className="language-btn"
            >EN</button>
            <button 
                onClick={(event) => changeLanguage("de", event)}
                className="language-btn"
            >DE</button>
            <p>© {new Date().getFullYear()} {t("footerText")}</p>
        </footer>
    );
};