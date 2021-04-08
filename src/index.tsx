import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import "./index.css";
import App from "./App";

const client = new ApolloClient({
  uri: "https://spacexdata.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
