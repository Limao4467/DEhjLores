(function () {
  const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

  function validarSenha(senha) {
    return typeof senha === 'string' && /^\d{6}$/.test(senha.trim());
  }

  if (isBrowser) {
    window.salvarNome = function salvarNome() {
      const nomeInput = document.getElementById('nome');
      if (!nomeInput) {
        console.warn('Campo de nome foi não encontrado.');
        return;
      }

      const nome = nomeInput.value.trim();
      if (!nome) {
        alert('Insira seu nome antes de continuar.');
        return;
      }

      alert('Nome salvo com sucesso!');
    };

    window.salvarSenha = function salvarSenha() {
      const senhaInput = document.getElementById('senha');
      if (!senhaInput) {
        console.warn('Campo de senha não encontrado.');
        return;
      }

      const senha = senhaInput.value.trim();
      if (!validarSenha(senha)) {
        alert('A senha deve conter no maximo 6 números.');
        return;
      }

      alert('sua senha foi salva com sucesso!');
    };

    return;
  }

  if (typeof require === 'function') {
    const express = require('express');
    const mysql = require('mysql');

    const app = express();
    app.use(express.json());

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'seu_usuario',
      password: 'sua_senha',
      database: 'seu_banco_de_dados'
    });

    connection.connect((err) => {
      if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
      }
      console.log('Conectado ao MySQL.');
    });

    app.post('/salvar-acao', (req, res) => {
      const { nome, acao } = req.body;

      if (!nome || !acao) {
        return res.status(400).send('Nome e ação são obrigatórios.');
      }

      const sql = 'INSERT INTO acoes_usuario (nome, acao) VALUES (?, ?)';
      connection.query(sql, [nome, acao], (err) => {
        if (err) {
          console.error('Erro ao inserir dados:', err);
          return res.status(500).send('Erro ao salvar dados.');
        }

        return res.status(201).send('Dados salvos!');
      });
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log('Servidor rodando na porta ' + port);
    });

    if (typeof module !== 'undefined') {
      module.exports = app;
    }
  }
})();

