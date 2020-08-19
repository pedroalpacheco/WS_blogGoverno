const mongoose = require('mongoose');
const blog = require('./schema-blog');

//const frase = 'Internet gratuita será oferecida a estudantes de baixa renda de universidades e institutos federais';
const frase = 'çjsangfanfn jsadkjf osadf sadpfa sdf'

mongoose.connect('mongodb+srv://admin:JHhyh9$gf@cluster0-4y0n5.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(result => {
        console.log('Conexão funcionando!')
    })
    .catch(error => {
        console.log('Deu problema!' + error)
    });

    blog.find({'titulo':frase}, function(err, otitulo){
        if(err) throw(err);
        if(otitulo.length===0){
            console.log('Dados NÃO CADASTRADO!')
        }else{
            console.log('Dado JÁ CADASTRADO!');
        }
    });

    setTimeout(()=>{
        mongoose.connection.close();
        console.log('Fechando conexões!');
    }, 25000);