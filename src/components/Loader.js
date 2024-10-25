import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Images } from '../constants/Images'
import { DIM } from '../constants/Dimesions'

const Loader = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <FastImage
                source={Images.loaderGif}
                resizeMode={FastImage.resizeMode.contain}
                style={{
                    height: DIM.deviceHeight * 0.2,
                    width: DIM.deviceHeight * 0.2
                }}
            />
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({})