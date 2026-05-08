import {View, Text, StyleSheet} from "react-native";

export default function GameScreen() {
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
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