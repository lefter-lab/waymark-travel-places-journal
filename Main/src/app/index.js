import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import AuthButton from '../components/AuthButton';
import AuthField from '../components/AuthField';
import AuthLayout from '../components/AuthLayout';

export default function LoginScreen() {
  return (
    <AuthLayout
      title="Welcome back"
      description="Sign in to continue your travel journal."
    >
      <AuthField
        label="Email"
        placeholder="you@example.com"
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
      />
      <AuthField
        label="Password"
        placeholder="Enter your password"
        autoCapitalize="none"
        autoComplete="current-password"
        secureTextEntry
      />
      <AuthButton title="Sign in" />

      <Text style={styles.footer}>
        New to Waymark? <Link href="/register" style={styles.link}>Create an account</Link>
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
