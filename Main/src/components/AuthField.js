import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function AuthField({
  label,
  placeholder,
  autoCapitalize = 'sentences',
  autoComplete,
  keyboardType = 'default',
  secureTextEntry = false,
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#8A9690"
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    marginBottom: 16,
  },
  label: {
    color: '#33443B',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D8E0D9',
    borderRadius: 12,
    borderWidth: 1,
    color: '#1F2E28',
    fontSize: 16,
    minHeight: 50,
    paddingHorizontal: 14,
  },
});
