import React, {useState} from "react";
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";
import EStyleSheet from "react-native-extended-stylesheet";
import {FontSize, Colors} from "../../constants/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import {verticalScale} from "../../utils/utils";
import NextButton from "../../components/NextButton";

const InputOTP = ({navigation}) => {
    const [disable, setDisable] = useState(true);
    const [disableNextButton, setDisableNextButton] = useState(true);

    const CELL_COUNT = 4;
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const onPressNextButton = () => {
        console.log(disableNextButton);
        // navigation.navigate("InputOTP");
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <SafeAreaView style={styles.container}>
                <View>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() =>
                            navigation.navigate("RegistrationWithPhone")
                        }
                    >
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.otpTitle}>OTP Confirmation</Text>
                    <Text
                        style={styles.sidenote}
                    >{`We sent a code to 07xxxxxxxxx`}</Text>
                </View>

                <View style={styles.inputWrapper}>
                    <CodeField
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={(val) => {
                            if (val.length === CELL_COUNT) {
                                setDisable(false);
                                setDisableNextButton(false);
                            } else {
                                setDisableNextButton(true);
                                setDisable(true);
                            }
                            setValue(val);
                        }}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({index, symbol, isFocused}) => (
                            <View
                                style={[
                                    styles.cell,
                                    isFocused && styles.focusCell,
                                    {
                                        backgroundColor: Colors.greyColor,
                                    },
                                ]}
                            >
                                <Text
                                    key={index}
                                    style={{
                                        ...styles.cellText,
                                        color: Colors.whiteColor,
                                    }}
                                    onLayout={getCellOnLayoutHandler(index)}
                                >
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            </View>
                        )}
                    />
                </View>

                <View style={styles.nextButtonWrapper}>
                    <NextButton
                        InputText="Verify"
                        disableStatus={disableNextButton}
                        onPressButton={onPressNextButton}
                    />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default InputOTP;

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
    textContainer: {
        flex: 1,
        marginHorizontal: 15,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    otpTitle: {
        fontSize: FontSize.secondaryHeaderRegistration,
        color: "#fff",
        fontFamily: "Arial",
        marginBottom: 10,
        letterSpacing: -0.5,
    },
    sidenote: {
        color: "#fff",
        fontSize: FontSize.secondaryText,
        fontFamily: "Arial",
        letterSpacing: -0.5,
    },
    inputWrapper: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: "5.25rem",
        justifyContent: "center",
        marginRight: 12,
    },
    codeFieldRoot: {
        justifyContent: "center",
        alignItems: "center",
    },
    cell: {
        color: "white",
        width: "3.5rem",
        height: "3.5rem",
        paddingHorizontal: "0.938rem",
        borderRadius: "0.313rem",
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    cellText: {
        fontFamily: "Arial",
        fontSize: "1.25rem",
        textAlign: "center",
        textAlignVertical: "center",
    },
    focusCell: {
        borderColor: "#000",
    },
    nextButtonWrapper: {
        flexGrow: 1,
        marginBottom: verticalScale(50),
        justifyContent: "flex-end",
        alignItems: "center",
    },
});
