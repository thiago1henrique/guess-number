import {View, Text, Pressable, StyleSheet} from "react-native";
import Colors from "../constants/colors";
import {Color} from "react-native/Libraries/Animated/AnimatedExports";

export default function PrimaryButton({children, onPress}) {

    function pressHandler() {
        console.log('Pressed');
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={onPress} android_ripple={{color: Colors.primary600}}

            >
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
        backgroundColor: Colors.primary500,
        elevation: 2
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },

    pressed: {
        opacity: 0.75,

    }
})