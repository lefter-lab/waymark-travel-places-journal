import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import AuthButton from '../components/AuthButton';
import AuthField from '../components/AuthField';
import AuthLayout from '../components/AuthLayout';

export default function RegisterScreen() {
  return (
    <AuthLayout
      title="Create account"
      description="Start keeping track of the places you have visited and hope to see."
    >
      <AuthField label="Name" placeholder="Your name" autoComplete="name" />
      <AuthField
        label="Email"
        placeholder="you@example.com"
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
      />
      <AuthField
        label="Password"
        placeholder="Create a password"
        autoCapitalize="none"
        autoComplete="new-password"
        secureTextEntry
      />
      <AuthButton title="Create account" />

      <Text style={styles.footer}>
        Already have an account? <Link href="/" style={styles.link}>Sign in</Link>
      </Text>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  footer: {
    color: '#66766E',
    fontSize: 14,
    marginTop: 24,
    textAlign: 'center',
  },
  link: {
    color: '#245A4A',
    fontWeight: '700',
  },
});
