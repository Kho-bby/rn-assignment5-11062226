import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native-elements";
import Home from "./home";
import Settings from "./settings";
import Cards from "./card";
import Statistics from "./statistics";
import { themes } from './theme';
import { ThemeRef } from './themeRef';
import { useContext } from 'react';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    const { theme } = useContext(ThemeRef);
    let activeTheme = themes[theme.mode];
    return(
        <Tab.Navigator 
        screenOptions={
            {
                tabBarStyle:{
                    backgroundColor: activeTheme.tab,
                    borderTopWidth: 0,
                    height: 90,
                }
            }
        }
        tabBarOptions={{
            activeTintColor:'blue',
            inactiveTintColor: 'grey',
        }}
        >
            <Tab.Screen 
            name="Home"
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image source={require('../assets/home.png')}
                    style={{
                        height: 30,
                        width: 30,
                    }}/>
                )}}/>
          <Tab.Screen 
            name="Cards"
            component={Cards}
            options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image source={require('../assets/myCards.png')}
                    style={{
                        height: 30,
                        width: 30,
                    }}/>
                )}}/>
                <Tab.Screen 
            name="Statistics"
            component={Statistics}
            options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image source={require('../assets/statictics.png')}
                    style={{
                        height: 30,
                        width: 30,
                    }}/>
                )}}/>
            <Tab.Screen 
            name="Settings"
            component={Settings}
            options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image source={require('../assets/settings.png')}
                    style={{
                        height: 30,
                        width: 30,
                    }}/>
                )}}/>
        </Tab.Navigator>



    )
}

export default Tabs;