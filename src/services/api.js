import { gql } from "@apollo/client";
import client from "./apolloClient";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $name: String, $status: String, $species: String, $origin: String) {
  characters(page: $page, name: $name, status: $status, species: $species, origin: $origin) {
    info {
      pages
      next
      prev
    }
    results {
      id
      name
      status
      species
      origin {
        name
      }
      image
    }
  }
}`;

export const fetchCharacters = async (variables) => {
    try {
        const { data } = await client.query({
            query: GET_CHARACTERS,
            variables,
        });
        return data.characters;
    } catch (error) {
        console.error("Error fetching characters:", error);
        throw error;
    }
};
