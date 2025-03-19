import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { CharacterCard } from "./CharacterCard";
import { useTranslation } from "react-i18next";

const CHARACTERS_QUERY = gql`
  query GetCharacters($page: Int!, $status: String, $species: String) {
    characters(page: $page, filter: { status: $status, species: $species }) {
      info {
        next
    }
        results {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
      }
      location {
        id
        name
      }
      image
      episode {
        id
        name
      }
      created
        }
    }
}`;

export const CharacterList = ({ status, species }) => {
    const { t } = useTranslation();
    const [page] = useState(1);

    const { loading, error, data, fetchMore } = useQuery(CHARACTERS_QUERY, {
        variables: { page, status, species }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log(data);

    const handleLoadMore = () => {
        fetchMore({
            variables: { page: page + 1},
            updateQuery: (prevResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prevResult;
                return {
                    characters: {
                        ...fetchMoreResult.characters,
                        results: [
                            ...prevResult.characters.results,
                            ...fetchMoreResult.characters.results
                        ]
                    }
                };
            }
        })
    };

    return (
        <div className="list-container">
            <div className="">
                {data.characters.results.map((character) => (
                    <CharacterCard key={character.id} character={character}/>
                ))}
            </div>
            {data.characters.info.next && (
                <button
                    onClick={handleLoadMore}
                    className="load-more-btn"
                >
                    {t("loadMore")}
                </button>
            )}
        </div>
    );
};
