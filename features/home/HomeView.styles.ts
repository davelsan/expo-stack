import { StyleSheet } from 'react-native-unistyles';

const styles = StyleSheet.create((theme) => ({
  view: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
}));

export default styles;
