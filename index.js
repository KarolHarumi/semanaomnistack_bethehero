const express = require('express');

const app = express();

app.use(express.json());

/** 
 * MetodoS HTTP
 * 
 * get: busca uma informacao
 * post: cria uma informacao
 * put: altera uma informacao
 * delete: deleta uma informacao
 * 
 **/

 /**
  * Tipos de parametros
  * 
  * Query Params: parametros nomeados enviados na roda apos ? serve para filtros, paginacao, etc
  * Routes Params: para identificar recursos, um unico recurso (:id)
  * Request Body: corpo da requisicao, para criar ou alterar recursos
  * 
**/

app.post('/users', (request, response) => {

    const params = request.query;

    console.log(params);

    //return response.send('Hello World');
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Karol Harumi'
    });

});
app.listen(3333);