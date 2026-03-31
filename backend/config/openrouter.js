const openRouterUrl = "https://openrouter.ai/api/v1/chat/completions"
const model = "deepseek/deepseek-chat"

const generateResponse = async (prompt , maxTokens = 8000) => {
    const res = await fetch(openRouterUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: model,
      messages: [
        {
            role: 'system',
            content: "You must return ONLY valid raw JSON"
        },
        {
          role: 'user',
          content: prompt,
        },
     ],
     temperature: 0.2,
     max_tokens: maxTokens
  }),
});

if(!res.ok){
    const err = await res.text()
    throw new Error("openRouter err"+err)
}

const data = await res.json()
return data.choices[0].message.content

}

export {generateResponse}