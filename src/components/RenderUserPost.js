import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { DIM } from "../constants/Dimesions";
import { Images } from "../constants/Images";

const RenderUserPost = React.memo(({ item, index, userImg }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        margin: DIM.deviceHeight * 0.01,
        padding: DIM.deviceHeight * 0.01,
        borderRadius: 6,
        elevation: 5,
      }}
    >
      <Text
        style={{
          fontFamily: "Montserrat-Bold",
          fontSize: DIM.deviceHeight * 0.018,
          marginStart: DIM.deviceWidth * 0.01,
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          padding: DIM.deviceHeight * 0.015,
          textAlign: "justify",
          lineHeight: DIM.deviceHeight * 0.023,
          fontFamily: "Montserrat-Regular",
        }}
      >
        {item.body}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            flex: 0.65,
          }}
        >
          {item.tags && item.tags.length > 0
            ? item.tags.map((tag, index) => (
                <Text
                  key={index}
                  style={{
                    color: Colors.blue,
                    marginEnd: DIM.deviceWidth * 0.015,
                    fontFamily: "Montserrat-Regular",
                  }}
                >
                  #{tag}
                </Text>
              ))
            : null}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 0.35,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: DIM.deviceWidth * 0.015,
            }}
          >
            <View
              style={{
                backgroundColor: Colors.blue,
                padding: DIM.deviceHeight * 0.005,
                borderRadius: 99,
              }}
            >
              <Image
                source={Images.like}
                style={{
                  height: DIM.deviceHeight * 0.02,
                  width: DIM.deviceHeight * 0.02,
                  resizeMode: "contain",
                  tintColor: Colors.white,
                }}
              />
            </View>
            <Text
              style={{
                fontFamily: "Montserrat-Regular",
              }}
            >
              {item.reactions.likes || 0}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: DIM.deviceWidth * 0.015,
            }}
          >
            <View
              style={{
                backgroundColor: Colors.red,
                padding: DIM.deviceHeight * 0.005,
                borderRadius: 99,
              }}
            >
              <Image
                source={Images.disLike}
                style={{
                  height: DIM.deviceHeight * 0.02,
                  width: DIM.deviceHeight * 0.02,
                  resizeMode: "contain",
                  tintColor: Colors.white,
                }}
              />
            </View>
            <Text
              style={{
                fontFamily: "Montserrat-Regular",
              }}
            >
              {item.reactions.dislikes || 0}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
});

export default RenderUserPost;

const styles = StyleSheet.create({});
