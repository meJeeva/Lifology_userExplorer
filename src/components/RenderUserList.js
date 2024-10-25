import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { DIM } from '../constants/Dimesions'
import { Images } from '../constants/Images';
import { useNavigation } from '@react-navigation/native';

const RenderUserList = React.memo(({ item, index }) => {

    const navigation = useNavigation();

    const ifMale = item.gender.toLowerCase() === "male";
    const checkRole = (role) => role.toLowerCase() === 'admin' ? Colors.red : role.toLowerCase() === 'user' ? Colors.blue : Colors.sandal

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("UserPostScreen",{
        userDetails : item
      })}
      key={index}
      style={{
        backgroundColor: Colors.white,
        margin: DIM.deviceHeight * 0.01,
        padding: DIM.deviceHeight * 0.01,
        borderRadius: 8,
        elevation: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: DIM.deviceWidth * 0.05,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            height: DIM.deviceHeight * 0.06,
            width: DIM.deviceHeight * 0.06,
            resizeMode: "contain",
          }}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: DIM.deviceWidth * 0.02,
            }}
          >
            <Text
              style={{
                fontSize: DIM.deviceHeight * 0.018,
                fontWeight: "500",
                fontFamily: "Montserrat-Regular",
              }}
            >
              {item.firstName} {item.lastName}
            </Text>
            <Image
              source={ifMale ? Images.male : Images.female}
              style={{
                height: DIM.deviceHeight * 0.022,
                width: DIM.deviceHeight * 0.022,
                tintColor: ifMale ? Colors.blue : Colors.pink,
              }}
            />
          </View>
          <View
            style={{
              marginTop: DIM.deviceHeight * 0.01,
              flexDirection: "row",
              alignItems: "center",
              gap: DIM.deviceHeight * 0.007,
            }}
          >
            <Image
              source={Images.email}
              style={{
                height: DIM.deviceHeight * 0.02,
                width: DIM.deviceHeight * 0.02,
                tintColor: Colors.black,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontSize: DIM.deviceHeight * 0.015,
                fontFamily: "Montserrat-Regular",
              }}
            >
              {item.email}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: DIM.deviceHeight * 0.005,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: DIM.deviceHeight * 0.007,
              }}
            >
              <Image
                source={Images.phone}
                style={{
                  height: DIM.deviceHeight * 0.02,
                  width: DIM.deviceHeight * 0.02,
                  tintColor: Colors.black,
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{
                  fontSize: DIM.deviceHeight * 0.015,
                  fontFamily: "Montserrat-Regular",
                }}
              >
                {item.phone}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: item.role ? checkRole(item.role) : Colors.white,
          padding: 2,
          paddingHorizontal: DIM.deviceWidth * 0.02,
          borderTopLeftRadius: 8,
          position: "absolute",
          bottom: 0,
          right: 0,
          elevation: 5,
          borderBottomRightRadius: 8,
          width: DIM.deviceWidth * 0.22,
        }}
      >
        <Text
          style={{
            color: Colors.white,
            textAlign: "center",
            fontFamily: "Montserrat-Regular",
            fontSize: DIM.deviceHeight * 0.015,
          }}
        >
          {item.role}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

export default RenderUserList

const styles = StyleSheet.create({})