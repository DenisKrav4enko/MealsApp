import { Text, View, StyleSheet } from "react-native";

function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        color: '#d5926e',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    subtitleContainer: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 8,
        borderBottomColor: '#d5926e',
        borderBottomWidth: 2,
    },
})