const axios = require('axios');
const cheerio = require('cheerio');

const urlpai = 'https://www.gov.br/pt-br/noticias/ultimas-noticias?b_start:int=0';

axios.get(urlpai)
.then(resp=>{
    const dadoshtml = resp.data;
    const $ = cheerio.load(dadoshtml);
    const dados = []
    $('a[class="summary url"]').each((i,e)=>{
        const link = $(e).attr('href');
        //console.log(link)
        dados.push(link)
    });
    console.log(dados);
});