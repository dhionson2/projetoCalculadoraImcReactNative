
import { StyleSheet, View } from 'react-native';
import Form from './src/components/form/from';
import Main from './src/components/Main/main';
import Titulo from './src/components/title/title';



export default function App() {
  return (
    <View style={styles.container}>
        <Titulo/>
       <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12E08E',
    paddingTop: 50,
    borderRadius: 30,

  },
});
