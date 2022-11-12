import React from "react";
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Ionicons from "@expo/vector-icons/Ionicons";

const RegistrationWithPhone = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity style={styles.backButton} onPress={ () => navigation.navigate("InitialRegistration")}>
                    <Ionicons name="chevron-back" size={24} color="white"/>
                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal: 15}}>
                <Text style={styles.phoneTitle}>
                    Enter your phone number
                </Text>
                
                <Text style={styles.sideNote}>
                    We will send a text message to verify your phone number.
                </Text>
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
        fontSize: "1.563rem",
        marginBottom: 10,
        fontFamily: "Arial",
        letterSpacing: -0.5,
    },
    sideNote: {
        color: "#FFF",
        fontSize: "0.813rem",
        marginBottom: 10,
        fontFamily: "Arial",
    }
});
