
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './component/tabs'; 
import { ThemeRef } from './component/themeRef';
import { useState } from 'react';


const Stack = createStackNavigator();

export default function App() {
  const [theme, setTheme] = useState({mode: 'light'})

  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
        const mode = theme.mode === 'light' ? 'dark' : 'light';
        newTheme = { mode };
    }
    setTheme(newTheme);
}
  return (
    <ThemeRef.Provider value={{theme,updateTheme}}><NavigationContainer>
      
    <Stack.Navigator>
      <Stack.Screen 
      name='Home'
      component={Tabs}
      options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  </ThemeRef.Provider>
    
  );
}
