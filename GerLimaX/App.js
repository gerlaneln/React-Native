import {
  Image, StatusBar, StyleSheet, Text, SafeAreaView,
  Dimensions, View
} from 'react-native';

import Topo from './source/telas/Carrinho/Topo';
import Detalhes from './source/telas/Carrinho/Detalhes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Topo/>

      <Detalhes/>

      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
