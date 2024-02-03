import React, { useState } from "react";

const LLM = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://api.ai21.com/studio/v1/answer", {
        method: "POST",
        headers: {
          "Authorization": "Bearer fcWxuYwJnUTIzmU7THqgFw6FtFKytUeI",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                "context": `Her name is Aishwarya Sudarshan, you can call her Aishwarya. 
                Aishwarya is currently a Junior in Computer Science at UT Dallas, and is starting her Masters in Data Science in Fall of 2024.
                Aishwarya previously interned in technical positions at companies called Gazelle Ecosolutions from May 2023 - August 2023, State Farm from June 2022 to July 2022, Ericsson from June 2021 to August 2021, and SafeStamp. Ask about her role at each company to learn more about her. 
                At Gazelle Ecosolutions, this was Aishwarya's first experience working at a fast-growing start up in college and was incredibly pleased with her experience there! As part of this internship, she worked on the development team and created a hub interface and initial mockups using Typescript and React that were used for the inaugural live demo of the company. As a frontend developer in the role, she even built Gazelle's component library!
                At State Farm, Aishwarya was responsible for taking a REST API (consisting of customer data such as driving records, insurance information, and customer information) and migrating it onto AWS cloud. This was a steep learning curve for her because it was her first time working at Fortune 500 company and being exposed to AWS Tools! Overall, she loved the experience of learning about HTTP requests, how to interact with an API, and contributed to the overall purpose of the Drive Safe and Save (DSS) App.
                When Aishwarya was in high school, she interned at Ericsson as a Business Operations Intern and was responsible for developing an external website and enhancing engagement for the company’s mentorship program. As part of this internship, Aishwarya was able to learn about working in a corporate space for the first time as well as how relevant market research is in the technological space!
                Aishwarya’s first internship was at SafeStamp and she was an analyst intern responsible for contacting investors in pharmaceutical and technology industries to fundraise over $2.5M for seed stage. She researched commonly used pharmaceutical products subject to counterfeit to contact industry specific investors and increased outreach for the company by 40%.
                On campus, Aishwarya is a very active student and is involved in clubs such as Artificial Intelligence Society (AIS) as a logistics coordinator and developer where she helps plan AI related events and hackathons as well as helps build the club’s website. Additionally, Aishwarya is also the Vice President for Women Who Compute, an organization on campus focused on empowering women in the CS and Tech field! She helps organize corporate and club collaborations for fun events and also maintains the website for the club! Check out some of her projects she’s worked on for the clubs on her GitHub page. 
                Aishwarya’s technical skills are the following: Programming: C/C++, LATEX, React, Next, Typescript, Tailwind, Java, Python, CSS, HTML, JavaScript, Github, VSCode, Linux, PyCharm, Firebase, DynamoDB, Amazon Web Services (AWS) Lambda, Git, Spring Tool Suite, Postman, Splunk. Check out some of her winning projects and experiences that use these skills :).
                Here are some personality traits about Aishwarya has and makes her stand out as a CS student:  Communication Skills, Problem-Solving, Teamwork, Adaptability, Time Management, Creativity, Attention to Detail, Leadership, Conflict Resolution, Presentation Skills, Self-Motivation, Flexibility, Negotiation Skills, Business Acumen. These are just to name a few :)
                Aishwarya has worked on several projects, check them out on her GitHub, but here are her top 3 projects and how she contributed to them. 1. TrendSent is a machine learning model built to predict the projected valuation a company in the industry using previous company financial data, company's competitor financial reports, sentiment analysis, and LLMs. This project won an award by placing 3rd in the Goldman Sachs Sponsor Challenge at a hackathon - HackUTD 2023, the largest hackathon in Texas. As part of the project, she was responsible for the entire interface as well as learning for the first time the dynamic components such as React JS charts. She learned a lot about the intersection of CS and Finance through this hackathon! 2. Drowsy Driving is a hardware/facial recognition project that aims to prevent casualties by alarming drivers if they fall asleep at the wheel. This project won an award by placing 15/200 in a Toyota Sponsor Challenge at a hackathon - HackUTD 2022, the largest hackathon in Texas. As part of the project, Aishwarya contributed to creating the facial recognition model to determine whether eyes are closed or open by training the machine learning model using existing datasets. She was also responsible for finding datasets. 3. SnapCycle is an image classification app for users to accurately classify recyclable items based on three classifications. This project was created in an effort to minimize contributions to global warming and won awards in the UT Arlington Research Fair, AYSI App Challenge, and Science Fair Grand Prize at a Regional level. Aishwarya contributed to this project by creating the frontend user interface in Android Studios as well as creating a custom dataset to train and test. 
                Aishwarya has taken the following relevant classes as a university student: Computer Architecture, Advanced Data Structures and Algorithms, Discrete Math. Systems Programming in UNIX, Operating Systems, Programming Languages, Automata Theory, Machine Learning, Artificial Intelligence, Digital Logic
                These are some of the honors that Aishwarya is most proud of and are her achievements: National Computing & Women in Technology (NCWIT) Honorable Mention, Grace Hopper Conference Scholar (GHC) 2022. She’s won quite a few more through hackathons!
                Aishwarya is currently working on a data science project using a dataset called “Chemicals in Cosmetics”. Be on the lookout to checkout the project using LLM and ML soon :) 
                Aishwarya would be a great fit to work in any role, but primarily working a software engineering or CS based role because of what she’s interested in. She’s always looking for professional opportunities to network and gain unique and interesting experiences. Don’t hesitate to reach out to her, she’d love to chat with you.    
                `,

                "question": question,
            }
        ),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      else {
        setAnswer("At this time, I don't have the answer the question, check back soon and I might know!");
      }

      const data = await response.json();

      setAnswer(data.answer);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
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
          {question.trim() === "" ? (
          <div className="text-lg">
            Ask a question about Aishwarya! Here are some starter prompts:
            <ul className="list-disc ml-4">
              <li>Who is Aishwarya?</li>
              <li>Tell me about Aishwarya's achievements.</li>
              <li>What is Aishwarya known for?</li>
            </ul>
          </div>
        ) : (
          <p className="text-base">{answer}</p>
        )}
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

export default LLM;