import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import EStyleSheet from "react-native-extended-stylesheet";
import {StyleSheet, View, StatusBar, Dimensions} from "react-native";

import InitialRegistration from "./src/screens/InitialRegistration";
import RegistrationWithPhone from "./src/screens/RegistrationWithPhone";
import InputOTP from "./src/screens/shared/InputOTP";

EStyleSheet.build({
    $rem:
        Dimensions.get("window").width > 500
            ? 20
            : Dimensions.get("window").width < 300
            ? 12
            : 16,
});

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar backgroundColor={"black"} barStyle="light-content" />

            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="InitialRegistration"
                        screenOptions={{
                            animation: "slide_from_right",
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen
                            name="InitialRegistration"
                            component={InitialRegistration}
                        />

                        <Stack.Screen
                            name="RegistrationWithPhone"
                            component={RegistrationWithPhone}
                        />

                        <Stack.Screen name="InputOTP" component={InputOTP} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
