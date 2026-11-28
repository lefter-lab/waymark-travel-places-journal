import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AuthLayout({ title, description, children }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.brand}>
          <Text style={styles.brandName}>WAYMARK</Text>
          <Text style={styles.tagline}>A journal for the places that matter.</Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F6F2',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  brand: {
    marginBottom: 32,
  },
  brandName: {
    color: '#214E43',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 3,
  },
  tagline: {
    color: '#66766E',
    fontSize: 15,
    marginTop: 8,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E3E9E3',
    borderRadius: 20,
    borderWidth: 1,
    padding: 24,
  },
  title: {
    color: '#1F2E28',
    fontSize: 28,
    fontWeight: '700',
  },
  description: {
    color: '#66766E',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
    marginTop: 8,
  },
});
