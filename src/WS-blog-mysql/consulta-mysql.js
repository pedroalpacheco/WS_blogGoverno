const mysql = require('mysql');

//const titulo = 'Programa de combate à Covid-19 conta com mais de 1 milhão de profissionais';
const titulo = 'kçoahngashdf sçoasdjhgaof'

const pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'admin',
    password:'123456',
    database:'blog'
});

const consulta = (msg)=>{
    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query('select * from `noticias` where `titulo` = ?',msg, function(error,result,fields){
            let countresult = result.length
            if(countresult===0){
                console.log('TITULO NÃO CADASTRADO!');
            }else{
                console.log('Titulo cadastrado!')
            }
            if(error) throw error;
        });
    })
};
consulta(titulo);