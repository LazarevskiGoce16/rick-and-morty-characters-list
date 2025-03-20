import { useQuery } from "@apollo/client";
import { useState } from "react";
import { CharacterCard } from "./CharacterCard";
import { useTranslation } from "react-i18next";
import { CHARACTERS_QUERY } from "../services/api";


export const CharacterList = ({ status, species }) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("name"); 

  const { loading, error, data } = useQuery(CHARACTERS_QUERY, {
    variables: { page, status, species },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const sortedCharacters = [...data.characters.results].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "origin") {
      return a.origin.name.localeCompare(b.origin.name);
    }
    return 0;
  });

  const handlePageChange = (direction) => {
    if (direction === "next" && data.characters.info.next) {
      setPage(page + 1);
    } else if (direction === "prev" && data.characters.info.prev) {
      setPage(page - 1);
    }
  };

  return (
    <div className="list-container">
      <div className="sort-controls">
        <label>{t("sortBy")}</label>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="name">{t("sortByName")}</option>
          <option value="origin">{t("sortByOrigin")}</option>
        </select>
      </div>

      <div>
        {sortedCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange("prev")}
          disabled={!data.characters.info.prev}
          className="prev-btn"
        >
          {t("prevPage")}
        </button>
        <span>{page}</span>
        <button
          onClick={() => handlePageChange("next")}
          disabled={!data.characters.info.next}
          className="next-btn"
        >
          {t("nextPage")}
        </button>
      </div>
    </div>
  );
};
