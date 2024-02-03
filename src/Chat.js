import React, { useState } from "react";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      // Replace with your custom GPT model's API endpoint
      const gptApiUrl = "https://api.your-custom-gpt-model.com/v1/generate";
      // API KEY: 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
      // Prepare the request body for the GPT model
      // Modify this according to your model's API specification
      const gptRequestBody = JSON.stringify({
        prompt: question,
        // Additional parameters like temperature, max tokens, etc.
      });

      // Making the request to the GPT model
      const gptResponse = await fetch(gptApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any required headers like authorization tokens
        },
        body: gptRequestBody,
      });

      if (!gptResponse.ok) {
        throw new Error("Failed to fetch data from custom GPT API");
      }

      const gptData = await gptResponse.json();
      // Assuming the response contains a field like 'responseText'
      // Adjust according to your GPT model's response format
      setAnswer(gptData.responseText); 
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data from custom GPT API:", error);
      setAnswer("Error occurred while fetching response");
      setIsLoading(false);
    }
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };


  const handleAskQuestion = () => {
    fetchData();
  };

  return (
    <div className="w-full flex">
    <div className="flex w-full justify-between items-center my-80">
        <div className="pl-40">
            <div className="text-5xl z-5 text-white text-center">Aishwarya Sudarshan</div>
            <div className="flex gap-x-36">
                <div className="text-2xl pt-4 z-5 text-[#5197F7]">B.S. Computer Science</div>
            </div>
        </div>
    </div>
    {/* chatbot */}
    <div className="flex w-full h-full items-center">
        <div className="flex w-full h-full bg-[#20262D] opacity-25 rounded-3xl relative"></div>
        <div className="absolute text-white text-xl px-20 pb-36 opacity-70">
          {isLoading && (
            <div className="flex justify-center items-center text-center text-3xl">
              <span className="animate-bounce mx-1">.</span>
              <span className="animate-bounce mx-1" style={{ animationDelay: '0.2s' }}>.</span>
              <span className="animate-bounce mx-1" style={{ animationDelay: '0.4s' }}>.</span>
            </div>
          )}
          <p>{answer}</p>
        </div>
        <div className="w-full flex items-center absolute mt-[500px] gap-x-4">
          {/* actual input */}
          
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex items-center z-5 px-8 flex w-2/5 ml-14 rounded-full opacity-80 h-12" />
          <div className="flex justify-between items-center">
               <button className="flex justify-center items-center text-center opacity-100 bg-[#5297F8] w-8 h-8 rounded-full" onClick={handleAskQuestion}>
                  <img src="arrow1.svg" className="absolute" alt="arrow"></img>
               </button>
          </div>
        </div> 
    </div>
    </div>
  );
};

export default Chat;