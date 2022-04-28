import topo from '../../assets/topo.png';

import logoVendedor from '../../assets/logo.png';

import antena2g from '../../assets/Itens/antena2g3g.png';
import antenaWifi from '../../assets/Itens/antenaWifi.png';
import modem from '../../assets/Itens/modem.png';
import node from '../../assets/Itens/nodeMcu.png';

import chaveFenda from '../../assets/Itens/chaveFenda.jpg';
import chaveBoca from '../../assets/Itens/chaveBoca.png';
import chaveAllen from '../../assets/Itens/chaveAllen.png';
import chaveInglesa from '../../assets/Itens/chaveInglesa.png';

const carrinho = {
    topo:{
        titulo:"Carrinho",
        imagem: topo
    },
    detalhes:{
        titulo:"Detalhes do Carrinho",
        tituloProduto: "Kit IoT",
        descricao: "Um kit IoT que revoluciona a vida dos estudantes",
        logoVendedor: logoVendedor,
        nomeVendedor: "Nuvem's Shopping",
        preco: "R$ 99,00"
    },
    itens:{
        titulo: "Itens do Carrinho",
        lista:[
            {
               nome: "Antena 2g/3g",
               imagem: antena2g 
            },
            {
                nome: "Antena WiFi",
                imagem: antenaWifi
            },
            {
                nome: "Modem",
                imagem: modem
            },
            {
                nome: "Node MCU",
                imagem: node
            }
        ]
    },
    chave:{
        tituloChave: "Chaves",
        descricaoChave: "Incluso na compra para facilitar instação.",
        lista:[
            {
                nomeChave: "Chave de fenda",
                imagemChave: chaveFenda
            },
            {
                nomeChave: "Chave de Boca",
                imagemChave: chaveBoca
            },
            {
                nomeChave: "Chave Allen",
                imagemChave: chaveAllen
            },
            {
                nomeChave: "Chave Inglesa",
                imagemChave: chaveInglesa
            }
        ]
    }
}

export default carrinho;