const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const { engine } = require("express-handlebars");
const livrosRotas = require("./routes/livrosrotas");
const adminRotas = require("./routes/admin");
const sequelize = require("./config/bd");

const app = express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", engine({ defaultLayout: false }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRotas);

app.get("/", (req, res) => {
  res.render("livros/home");
});

app.use("/livros", livrosRotas);

const PORT = process.env.PORT || 3000;

async function conectarBD() {
  try {
    await sequelize.sync();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (erro) {
    console.error("Erro ao conectar:", erro);
  }
}

if (require.main === module) {
  conectarBD();
}

module.exports = { app, conectarBD };
