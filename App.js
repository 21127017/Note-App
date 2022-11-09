import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Note from './components/task';

export default function App() {
  const [note, setNote] = useState();
  const [noteItems, setNoteItems] = useState([]);
  const AddTask = () =>{
    setNoteItems([...noteItems, note])
    setNote(null);
  }
  const deleteNote =(index) =>{
    let itemsCopy = [...noteItems];
    itemsCopy.splice(index, 1);
    setNoteItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      <View style = {styles.nameContain}>
        <View style = {styles.titles}>
          <Text style = {styles.title}>Ghi Chu</Text>
        </View>
        {
          noteItems.map((items, index) => {
            return (
            <TouchableOpacity key={index} onPress={() => deleteNote(index)}>
              <Note text={items}/>
            </TouchableOpacity>
            )
          })
        }

      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style = {styles.keyboardView}
      >
        <TextInput 
          style={styles.textInput} placeholder={'Nhap van ban ...'} 
          onChangeText={text => setNote(text)} 
          clearButtonMode="always"
        />

        <TouchableOpacity onPress={() => AddTask()}>
          <View>
            <Image 
            source={require('./assets/send.png')}
            style={styles.send}
            />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContain: {
    height: "100%",
    width: "100%",
  },
  titles: {
    marginTop: "20%",
    marginLeft: "5%",
    marginBottom: '5%',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    fontWeight: 'bold',
    //color: 'white'
  },
  keyboardView: {
    bottom: 60,
    flexDirection: 'row'
  },
  textInput: {
    paddingLeft: 15,
    //margin: 15,
    borderWidth: 0.2,
    width: 290,
    backgroundColor: '#E2F0FF',
    borderRadius: 30,
    alignItems: 'center'
  },
  send: {
    //margin: 15,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center'
  },
});
