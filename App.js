import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";


export default function App() {
    const [userNumber, setUserNumber] = useState(null);

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

    if (userNumber) {
        screen = <GameScreen pickedNumber={userNumber}/>
    }

    return (
        <SafeAreaProvider>
            <LinearGradient colors={['#3b021f', '#ddb52f']} style={{ flex: 1 }}>
                <ImageBackground
                    source={require('./assets/background.png')}
                    resizeMode="cover"
                    style={{ flex: 1 }} // Garante que a imagem ocupe tudo
                    imageStyle={styles.backgroundImage}
                >
                    {/* Aqui está o pulo do gato: SafeAreaView com flex: 1 */}
                    <SafeAreaView style={{ flex: 1 }}>
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
