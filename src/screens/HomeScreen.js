import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllUsersApi } from '../api/userDetailsApi';
import RenderUserList from '../components/RenderUserList';
import { Colors } from '../constants/Colors';
import { DIM } from '../constants/Dimesions';
import { Images } from '../constants/Images';
import Loader from '../components/Loader';
import useDataStore from '../stores/useDataStore';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const dataStore = useDataStore();

  useEffect(() => {
    getAllUserDetails();
  }, []);

  const getAllUserDetails = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await getAllUsersApi();
      if (response) {
        setLimit(response.limit);
        setUsers((prevUsers) => [...prevUsers, ...response.users]);
        dataStore.setData((prevUsers) => [...prevUsers, ...response.users]);
        setHasMore(response.total > (page + 1) * limit);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const handleLoadMore = () => {
    getAllUserDetails();
  };


  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: DIM.deviceWidth * 0.03,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Montserrat-Regular",
          }}
        >
          User List
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: DIM.deviceWidth * 0.01,
          }}
        >
          <Image
            source={Images.user}
            style={{
              height: DIM.deviceHeight * 0.025,
              width: DIM.deviceHeight * 0.025,
              resizeMode: "contain",
            }}
          />
          <Text
            style={{
              fontSize: DIM.deviceHeight * 0.02,
              fontFamily: "Montserrat-Regular",
            }}
          >
            {users ? users.length : 0}
          </Text>
        </View>
      </View>
      <View style={{
        flex: 1,

      }}>
        {loading && (
          <Loader />
        )}
        <FlatList
          data={users}
          renderItem={({ item, index }) => (
            <RenderUserList item={item} index={index} />
          )}
          onEndReached={handleLoadMore}
          keyExtractor={({ item, index }) => index?.toString()}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: DIM.deviceHeight * 0.01,
          }}
        />
      </View>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
})