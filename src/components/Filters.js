import { useTranslation } from "react-i18next";

export const Filters = ({ setStatus, setSpecies }) => {
    const { t } = useTranslation();

    return (
        <div className="filters-container">
            <h2>{t("filterTitle")}</h2>

            <label>{t("status")}:</label>
            <select
                onChange={(e) => setStatus(e.target.value)}
                className=""
            >
                <option value="">{t("all")}</option>
                <option value="Alive">{t("alive")}</option>
                <option value="Dead">{t("dead")}</option>
                <option value="unknown">{t("unknown")}</option>
            </select>

            <label>{t("species")}:</label>
            <select
                onChange={(e) => setSpecies(e.target.value)}
                className=""
            >
                <option value="">{t("all")}</option>
                <option value="Human">{t("human")}</option>
                <option value="Alien">{t("alien")}</option>
            </select>
        </div>
    );
};