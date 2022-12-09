const axios = require('axios');
const cheerio = require('cheerio');

const urlpai = 'https://www.gov.br/pt-br/noticias';

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

            console.log(dados);
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

    async function main(){
        const lnks = await links;
        lnks.map((i,e)=>{
            extraidados(i);
        })
    };

    main();
