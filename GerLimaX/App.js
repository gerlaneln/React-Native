import {
  StatusBar, StyleSheet, SafeAreaView, View, ScrollView, FlatList
} from 'react-native';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Mocks from './source/mocks/carrinho.js';

import Texto from './source/components/Texto.js'
import Topo from './source/telas/Carrinho/Topo';
import Detalhes from './source/telas/Carrinho/Detalhes';
import Item from './source/telas/Carrinho/Item.js';
import Chave from './source/telas/Carrinho/Chave.js';

export default function App() {

  let[fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={Mocks.itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={
          () => {
            return <>
              <Topo {...Mocks.topo} />

              <Detalhes {...Mocks.detalhes} />

              <Texto style={styles.titulo}>
                {Mocks.itens.titulo}
              </Texto>
              
            </>
          }
        }
        
        ListFooterComponent={
          () => {
            return <>
              <Texto style={styles.tituloChave}>
                {Mocks.chave.tituloChave}
              </Texto>
              <Texto style={styles.descricaoChave}>
                {Mocks.chave.descricaoChave}
              </Texto>
              <FlatList
                data={Mocks.chave.lista}
                renderItem={Chave}
                keyExtractor={({ nomeChave }) => nomeChave}
              />
            </>
          }
        }
      />

      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo:{
    color:"#ffa500",
    fontWeight:"bold",
    marginTop: 30,
    marginBottom: 30,
    fontSize: 25
  },
  tituloChave:{
    color:"#cc8500",
    fontWeight:"bold",
    marginLeft: 50,
    marginTop: 30,
    marginBottom: 5,
    fontSize: 25
  },
  descricaoChave:{
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 60
  }
});
