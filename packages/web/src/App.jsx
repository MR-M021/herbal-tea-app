import { useState } from 'react';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const getSuggestion = async () => {
    const res = await fetch('http://localhost:5000/api/ai/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResult(data.recommendation || 'No response');
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>🤖 AI Tea Recommender</h1>
      <input
        style={{ width: '100%', padding: '10px', fontSize: '1rem', marginBottom: '1rem' }}
        placeholder="e.g. I feel anxious and tired"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={getSuggestion} style={{ padding: '10px 20px' }}>
        Get Recommendation
      </button>
      {result && (
        <div style={{ marginTop: '2rem', background: '#f7f7f7', padding: '1rem', borderRadius: '8px' }}>
          <h2>🌿 Suggested Tea:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
