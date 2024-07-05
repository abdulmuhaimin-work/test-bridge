import React, { useState, useEffect } from 'react';
import './App.css';
import questions from './questions.json';
import NameModal from './components/NameModal';
import UnfinishedModal from './components/UnfinishedModal';
import QuestionCard from './components/QuestionCard';
import ScoreModal from './components/ScoreModal';
import { supabase } from './utils/supabaseClient';

function App() {
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnfinishedModalOpen, setIsUnfinishedModalOpen] = useState(false);
  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    const { data, error } = await supabase
      .from('highscores')
      .select('score, name')
      .order('score', { ascending: false });

    if (error) {
      console.error('Error fetching scores:', error);
    } else {
      setScores(data);
    }
  };

  const updateHighScore = async (newScore, playerName) => {
    const { data, error } = await supabase
      .from('highscores')
      .insert([{ score: newScore, name: playerName }]);

    if (error) {
      console.error('Error updating high score:', error);
    } else {
      console.log('High score updated successfully');
      fetchScores();
    }
  };

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    if (index === currentQuestionIndex && index < questions.length - 1) {
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
    updateHighScore(newScore, name);
    setIsScoreModalOpen(true);
  };

  const handleModalSubmit = () => {
    if (name.trim() !== '') {
      setIsModalOpen(false);

      let newScore = 0;
      answers.forEach((answer, index) => {
        if (answer === questions[index].correct) {
          newScore += 1;
        }
      });
      setScore(newScore);
      updateHighScore(newScore, name);
      setIsScoreModalOpen(true);
    }
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
    updateHighScore(newScore, name);
    setIsScoreModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-600">Rounding Off To Nearest 10</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg w-full md:w-1/2"
      />
      <div className="flex justify-center items-center">
        <div
          className="w-32 p-2 text-gray-600 text-xl cursor-pointer hover:scale-105 hover:translate-x-[-5px] hover:translate-y-[-3px] transition-all duration-300"
          onClick={() => setIsScoreModalOpen(true)}
        >
          Score: {score !== null ? score : 'N/A'}
        </div>
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
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 border border-gray-300 shadow-custom-md rounded-lg hover:shadow-custom-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-[-5px] hover:translate-y-[-3px]"
        >
          Submit
        </button>
      </div>

      {isModalOpen && (
        <NameModal
          name={name}
          setName={setName}
          handleModalSubmit={handleModalSubmit}
          handleModalClose={() => setIsModalOpen(false)}
        />
      )}

      {isUnfinishedModalOpen && (
        <UnfinishedModal
          handleUnfinishedModalSubmit={handleUnfinishedModalSubmit}
          handleUnfinishedModalClose={() => setIsUnfinishedModalOpen(false)}
        />
      )}

      {isScoreModalOpen && (
        <ScoreModal
          score={score}
          scores={scores}
          handleClose={() => setIsScoreModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;