
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_do_db', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql' 
});

module.exports = sequelize;   //*ta parecendo que peguei no gpt ksksksksk*//


  document.body.innerHTML =' <h1>Bem-vindo ao nosso site!</h1>'

let h3= document.createElement('h3');
h3.textContent = 'Escolha uma senha segura:';
document.body.appendChild(h3);

let label = document.createElement('label');
label.setAttribute('for', 'senha');
label.textContent = 'Insira (mínimo 6 dígitos):';
document.body.appendChild(label);

let input = document.createElement('input'); //*mdssssssss*//
input.setAttribute('type', 'number');
input.setAttribute('id', 'senha');
input.setAttribute('name', 'senha');
input.setAttribute('placeholder', 'Insira sua senha aqui');
document.body.appendChild(input);

let button = document.createElement('button');
button.textContent = 'Enviar';
document.body.appendChild(button);

button.addEventListener('click', function() {
    let senha = input.value;
    if (senha.length === 6) {
      numberSenha = parseInt(senha);  
        alert('concluido!.');
    } else {
        alert('A senha deve ter apeanas numeros!.');
    }
let h4 = document.createElement('h4');
h4.textContent = '';
document.body.appendChild(h4);
const   express = require('express');
const  mysql = require('mysql'); 
const app= express();

app.use(express.json());

const connection= mysql.escolaPP({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
    database: 'seu_banco_de_dados'
});
app.post('/salvar-acao', (req, res) => {
  const { nome, acao } = req.body;
  const sql = 'INSERT INTO acoes_usuario (nome, acao) VALUES (?, ?)';
  
   connection.query(sql, [nome, acao], (err, results) => {
    if (err) {
      res.status(400).send('Erroooooooooo');
  } else {
      res.status(100).send('Dados salvos!');
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});


});

