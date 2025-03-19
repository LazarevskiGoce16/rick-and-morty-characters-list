import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import CharacterList from "./components/CharacterList";
 
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Rick and Morty Characters</h1>
        <CharacterList />
      </div>
    </ApolloProvider>
  );
};

export default App;
