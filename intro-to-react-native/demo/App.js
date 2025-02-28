import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Card from './Card.js';
import { useState } from 'react'

export default function App() {
  const [LAvotes, setLAvotes] = useState(0);
  const [SFvotes, setSFvotes] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.headlineStyle}>Cities in California</Text>
      <Card ImageLink="https://cdn.pixabay.com/photo/2019/12/05/05/50/san-francisco-4674350_1280.jpg" City="San Francisco" Location="Northern California" Population="800 thousand" Votes={SFvotes}></Card>
      <Card ImageLink="https://cdn.pixabay.com/photo/2014/04/04/22/36/los-angeles-314006_1280.jpg" City="Los Angeles" Location="Southern California" Population="3.8 million" Votes={LAvotes}></Card>
      <Text style={styles.questionStyle}>Which city is the best?</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonStyle}><Button onPress={() => setSFvotes(SFvotes + 1)} title="SF"></Button></View>
        <View style={styles.buttonStyle}><Button onPress={() => setLAvotes(LAvotes + 1)}title="LA"></Button></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStyle: {
    borderWidth: 5,
    width: 350,
    height: 300,
    marginBottom: 16,
    backgroundColor: "lightgrey",
    borderRadius: 62
  },
  imageStyle: {
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    width: "100%",
    height: "55%"
  },
  headlineStyle: {
    fontSize: 46,
    fontWeight: 700,
    marginBottom: 16
  },
  cityInfo: {
    fontSize: 20,
    fontWeight: 400,
    paddingLeft: 14
  },
  cityName: {
    fontSize: 26,
    fontWeight: 600,
    paddingLeft: 14,
    paddingTop: 10
  },
  buttonStyle: {
    width: 80,
    height: 40,
    backgroundColor: "yellow",
    borderRadius: 60,
    margin: 10
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row"
  },
  questionStyle: {
    fontSize: 30
  }
});
