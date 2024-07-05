import React from 'react';

const UnfinishedModal = ({ handleUnfinishedModalSubmit, handleUnfinishedModalClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Incomplete Submission</h2>
      <p className="mb-4">You have unanswered questions. Do you still want to submit?</p>
      <button
        onClick={handleUnfinishedModalSubmit}
        className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 mr-2"
      >
        Yes, Submit
      </button>
      <button
        onClick={handleUnfinishedModalClose}
        className="bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      >
        No, Go Back
      </button>
    </div>
  </div>
);

export default UnfinishedModal;