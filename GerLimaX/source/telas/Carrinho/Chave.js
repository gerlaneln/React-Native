import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Texto from '../../components/Texto.js';

export default function Chave({chave:{ nomeChave, imagemChave }}){
    return <>
        <View style={estilo.chave} key={nomeChave}>
            <Texto style={estilo.nome}>{nomeChave}</Texto>
            <Image style={estilo.imagem} source={imagemChave} />
        </View>
    </>;
}

const estilo = StyleSheet.create({
    chave:{
        flexDirection:"row",
        borderBottomWidth: 1,
        borderBottomColor:"#ececec",
        paddingVertical: 15,
        alignItems:"center" 
    },
    imagem:{
        width: 50,
        height: 50
    },
    nome:{
        fontSize: 18,
        color: "#464646",
        marginLeft: 15,
        lineHeight: 25
    }
})