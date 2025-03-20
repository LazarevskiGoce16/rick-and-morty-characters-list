import { I18nextProvider, useTranslation } from "react-i18next";
import { ApolloProvider } from "@apollo/client";
import { CharacterList } from "./components/CharacterList";
import { useState } from "react";
import { Filters } from "./components/Filters";
import { Footer } from "./components/Footer";
import i18n from "./i18n";
import client from "./services/apolloClient";
import "./styles.css";

const App = () => {
    const { t } = useTranslation();
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");

    return (
        <ApolloProvider client={client}>
            <I18nextProvider i18n={i18n}>
                <div className="App">
                    <div className="header-container">
                        <h1>{t("title")}</h1>
                        <Filters setStatus={setStatus} setSpecies={setSpecies}/>
                    </div>
                    <CharacterList status={status} species={species}/>
                    <Footer />
                </div>
            </I18nextProvider>
        </ApolloProvider>
    );
};

export default App;
