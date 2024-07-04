import React, { useState } from 'react';
import './App.css';
import questions from './questions.json';

function App() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-600">Rounding Off To Nearest 10</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {questions.map((q, index) => (
          <div key={index} className="question bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <p className="text-lg font-semibold mb-4">{q.question}</p>
            <div className="options flex flex-col">
              {q.options.map((option, optIndex) => (
                <label key={optIndex} className="mb-2 flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleChange(index, option)}
                    className="mr-3 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    aria-label={`Question ${index + 1} option ${option}`}
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transform hover:scale-105"
        >
          Submit
        </button>
        {score !== null && (
          <div className="mt-4 text-xl font-semibold text-green-600 animate-pulse">
            Your score: {score} / {questions.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;