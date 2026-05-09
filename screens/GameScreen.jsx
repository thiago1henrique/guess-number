import {View, Text, StyleSheet} from "react-native";
import Title from "../components/Title";

export default function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title titleName={'Guess the number'} />
            <Text>Guess</Text>
            <View>
                <Text>Higher or lower?</Text>
                <Text>+-</Text>
            </View>
            <View>
                <Text>LOG Rounds</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    }
})