import { View, Text, StyleSheet } from 'react-native';
import { themes } from './theme';
import { ThemeRef } from './themeRef';
import { useContext } from 'react';


export default function Cards() {
  const { theme } = useContext(ThemeRef);
    let activeTheme = themes[theme.mode];
  return (
    <View style={[styles.container, {backgroundColor: activeTheme.primary}]}>
      <Text style={{color: activeTheme.secondary}} >Cards Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});