import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Card({ImageLink, City, Location, Population, Votes}) {
    return (
      <View style={styles.cardStyle}>
        <Image style={styles.imageStyle} source={{ uri: ImageLink}}/>
        <Text style={styles.cityName}>{City}</Text>
        <Text style={styles.cityInfo}>Location: {Location}</Text>
        <Text style={styles.cityInfo}>Population: {Population}</Text>
        <Text style={styles.cityInfo}>Votes: {Votes}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        width: 350,
        height: 320,
        marginBottom: 16,
        backgroundColor: "lightgrey",
        borderRadius: 62
      },
      imageStyle: {
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        width: "100%",
        height: "55%"
      },
      cityInfo: {
        fontSize: 20,
        fontWeight: 400,
        paddingLeft: 14
      },
      cityName: {
        fontSize: 26,
        fontWeight: 600,
        paddingLeft: 14,
        paddingTop: 10
      },
});