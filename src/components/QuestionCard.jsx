import React from 'react';

const QuestionCard = ({ q, index, currentQuestionIndex, answers, handleChange }) => (
  <div
    className={`question bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 ${index <= currentQuestionIndex ? 'animate-flipIn' : ''}`}
  >
    {index <= currentQuestionIndex ? (
      <>
        <p className="text-lg font-semibold mb-4">Question {index + 1}: {q.question}</p>
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
      </>
    ) : (
      <div className="placeholder flex items-center justify-center h-full text-gray-400">
        <p className="text-lg font-semibold">Answer question {index} to unlock this one</p>
      </div>
    )}
  </div>
);

export default QuestionCard;