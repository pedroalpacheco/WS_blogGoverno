/**
 * Objetivo
 * titulo: Parque Nacional de Brasília receberá recursos para melhorar infraestrutura
 * linkimg: https://www.gov.br/pt-br/noticias/transito-e-transportes/2020/07/parque-nacional-de-brasilia-recebera-recursos-para-melhorar-infraestrutura/205_parna_brasilia_semdata-fill-800x501.jpg/@@images/af67d574-401e-48b9-a0d2-85ca7d362e98.jpeg
 * datapublicacao: 30/07/2020 19h43
 * texto: Parque Nacional de Brasília receberá investimentos para trazer mais conforto aos visitantes...
 */

const axios = require('axios');
const cheerio = require('cheerio');

//const urlfilho = 'https://www.gov.br/pt-br/noticias/transito-e-transportes/2020/07/parque-nacional-de-brasilia-recebera-recursos-para-melhorar-infraestrutura';
const urlfilho = 'https://www.gov.br/pt-br/noticias/trabalho-e-previdencia/2020/07/novas-regras-para-o-trabalho-remoto-sao-anunciadas-pelo-governo'

axios.get(urlfilho)
.then(resp=>{
    const dadoshtml = resp.data;
    const $ = cheerio.load(dadoshtml);
    const titulo = $('h1').text();
    const linkimg = $('img').attr('src');
    const datapublicacao = $('span[class="value"]').text();
    const texto = $('div[property="rnews:articleBody"]').text();

    const dados = {titulo,linkimg,datapublicacao,texto}

    console.log(dados);
})