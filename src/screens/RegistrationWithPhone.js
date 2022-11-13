import React, {useReducer} from "react";
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    TextInput,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Ionicons from "@expo/vector-icons/Ionicons";
import {FontSize} from "../constants/constants";
import NextButton from "../components/NextButton";
import {verticalScale} from "../utils/utils";

const reducer = (state, action) => {
    const {type, payload} = action;

    if (state.phoneNumber.length > 0 && state.disableNextButton === true) {
        return {...state, [type]: payload, disableNextButton: false};
    } else if (
        state.phoneNumber.length === 0 &&
        state.disableNextButton === false
    ) {
        return {...state, [type]: payload, disableNextButton: true};
    }

    return {...state, [type]: payload};
};

const RegistrationWithPhone = ({navigation}) => {
    const initialState = {
        phoneNumber: "",
        focusInput: false,
        disableNextButton: true,
    };

    const onPressNextButton = () => {
        navigation.navigate("InputOTP");
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const {phoneNumber, focusInput, disableNextButton} = state;

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
                        placeholder="07xxxxxxxxx"
                        placeholderTextColor="#92929b"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        returnKeyType="done"
                        onChangeText={(number) =>
                            dispatch({type: "phoneNumber", payload: number})
                        }
                        secureTextEntry={false}
                        onFocus={() =>
                            dispatch({type: "focusInput", payload: true})
                        }
                        onBlur={() =>
                            dispatch({type: "focusInput", payload: false})
                        }
                        autoFocus={focusInput}
                    />
                </View>
            </View>

            <View style={styles.nextButtonWrapper}>
                <NextButton
                    InputText="Next"
                    disableStatus={disableNextButton}
                    onPressButton={onPressNextButton}
                />
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
});
