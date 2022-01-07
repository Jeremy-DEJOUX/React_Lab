import { StyleSheet, Dimensions, Text, View, Image, SafeAreaView, Alert, Platform, StatusBar, Button } from 'react-native';

export default function App() {
  // const handlePress = () => {
  //   console.log("Bienvenue sur notre gestionnaire d'èvenement");
  // }
  console.log(Dimensions.get('window'));
  return (
    <SafeAreaView style={styles.container}>

        <View style={{ backgroundColor: 'black', flex: 1.5 }} >
          <Text style={{ color: 'white' }}>Location</Text>
        </View>

        <View style={{ backgroundColor: 'green',flex: 2}}>
          <View style={{ backgroundColor: 'white',flex: 1}} />
          <View style={{ backgroundColor: 'pink',flex: 1}} />
        </View>

        <View style={{ backgroundColor: 'yellow', flex: 0.2}}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});
