import {View, Text, Pressable, StyleSheet} from "react-native";

export default function PrimaryButton({children}) {

    function pressHandler() {
        console.log('Pressed');
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{color: '#0f0'}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
        backgroundColor: '#72063c',
        elevation: 4,
    },

    buttonInnerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },

    pressed: {
        opacity: 0.75,

    }
})