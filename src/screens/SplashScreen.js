import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Images } from '../constants/Images';
import { DIM } from '../constants/Dimesions';
import { Colors } from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen')
    }, 3000);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.white
      }}
    >
      <View style={{
        flex: 0.6,
        alignItems: 'center',
      }}>
        <Image
          source={Images.splashImg}
          style={{
            resizeMode: 'contain',
            height: DIM.deviceHeight * 0.4,
            width: DIM.deviceHeight * 0.4,
          }}
        />
        <Text style={
          {
            fontFamily: 'Montserrat-Bold',
            fontSize: DIM.deviceHeight * 0.05,
            marginBottom: DIM.deviceHeight * 0.02
          }
        }>USYLIST</Text>
        <View style={{
          borderWidth: 0.5,
          borderColor: '#b3d9ff',
          marginVertical: 10,
          width: DIM.deviceWidth * 0.8
        }} />
      </View>
      <View style={{
        flex: 0.1
      }}>
        <View style={{
          backgroundColor: Colors.black,
          width: DIM.deviceWidth * 0.8,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 9,
          height: DIM.deviceHeight * 0.1
        }}>
          <Image
            source={Images.logoImg}
            style={{
              resizeMode: 'contain',
              height: DIM.deviceHeight * 0.2,
              width: DIM.deviceHeight * 0.2,
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default SplashScreen

const styles = StyleSheet.create({})