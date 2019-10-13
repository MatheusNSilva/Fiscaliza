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
    var descricaoUrl = encodeURI(this.state.descricaoUrl);
    var paginaUrl = encodeURI(1);
    var uri = "http://www.transparencia.gov.br/api-de-dados/orgaos-siafi"+
      "?descricao="+descricaoUrl+
      "&pagina="+paginaUrl;
    fetch(uri)
        .then( response => response.json())
        .then( responseJson => {
          console.log(responseJson)
          this.setState({ listagem: responseJson})
        });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { descricaoUrl, listagem, codigo } = this.state;
    return (
      <View style={styles.container}>
        <Text>descricao</Text>
        <TextInput
          onChangeText={text => this.setState({ descricaoUrl: text })}
          value={descricaoUrl}
        />
        <FlatList
          data={this.state.listagem}
           renderItem={({item}) =>
            <TouchableOpacity onPress={ () => navigate('descricao_orgao', {orgaoCodigo: item.codigo, orgaoDescricao: item.descricao})}>
              <View>
                <Text style={styles.item}> 
                  {item.listagem, item.codigoDescricaoFormatado}
                
                </Text>
              </View>
             
            </TouchableOpacity>
           }/>
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
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
})