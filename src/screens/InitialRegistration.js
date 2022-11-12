import React from "react";
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import {verticalScale, windowHeight, operatingSystem} from "../utils/utils";
import RegistrationButton from "../components/RegistrationButton";

const InitialRegistration = ({navigation}) => {
    const onPressPhoneLogin = () => {
        navigation.navigate("RegistrationWithPhone");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{alignSelf: "flex-end", marginTop: verticalScale(300)}}
            ></View>

            <View style={styles.buttonsWrapper}>

                {operatingSystem === "ios" ? (
                    <RegistrationButton
                        InputText="Connect with Apple"
                        IconName="logo-apple"
                    />
                ) : (
                    <></>
                )}

                <RegistrationButton
                    InputText="Connect with Facebook"
                    IconName="ios-logo-facebook"
                />

                <RegistrationButton
                    InputText="Connect with Google"
                    IconName="ios-logo-google"
                />

                <RegistrationButton
                    InputText="Connect with Phone Number"
                    IconName="ios-phone-portrait"
                    onPressButton={onPressPhoneLogin}
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
        paddingHorizontal: windowHeight * 0.025,
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
