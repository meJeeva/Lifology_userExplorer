import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { getPostByUserApi } from "../api/userDetailsApi";
import { Colors } from "../constants/Colors";
import { DIM } from "../constants/Dimesions";
import RenderUserPost from "../components/RenderUserPost";
import { Images } from "../constants/Images";
import Loader from "../components/Loader";

const UserPostScreen = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loader, setLoader] = useState(true);
  const route = useRoute();
  let data = route?.params?.userDetails || {};

  useEffect(() => {
    if (route?.params?.userDetails) {
      let userId = route.params.userDetails.id;

      getUserPostDetails(userId);
    }
  }, [route?.params?.userDetails]);

  const getUserPostDetails = async (userId, page) => {
    try {
      const response = await getPostByUserApi(userId, page);
      if (response) {
        setPost((prevPosts) => [...prevPosts, ...(response?.posts || [])]);
        setLimit(response.limit);
        setHasMore(response.total > (page + 1) * response.limit);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.log(error, "fetching user's post");
    } finally {
      setLoader(false);
    }
  };

  const handleLoadMore = () => {
    if (hasMore && !loader) {
      setLoader(true);
      getUserPostDetails(userId, page);
    }
  };



  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontFamily: "Montserrat-Regular",
          marginStart: DIM.deviceWidth * 0.02,
          textAlign: "center",
          marginVertical: DIM.deviceHeight * 0.01,
        }}
      >
        {data.firstName} {data.lastName}
      </Text>
      <ImageBackground
        source={
          data.gender.toLowerCase() === "male"
            ? Images.maleBgImg
            : Images.femaleBgImg
        }
        style={{
          height: DIM.deviceHeight * 0.15,
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            height: DIM.deviceHeight * 0.15,
          }}
        >
          <View
            style={{
              backgroundColor: Colors.white,
              padding: 3,
              borderRadius: 99,
              position: "absolute",
              bottom: -DIM.deviceHeight * 0.05,
              left: DIM.deviceWidth * 0.06,
            }}
          >
            <Image
              source={{ uri: data?.image }}
              style={{
                height: DIM.deviceHeight * 0.1,
                width: DIM.deviceHeight * 0.1,
                borderRadius: 99,
              }}
            />
          </View>
        </View>
      </ImageBackground>
      {loader && (
        <Loader />
      )}
      {!loader &&
        (post?.length > 0 ? (
          <View style={{
            flex: 1,
            marginTop: DIM.deviceHeight * 0.03
          }}>
            <FlatList
              data={post}
              renderItem={({ item, index }) => (
                <RenderUserPost
                  item={item}
                  index={index}
                  userImg={route?.params?.userDetails?.image || Images.user}
                />
              )}
              onEndReached={post.length > 1 ? handleLoadMore : null}
              keyExtractor={(item, index) => index.toString()}
              onEndReachedThreshold={0.5}
              ListFooterComponent={
                loader ? <ActivityIndicator size="large" /> : null
              }
              showsVerticalScrollIndicator={false}
              style={{
                padding: 16,
              }}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={Images.noPost}
              style={{
                height: DIM.deviceHeight * 0.55,
                width: DIM.deviceHeight * 0.55,
                resizeMode: "contain",
              }}
            />
          </View>
        ))}
    </View>
  );
};

export default UserPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
