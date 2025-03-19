import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

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
            gender
            origin {
                name
            }
            image
        }
    }
}
`;

const CharacterList = ({ status, species }) => {
    const [page, setPage] = useState(1); // we can remove setPage because it's not needed
    const { loading, error, data, fetchMore } = useQuery(CHARACTERS_QUERY, {
    variables: { page, status, species }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  const handleLoadMore = () => {
    // const nextPage = page + 1;
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
    // .then(() => {
    //     setPage(nextPage);
    // });
  };

  return (
    <div className="list-container">
        <div className="">
            {data.characters.results.map((character) => (
                // this should be a separate card component
                <div className="">
                <img src={character.image} alt={character.name} className="" />
                <h2 className="">{character.name}</h2>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin.name}</p>
              </div>
            ))}
        </div>
        {data.characters.info.next && (
            <button
                onClick={handleLoadMore}
                className="load-more-btn"
            >
                Load More
            </button>
        )}
    </div>
  );
};

export default CharacterList;