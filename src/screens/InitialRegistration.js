import React from "react";
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import EStyleSheet from "react-native-extended-stylesheet";
import {verticalScale} from "../utils/utils";
import RegistrationButton from "../components/RegistrationButton";

const InitialRegistration = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{alignSelf: "flex-end", marginTop: verticalScale(300)}}
            ></View>

            <View style={styles.buttonsWrapper}>

                {Platform.OS === "ios" ? (
                    <RegistrationButton
                        InputText="Continue with Apple"
                        IconName="logo-apple"
                    />
                ) : (
                    <></>
                )}

                <RegistrationButton
                    InputText="Continue with Facebook"
                    IconName="ios-logo-facebook"
                />

                <RegistrationButton
                    InputText="Continue with Google"
                    IconName="ios-logo-google"
                />

                <RegistrationButton
                    InputText="Continue with Phone Number"
                    IconName="ios-phone-portrait"
                />

                <TouchableOpacity style={styles.loginButtonContainer}>
                    <View>
                        <Text
                            maxFontSizeMultiplier={1.2}
                            adjustsFontSizeToFit
                            style={styles.SignUpTextStyle}
                        >
                            Log In
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

export default InitialRegistration;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
    },
    buttonsWrapper: {
        flex: 1,
        paddingHorizontal: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 15,
    },
    loginButtonContainer: {
        alignItems: "center",
        marginTop: "0.438rem",
        padding: "0.688rem",
    },
    SignUpTextStyle: {
        color: "#FFF",
        fontSize: "0.875rem", //14px
        fontFamily: "Arial",
    },
});
