import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    // banco de dados do Mirage
    transaction: Model, // transaction e o nome da tabela
  },
  routes() {
    // rotas que vão ser usadas na api ficticia
    this.namespace = "api"; // todas as chamadas foram feitas apartir de api

    this.get("/transactions", () => {
      // rota ('https://localhosts:3000/api/transactions')...
      // definição da informação de retorno
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
