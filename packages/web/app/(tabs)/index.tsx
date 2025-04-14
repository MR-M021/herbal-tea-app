import { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function IndexScreen() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const getSuggestion = async () => {
    try {
      const res = await fetch('http://192.168.1.59:5000/api/ai/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      setResult(data.recommendation || 'No response from API');
    } catch (err) {
      setResult('❌ Could not reach the server.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🤖 AI Tea Recommender</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. I feel tired and bloated"
        value={prompt}
        onChangeText={setPrompt}
      />
      <Button title="Get Recommendation" onPress={getSuggestion} />
      {result !== '' && (
        <View style={styles.result}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4B5563',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
  },
  resultText: {
    fontSize: 16,
    color: '#1F2937',
  },
});
