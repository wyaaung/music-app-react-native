import React, {useRef} from "react";
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    TextInput,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Ionicons from "@expo/vector-icons/Ionicons";
import {verticalScale} from "../utils/utils";
import {FontSize} from "../constants/constants";

const RegistrationWithPhone = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate("InitialRegistration")}
                >
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal: 15}}>
                <Text style={styles.phoneTitle}>Enter your phone number</Text>

                <Text style={styles.sideNote}>
                    We will send a text message to verify your phone number.
                </Text>
            </View>

            <View style={styles.phoneContainer}>
                <View style={{width: "100%"}}>
                    <TextInput
                        adjustsFontSizeToFit
                        maxFontSizeMultiplier={1.2}
                        style={styles.phoneNumberInputStyle}
                        maxLength={16}
                        placeholder="09xxxxxxxxx"
                        placeholderTextColor="#92929b"
                        keyboardType="phone-pad"
                        // value={phoneNumber}
                        returnKeyType="done"
                        // onChangeText={onSetPhone}
                        secureTextEntry={false}
                        // onFocus={onChangeFocus}
                        // onBlur={onChangeBlur}
                        // autoFocus={focusInput}
                    />
                </View>
            </View>

            <View style={styles.nextButtonWrapper}>
                <TouchableOpacity
                    style={{width: "100%", paddingHorizontal: 15}}
                >
                    <View style={styles.nextButton}>
                        <Text style={styles.nextButtonText}>Next</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default RegistrationWithPhone;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    backButton: {
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 31.984,
        width: 50,
        marginLeft: 15,
    },
    phoneTitle: {
        color: "#FFF",
        fontSize: FontSize.secondaryHeaderRegistration,
        marginBottom: 10,
        fontFamily: "Arial",
        letterSpacing: -0.5,
    },
    sideNote: {
        color: "#FFF",
        fontSize: FontSize.secondaryText,
        marginBottom: 10,
        fontFamily: "Arial",
    },
    phoneContainer: {
        marginBottom: "2.188rem",
        paddingHorizontal: 15,
        height: "3.5rem",
        marginTop: "0.438rem",
        flexDirection: "row",
    },
    phoneNumberInputStyle: {
        fontSize: FontSize.primaryText,
        fontFamily: "Arial",
        backgroundColor: "#262626",
        color: "#fff",
        height: "100%",
        borderRadius: "0.313rem",
        paddingHorizontal: 15,
        alignItems: "center",
        textAlignVertical: "center",
    },
    nextButtonWrapper: {
        flexGrow: 1,
        marginBottom: verticalScale(50),
        justifyContent: "flex-end",
        alignItems: "center",
    },
    nextButton: {
        borderRadius: "0.313rem",
        width: "100%",
        minHeight: "3.5rem",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f3ff",
    },
    nextButtonText: {
        color: "#000",
        fontSize: FontSize.buttonText,
        letterSpacing: -0.5,
        fontFamily: "Arial",
    },
});
