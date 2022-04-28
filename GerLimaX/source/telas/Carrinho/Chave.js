import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Texto from '../../components/Texto.js';

export default function Chave({item:{ nomeChave, imagemChave }}){
    return <>
        <View style={estilos.chave} key={nomeChave}>
            <Texto style={estilos.estiloLista}>-</Texto>
            <Image style={estilos.imagem} source={imagemChave} />
            <Texto style={estilos.nChave}>{nomeChave}</Texto>
        </View>

    </>;
}

const estilos = StyleSheet.create({
    chave:{
        flexDirection:"row",
        borderBottomWidth: 1,
        borderBottomColor:"#ececec",
        paddingVertical: 15,
        alignItems:"center"
    },
    imagem:{
        marginLeft: 10,
        width: 40,
        height: 40
    },
    nChave:{
        fontSize: 18,
        color: "#464646",
        marginLeft: 15,
        lineHeight: 25
    },
    estiloLista:{
        marginLeft: 90,
        fontSize: 30
    }
})