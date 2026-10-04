import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function calculadoraIMC(){
  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}> Calculadora IMC </Text>
        </View>

        <View style={styles.inputsArea}>

            <View style={styles.weight}>
              <FontAwesome5 name="weight" size={32} color="black" />
              <Text style={styles.label}>Peso (Kg)</Text>
              <TextInput style={styles.input} placeholder='kg' keyboardType='numeric'/>
            </View>

            <View style={styles.height}>
              <MaterialCommunityIcons name="human-male-height" size={32} color="black"/>
              <Text style={styles.label}>Altura (m)</Text>
              <TextInput style={styles.input} placeholder='m' keyboardType='numeric'/>
            </View>

            <View style={{alignItems:'center', justifyContent:'space-around'}}>

            </View>

          </View>

          <View style={styles.result}>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Calcular</Text>
            </TouchableOpacity>
            <View style={{ alignItems:'center', justifyContent:'space-around'}}>
              <Text style={styles.resultText}>Seu IMC</Text>
              <Text style={styles.resultValue}>20</Text>
              <Text style={styles.resultClassification}>Classificação</Text>
              <Text style={styles.resultClassificationValue}>Peso ideal</Text>
            </View>

          </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#ECF0F1',
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize:30,
    fontWeight: 'bold'
  },
  inputsArea:{
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  height:{
    flex:0.5,
    alignItems:'center',
  },
  weight:{
    flex:0.5,
    alignItems:'center',
  },
  label:{
    fontSize:24,
    top:10,
  },
  input:{
    width:100,
    fontSize:22,
    top:14,
    textAlign:'center',
    borderBottomWidth:1
  },
  result:{
    flex:0.4,
    alignItems:"center"
  },
  button:{
    width: 150,
    backgroundColor: '#0047AB',
    padding:8,
  },
  btnText:{
    fontSize: 18,
    textAlign:'center',
    color: '#FFF',
  },
  resultText:{
    top:30,
    fontSize:34,
    fontWeight: 'bold',
  },
  resultValue:{
    fontSize: 30,
    top:30,
    color: '#0047AB'
  },
  resultClassification:{
    top:50,
    fontSize:24,
    fontWeight:'bold',
  },
  resultClassificationValue:{
    fontSize:30,
    top:50,
    color:'red'
  }
})