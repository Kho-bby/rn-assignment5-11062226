import { View, Text, Image, StyleSheet } from "react-native";    

const Home = () => {
    return (
        <View  style={styles.container}>
            <View>
                <View style={styles.row}>
                    <Image source={require('../assets/profile.png' )}
                        style={{
                            width: 70,
                            height: 70, 
                        }}
                     />
                    <View  style={styles.column}>
                        <Text style={{opacity: 0.5, fontSize: 20}}>Welcome back</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 30}}>Eric Atsu</Text>
                    </View>
                    <Image source={require('../assets/search.png')}
                    style={{
                        // justifyContent: 'b',
                        // alignItems: 'center',
                        backgroundColor: '#f4f4f4',
                        width: 40,
                        height: 40, 
                        borderRadius: 45
                    }}
                    />
                </View>
            </View>
            <View style={styles.card}>
                <Image source={require('../assets/Card.png')}
                />
            </View>
            <View style={styles.row}>
                <View styles={{flexDirection:'column'}}>
                    <Image source={require('../assets/send.png')}/>
                    <Text>Send</Text>
                </View>
                <View>
                    <Image source={require('../assets/recieve.png')}/>
                    <Text>Recieve</Text>
                </View>
                <View>
                    <Image source={require('../assets/loan.png')}/>
                    <Text>Loan</Text>
                </View>
                <View>
                    <Image source={require('../assets/topUp.png')}/>
                    <Text>TopUp</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Text>Transaction</Text>
                <Text>See All</Text>
            </View>
            <View >
                <View>
                    <Image source={require('../assets/apple.png')}/>
                </View>
                <View>
                    <Image source={require('../assets/spotify.png')}/>
                </View>
            </View>
        </View>
    )
};
 const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 50,
        
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    column: {
        flexDirection: 'column',
        marginLeft: -90,
        marginTop: 20,
    
    },
    card: {
        marginTop: 50,
        marginBottom: 50,

    }
    
 })

export default Home;