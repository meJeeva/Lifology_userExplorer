import { Dimensions } from "react-native";

const DIM = {
    deviceWidth: Math.round(Dimensions.get("window").width),
    deviceHeight: Math.round(Dimensions.get("window").height),
}


export {
    DIM
}