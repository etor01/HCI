"use client";
import { useState } from "react";

export default function Quiz() {
    const questions = [
            { question: "What is the recommended duration for handwashing?", options: ["10 seconds", "20 seconds", "30 seconds"], answer: "20 seconds" },
            { question: "How often should you clean your kitchen surfaces?", options: ["Once a week", "Daily", "Monthly"], answer: "Daily" },
            { question: "What is the best way to dispose of hazardous waste?", options: ["Regular trash", "Special disposal", "Burning"], answer: "Special disposal" },
            { question: "What is the main purpose of recycling?", options: ["Reduce waste", "Increase pollution", "Save money"], answer: "Reduce waste" },
            { question: "Which of the following is recyclable?", options: ["Plastic bags", "Glass bottles", "Pizza boxes"], answer: "Glass bottles" },
            { question: "What should you do with expired medications?", options: ["Flush them", "Throw them in the trash", "Return to pharmacy"], answer: "Return to pharmacy" },
            { question: "How should you dispose of electronic waste?", options: ["Regular trash", "Recycling center", "Burning"], answer: "Recycling center" },
            { question: "What is a common misconception about recycling?", options: ["All plastics are recyclable", "Recycling is free", "Recycling helps the environment"], answer: "All plastics are recyclable" },
            { question: "What is the purpose of composting?", options: ["Reduce landfill waste", "Create fertilizer", "Both"], answer: "Both" },
            { question: "Which of the following is a benefit of recycling?", options: ["Increased pollution", "Conservation of resources", "Higher costs"], answer: "Conservation of resources" },
        ];

        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [userAnswers, setUserAnswers] = useState<string[]>([]);
        const [score, setScore] = useState(0);
        const [showResult, setShowResult] = useState(false);

        const handleAnswer = (answer: string) => {
            setUserAnswers([...userAnswers, answer]);
            if (answer === questions[currentQuestion].answer) {
                setScore(score + 1);
            }
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResult(true);
            }
        };

        const getBadgeMessage = () => {
            if (score === questions.length) return "Community Police! 🎉";
            if (score >= questions.length / 2) return "Hygiene Expert! 👍";
            return "We will find you! 😂";
        };
        
        return (
            <div className="p-4">
                {showResult ? (
                    <div className="text-center">
                        <h2 className="text-2xl">Your Score: {score}/{questions.length}</h2>
                        <p className="mt-2">{getBadgeMessage()}</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-xl">{questions[currentQuestion].question}</h2>
                        <div className="mt-4">
                            {questions[currentQuestion].options.map((option) => (
                                <button
                                    key={option}
                                    className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
                                    onClick={() => handleAnswer(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
}