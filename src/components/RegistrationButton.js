import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {View, TouchableOpacity, Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default RegistrationButton = ({IconName, InputText}) => {
    return (
        <TouchableOpacity style={styles.registerButtonContainer}>
            <View style={styles.iconWrapper}>
                <Ionicons name={IconName} size={24} color="white" />
            </View>
            <View style={styles.btnTextWrapper}>
                <Text
                    maxFontSizeMultiplier={1.2}
                    adjustsFontSizeToFit
                    style={styles.registrationTextStyle}
                >
                    {InputText}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = EStyleSheet.create({
    registerButtonContainer: {
        marginTop: 12,
        width: "100%",
        justifyContent: "flex-start",
        height: 50,
        flexDirection: "row",
        borderRadius: 25,
        borderColor: "#000",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "white",
    },
    iconWrapper: {
        position: "absolute",
        top: 0,
        left: 15,
        right: 0,
        bottom: 0,
        justifyContent: "center",
    },
    btnTextWrapper: {
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        alignSelf: "center",
    },
    registrationTextStyle: {
        color: "#FFF",
        fontSize: "0.875rem", //14px
        fontFamily: "Arial",
    },
});
