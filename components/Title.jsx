import {Text, StyleSheet} from "react-native";
import Colors from "../constants/colors";

export default function Title({titleName}) {
    return (
        <Text style={styles.title}>{titleName}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
        borderRadius: 8,
    }
})