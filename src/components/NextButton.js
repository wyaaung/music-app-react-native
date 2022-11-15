import * as React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {View, TouchableOpacity, Text} from "react-native";
import {FontSize, Colors} from "../constants/constants";

export default NextButton = ({onPressButton, disableStatus, InputText}) => {
    return (
        <TouchableOpacity
            style={{width: "100%", paddingHorizontal: 15}}
            onPress={onPressButton}
            disabled={disableStatus}
        >
            <View
                style={{
                    ...styles.nextButtonStyle,
                    backgroundColor: !disableStatus
                        ? Colors.whiteColor
                        : Colors.greyColor,
                }}
            >
                <Text
                    maxFontSizeMultiplier={1.2}
                    adjustsFontSizeToFit
                    style={styles.nextButtonText}
                >
                    {InputText}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = EStyleSheet.create({
    nextButtonStyle: {
        borderRadius: "0.313rem",
        width: "100%",
        minHeight: "3.5rem",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f3ff",
    },
    nextButtonText: {
        fontSize: FontSize.buttonText,
        letterSpacing: -0.5,
        fontFamily: "Arial",
    },
});
