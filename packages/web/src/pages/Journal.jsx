import { useEffect, useState } from 'react';

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    user: '',
    tea: '',
    note: '',
    mood: ''
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/journal')
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.error('Error fetching journal:', err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/journal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const newEntry = await res.json();
    setEntries([...entries, newEntry]);
    setForm({ user: '', tea: '', note: '', mood: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-white p-4">
      <h1 className="text-3xl font-bold text-yellow-700 text-center mb-6 flex items-center justify-center gap-2">
        📓 Tea Journal
      </h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md border border-yellow-200">
        <input
          name="user"
          value={form.user}
          onChange={handleChange}
          placeholder="Your name or email"
          required
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />
        <input
          name="tea"
          value={form.tea}
          onChange={handleChange}
          placeholder="Tea ObjectId"
          required
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />
        <input
          name="note"
          value={form.note}
          onChange={handleChange}
          placeholder="Note"
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />
        <input
          name="mood"
          value={form.mood}
          onChange={handleChange}
          placeholder="Mood"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">
          Add Entry
        </button>
      </form>

      <div className="mt-10 max-w-2xl mx-auto space-y-4">
        {entries.map((entry) => (
          <div key={entry._id} className="p-4 bg-white border rounded-lg shadow-sm">
            <h4 className="font-semibold text-yellow-700">
              {entry.user} — {entry.mood}
            </h4>
            <p className="text-gray-700">{entry.note}</p>
            <small className="text-gray-500">Tea ID: {entry.tea}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
