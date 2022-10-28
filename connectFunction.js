  function establishConnection(host, user, password, database){
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: host,
        user:user,
        password: password,
        database: database
        }
    );
    connection.connect;

  
  }

  function insertSituacao(idSituacao, ativo){
    var sitch ={
      idSituacao: idSituacao,
      ativo: ativo
    }

    var query = connection.query('insert into situacao set ?', sitch, function (err, result) {
      if (err) {
        console.error(err);
        return;
      }
      console.error(result);
    });
  }


  function insertProduto(idproduto, nome, ncm, valor, estoque, Situacao_idSituacao){
    var produto ={
      idproduto: idproduto,
      nome: nome,
      ncm: ncm,
      valor: valor,
      estoque: estoque,
      Situacao_idSituacao: Situacao_idSituacao
    }
  
    var query = connection.query('insert into produto set ?', produto, function (err, result) {
      if (err) {
        console.error(err);
        return;
      }
      console.error(result);
    });
  
    }

    function deleteProduto(idproduto){
      var produto ={
        idproduto: idproduto
      }
      var query = connection.query('delete from produto where idproduto = ?', idproduto, function (err, result){
          if (err) {
        console.error(err);
        return;
      }
      console.error(result);
    });
  }