import { I18nextProvider, useTranslation } from "react-i18next";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { CharacterList } from "./components/CharacterList";
import { useState } from "react";
import { Filters } from "./components/Filters";
import { Footer } from "./components/Footer";
import i18n from "./i18n";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

const App = () => {
    const { t } = useTranslation();
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");

    return (
        <ApolloProvider client={client}>
            <I18nextProvider i18n={i18n}>
                <div className="App">
                    <h1>{t("title")}</h1>
                    <Filters setStatus={setStatus} setSpecies={setSpecies}/>
                    <CharacterList status={status} species={species}/>
                    <Footer />
                </div>
            </I18nextProvider>
        </ApolloProvider>
    );
};

export default App;
