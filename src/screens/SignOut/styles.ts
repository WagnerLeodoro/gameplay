import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    alignItems: 'center',
  },
  title: {
    marginTop: 24,
    flexDirection: 'row',
    alignContent: 'center',},
  game: {
      color: theme.colors.heading,
      fontFamily: theme.fonts.title700,
      fontSize: 20,
  },
  play: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.primary,
    fontSize: 20,
  },
  content: {
    marginTop: 24,
    flexDirection: 'row',
    marginBottom: 40,
    justifyContent: 'space-between',
  },
  cancel: {
      width: 160,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
      borderColor: theme.colors.secondary30,
      borderWidth: 1,
      borderRadius: 8,      
  },
  confirm: {
      width: 160,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,      
  },
});