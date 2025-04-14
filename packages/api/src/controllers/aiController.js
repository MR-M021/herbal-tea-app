const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const recommendTea = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a certified herbalist. Recommend teas based on symptoms, mood, or preferences.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7
    });

    const answer = response.choices[0].message.content;
    res.json({ recommendation: answer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { recommendTea };
