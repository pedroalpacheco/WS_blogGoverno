const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const blog = require('./schema-blog');

const urlpai = 'https://www.gov.br/pt-br/noticias/ultimas-noticias?b_start:int=0';

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

function salvandodados(dt) {
    const novodado = new blog({
        titulo: dt.titulo,
        linkimg: dt.linkimg,
        datapublicacao: dt.datapublicacao,
        texto: dt.texto
    })
    blog.find({ 'titulo': dt.titulo }, function (err, otitulo) {
        if (err) throw (err);
        if (otitulo.length === 0) {
            novodado
                .save();
            console.log('Dados NÃO CADASTRADO!')
        } else {
            console.log('Dado JÁ CADASTRADO!');
        }
    });

}

function extraidados(link) {
    axios.get(link)
        .then(resp => {
            const dadoshtml = resp.data;
            const $ = cheerio.load(dadoshtml);
            const titulo = $('h1').text();
            const linkimg = $('img').attr('src');
            const datapublicacao = $('span[class="value"]').text();
            const texto = $('div[property="rnews:articleBody"]').text();

            const dados = { titulo, linkimg, datapublicacao, texto }

            //console.log(dados);
            salvandodados(dados);
        });
};

const links = axios.get(urlpai)
    .then(resp => {
        const dadoshtml = resp.data;
        const $ = cheerio.load(dadoshtml);
        const dados = []
        $('a[class="summary url"]').each((i, e) => {
            const link = $(e).attr('href');
            //console.log(link)
            dados.push(link)
        });
        //console.log(dados);
        return dados
    });

async function main() {
    const lnks = await links;
    lnks.map((i, e) => {
        extraidados(i);
    })
};

main();

setTimeout(() => {
    mongoose.connection.close();
    console.log('Fechando conexões!');
}, 25000);