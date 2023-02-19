import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const artInstituteImage = require('./images/art.png');
const magnificentMileImage = require('./images/mile.png');
const navyPierImage = require('./images/pier.png');
const waterTowerImage = require('./images/water.png');
const willisTowerImage = require('./images/willis.png');

function ArtInstituteScreen(){
  return (
  <View style={styles.container}>
    <Image style={styles.imageContainer} source={artInstituteImage} />
  </View>
  );
}

function MagnificentMileScreen(){
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={magnificentMileImage} />
    </View>
  );
}

function NavyPierScreen(){
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={navyPierImage} />
    </View>
  );
}

function WaterTowerScreen(){
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={waterTowerImage} />
    </View>
  );
}

function WillisTowerScreen(){
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={willisTowerImage} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="ArtInstitute"
        screenOptions={styles.headerContainer}>
        <Drawer.Screen name="ArtInstitute" component={ArtInstituteScreen} 
          options={{title: 'Art Institute of Chicago'}}
        />
        <Drawer.Screen name="MagnificentMile" component={MagnificentMileScreen}
          options={{title: 'Magnificent Mile'}}
        />
        <Drawer.Screen name="NavyPier" component={NavyPierScreen} 
          options={{title: 'Navy Pier'}}
        />
        <Drawer.Screen name="WaterTower" component={WaterTowerScreen} 
          options={{title: 'Water Tower'}}
        />
        <Drawer.Screen name="WillisTower" component={WillisTowerScreen} 
          options={{title: 'Willis Tower'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: 480,
    width: 320,
  },
  headerContainer: {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});
