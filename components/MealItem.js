import {
    Text,
    View,
    Pressable,
    Image,
    StyleSheet,
    Platform
} from 'react-native'

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({pressed}) => (pressed ? styles.buttonPressed : null)}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}><Text style={styles.textBold}>Duration: </Text>{duration}m</Text>
                        <Text style={styles.detailItem}><Text style={styles.textBold}>Complexity: </Text>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}><Text style={styles.textBold}>Affordability: </Text>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'white',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : "visible",
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8
    },
    details: {
        justifyContent: 'center',
        padding: 8,
    },
    textBold: {
        fontWeight: 'bold',
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    }
})