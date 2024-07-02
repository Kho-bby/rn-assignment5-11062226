import { View, Text, Image, StyleSheet, Navigator,FlatList} from "react-native";    
import { themes } from './theme';
import { ThemeRef } from './themeRef';
import { useContext } from 'react';

const Home = () => {
    const { theme } = useContext(ThemeRef);
    let activeTheme = themes[theme.mode];

    const data = [
        {
            id: '1',
            title: 'Apple Store',
            category: 'Entertainment',
            amount: '-$5.99',
            logo: require('../assets/apple.png'),
            fontcolor: activeTheme.secondary,
            color: activeTheme.secondary,
        },
        {
            id: '2',
            title: 'Spotify',
            category: 'Music',
            amount: '-$12.99',
            logo: require('../assets/spotify.png'),
            fontcolor: activeTheme.secondary,
        },
        {
            id: '3',
            title: 'Money Transfer',
            category: 'Transaction',
            amount: '$300',
            logo: require('../assets/moneyTransfer.png'),
            fontcolor: 'blue',
            color: activeTheme.secondary,
        },
        {
            id: '4',
            title: 'Grocery',
            category: 'Shopping',
            amount: '-$88',
            logo: require('../assets/grocery.png'),
            fontcolor: activeTheme.secondary
        },
    ]

    const Transaction = ({   title, category, amount, logo, fontcolor,color    }) => {
        return(
            <View style={ {marginBottom:20, flexDirection: 'row', }} >
                    <Image source={logo} style={{marginStart: 10, tintColor: color}}/>

                    <View style={{flexDirection:'row', justifyContent:'space-between', width: '90%'}}>
                    <View style={{marginStart: 20}}>
                        <Text style={{fontWeight: 'bold',color: activeTheme.secondary}}> {title}</Text>
                        <Text style={{ opacity: 0.5, color: activeTheme.secondary}}>{category}</Text>
                    </View>
                    <View style={{gap: 2000}}>
                        <Text style={{color: fontcolor}}>{amount}</Text>
                    </View>
                    </View>
                    
                    
                </View>
        )
    }


    return (
        <View  style={[styles.container, {backgroundColor: activeTheme.primary}]}>
            <View>
                <View style={styles.row}>
                    <Image source={require('../assets/profile.png' )}
                        style={{
                            width: 70,
                            height: 70, 
                        }}
                     />
                    <View  style={styles.column}>
                        <Text style={{opacity: 0.5, fontSize: 20, color:activeTheme.secondary}}>Welcome back</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 30, color:activeTheme.secondary}}>Eric Atsu</Text>
                    </View>
                    <Image source={require('../assets/search.png')}
                    style={{
                        // justifyContent: 'b',
                        // alignItems: 'center',
                        backgroundColor: activeTheme.tab,
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
            <View style={[styles.row, {marginBottom: 30}]}>
                <View styles={{flexDirection:'column', color:activeTheme.secondary}}>
                    <Image source={require('../assets/send.png')} style={{tintColor:activeTheme.secondary}}/>
                    <Text style={{color:activeTheme.secondary}}>Send</Text>
                </View>
                <View>
                    <Image source={require('../assets/recieve.png')} style={{tintColor:activeTheme.secondary}}/>
                    <Text style={{color:activeTheme.secondary}}>Recieve</Text>
                </View>
                <View>
                    <Image source={require('../assets/loan.png')} style={{tintColor:activeTheme.secondary}}/>
                    <Text style={{color:activeTheme.secondary}}>Loan</Text>
                </View>
                <View>
                    <Image source={require('../assets/topUp.png')} style={{tintColor:activeTheme.secondary}}/>
                    <Text style={{color:activeTheme.secondary}}>TopUp</Text>
                </View>
            </View>
            <View style={[styles.row, {marginBottom: 30}]}>
                <Text style={{fontWeight: 'bold', fontSize: 30, color:activeTheme.secondary}}>Transaction</Text>
                <Text style={{fontWeight: 'bold', fontSize: 30, color: '#0066ff'}}>See All</Text>
            </View>
            
            <FlatList 
            data={data}
            vertical
            renderItem={({item}) => (
                <Transaction 
                title={item.title}
                category={item.category}
                amount={item.amount}
                logo={item.logo}
                fontcolor={item.fontcolor}
                color={item.color}
                />
            )}/>
            
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

    },
    footer: {
        
    }
 })

export default Home;

// tabBarOptions={{
//     activeTintColor: 'blue',
//     inactiveTintColor: 'gray',
//   }}
// >
//   <Tab.Screen name="Clement" component={ClementScreen} />
// </Tab.Navigator>
// </NavigationContainer>