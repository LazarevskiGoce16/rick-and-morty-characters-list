import { useTranslation } from "react-i18next";

export const CharacterCard = ({ character }) => {
    const { t } = useTranslation();

    return (
        <div className="character-card">
            <img src={character.image} alt={character.name} className="card-img" />
            <h2 className="card-title">{character.name}</h2>
            <p><strong>{t("status")}: </strong>{character.status}</p>
            <p><strong>{t("species")}: </strong>{character.species}</p>
            <p><strong>{t("gender")}: </strong>{character.gender}</p>
            <p><strong>{t("origin")}: </strong>{character.origin.name}</p>
        </div>
    );
};