import * as React from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, FlatList, TouchableOpacity, TextInput } from 'react-native';

export default class Orgaos_FederaisScreen extends React.Component {
  static navigationOptions = {
    title: 'Listagem de Orgãos Federais',
  };
 
  constructor(props){
    super(props);
    this.state = { isLoading: true, listagem : [] }
  }
 
  procurar_orgao_publico(){
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      var descricaoUrl = encodeURI(this.state.descricao);
      var paginaUrl = encodeURI(this.state.pagina);
      var uri = "http://www.transparencia.gov.br/api-de-dados/orgaos-siafi"+
        "?descricao="+descricaoUrl+
        "&pagina="+paginaUrl;
      fetch(uri)
          .then( response => response.json())
          .then( responseJson => {
            this.setState({ listagem: responseJson.map(orgaos => orgaos.descricao)})
          });
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { descricaoUrl } = this.state;
    return (
      <View style={styles.container}>
        <Text>descricao</Text>
        <TextInput
          onChangeText={text => this.setState({ descricaoUrl: text })}
          value={descricaoUrl}
        />
        <Text>{JSON.stringfy(this.state.listagem)}</Text>
        <Button title="Pesquisar" onPress={() => this.procurar_orgao_publico()} />
        <Button title="Voltar" onPress={() => navigate('Home')} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  }
})