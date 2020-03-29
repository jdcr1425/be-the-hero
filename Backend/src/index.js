const express = require('express');
const cors = require('cors');
const routes = require('./Routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota/Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: buscar/listar uma informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: alterar uma informacao no back-end
 * DELETE: Deletar uma informacao do back-end
 *  */

 /**
  * Tipos de parametros :
  * 
  * Query: parametros nomeados enviados na rota apos o "?" (Filtros, paginacao)
  * Route params : Parametros utilizados para identificar recursos
  * Request body: corpo da requisicao, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLlite, PostgresSQL, Oracle, MS SQL server
   * NoSQL: MongoDB, CouchDb, etc
   */

   /**
    * Comunicacao com o banco de dados:
    * 
    * Driver: Select * from users
    * Query Builder: table('users').select('*').where
    */

app.listen(3333);