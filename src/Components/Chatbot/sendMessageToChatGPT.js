const OPENAI_API_KEY = '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'; // Reemplaza esto con tu clave de API de OpenAI

export const sendMessageToChatGPT = async (message) => {
  try {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: message,
        max_tokens: 150 // Número máximo de tokens en la respuesta del modelo
      })
    });

    const data = await response.json();
    if (data.choices && data.choices[0] && data.choices[0].text) {
      return data.choices[0].text.trim();
    } else {
      console.error('Respuesta de la API de OpenAI no tiene el formato esperado:', data);
      return 'Error al procesar la solicitud. Respuesta inesperada.';
    }
  } catch (error) {
    console.error('Error sending message to ChatGPT:', error);
    return `Error al procesar la solicitud. Detalles: ${error.message}`;
  }
};