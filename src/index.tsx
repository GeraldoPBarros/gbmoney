import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    // banco de dados do Mirage
    transaction: Model, // transaction e o nome da tabela
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-03-12 09:20:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1100,
          createdAt: new Date("2021-02-14 11:43:00"),
        },
      ],
    });
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
