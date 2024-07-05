import React from 'react';
import questions from '../questions';

function ScoreModal({ score, scores, handleClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 min-w-80">
        <h2 className="text-2xl font-bold mb-2">Your Score</h2>
        <p className="text-xl mb-4">
          {score !== null ? `${score}/${questions.length}` : 'You have not submitted your answers yet.'}
        </p>
        <h3 className="text-xl font-semibold mb-2">High Scores:</h3>
        <div className="flex justify-center">
          <table className="mb-4 w-3/4 text-left border border-separate border-gray-300 shadow-custom-md rounded-lg">
            <thead>
              <tr>
                <th className="border-b-2 p-2 text-center">Name</th>
                <th className="border-b-2 p-2 text-center">Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index}>
                  <td className="border-b p-2 text-center">{score.name}</td>
                  <td className="border-b p-2 text-center">{score.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={handleClose}
          className="bg-indigo-600 text-white py-2 px-4 ml-2 rounded-lg hover:bg-indigo-700 border border-gray-300 shadow-custom-md rounded-lg hover:shadow-custom-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-[-5px] hover:translate-y-[-3px]"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ScoreModal;