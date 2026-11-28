import { Pressable, StyleSheet, Text } from 'react-native';

export default function AuthButton({ title }) {
  return (
    <Pressable accessibilityRole="button" style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#245A4A',
    borderRadius: 12,
    justifyContent: 'center',
    marginTop: 8,
    minHeight: 52,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
