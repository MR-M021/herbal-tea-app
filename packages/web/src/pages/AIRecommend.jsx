import { useState } from 'react';

export default function AIRecommend() {
  const [prompt, setPrompt] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/ai/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setRecommendation(data.recommendation || 'No response.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-700 flex items-center gap-2">
        🤖 AI Tea Recommender
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg border border-purple-200"
      >
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. I have a headache and can’t sleep"
          required
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Get Tea Suggestion
        </button>
      </form>

      {recommendation && (
        <div className="mt-6 max-w-md text-center p-4 bg-white shadow-lg rounded-xl border border-purple-100">
          <h2 className="font-semibold text-purple-700 text-lg mb-2">
            🌿 Suggested Tea:
          </h2>
          <p className="text-gray-700 whitespace-pre-wrap">{recommendation}</p>
        </div>
      )}
    </div>
  );
}
