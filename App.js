import { StyleSheet, ImageBackground } from 'react-native';
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import {Color} from "react-native/Libraries/Animated/AnimatedExports";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

    if (userNumber) {
        screen = <GameScreen pickedNumber={userNumber} />
    }

    return (
        <SafeAreaProvider>
            <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.container}>
                <ImageBackground
                    source={require('./assets/background.png')}
                    resizeMode="cover"
                    style={styles.container}
                    imageStyle={styles.backgroundImage}
                >
                    <SafeAreaView style={styles.container}>
                        {screen}
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15
    }
});
