import React, { useState } from 'react';
import './App.css';
import questions from './questions.json';
import NameModal from './components/NameModal';
import UnfinishedModal from './components/UnfinishedModal';
import QuestionCard from './components/QuestionCard';

function App() {
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnfinishedModalOpen, setIsUnfinishedModalOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    if (index < questions.length - 1) {
      setCurrentQuestionIndex(index + 1);
    }
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      setIsUnfinishedModalOpen(true);
      return;
    }

    if (name.trim() === '') {
      setIsModalOpen(true);
      return;
    }

    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const handleModalSubmit = () => {
    if (name.trim() !== '') {
      setIsModalOpen(false);
      handleSubmit();
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleUnfinishedModalClose = () => {
    setIsUnfinishedModalOpen(false);
  };

  const handleUnfinishedModalSubmit = () => {
    setIsUnfinishedModalOpen(false);
    if (name.trim() === '') {
      setIsModalOpen(true);
      return;
    }
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
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-600">Rounding Off To Nearest 10</h1>
      <div className="text-center mb-8">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full md:w-1/2"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {questions.map((q, index) => (
          <QuestionCard
            key={index}
            q={q}
            index={index}
            currentQuestionIndex={currentQuestionIndex}
            answers={answers}
            handleChange={handleChange}
          />
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
          <div className={`mt-4 text-xl font-semibold ${score < questions.length / 2 ? 'text-red-600' : 'text-green-600'}`}>
            Your score: {score} / {questions.length}
          </div>
        )}
      </div>
      {isModalOpen && (
        <NameModal
          name={name}
          setName={setName}
          handleModalSubmit={handleModalSubmit}
          handleModalClose={handleModalClose}
        />
      )}
      {isUnfinishedModalOpen && (
        <UnfinishedModal
          handleUnfinishedModalSubmit={handleUnfinishedModalSubmit}
          handleUnfinishedModalClose={handleUnfinishedModalClose}
        />
      )}
    </div>
  );
}

export default App;