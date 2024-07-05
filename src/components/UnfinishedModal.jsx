import React from 'react';

const UnfinishedModal = ({ handleUnfinishedModalSubmit, handleUnfinishedModalClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4">Incomplete Submission</h2>
      <p className="mb-4 lg:text-lg">You have unanswered questions. Do you still want to submit?</p>
      <button
        onClick={handleUnfinishedModalSubmit}
        className="bg-gray-600 text-white py-2 px-4 mr-2 rounded-lg hover:bg-gray-700 border border-gray-300 shadow-[10px_10px_0_0_gray] rounded-lg hover:shadow-[15px_15px_2px_0_gray] transition-all duration-300 transform hover:scale-105 hover:translate-x-[-5px] hover:translate-y-[-3px]"        >
        Yes, Submit
      </button>
      <button
        onClick={handleUnfinishedModalClose}
        className="bg-indigo-600 text-white py-2 px-4 ml-2 rounded-lg hover:bg-indigo-700 border border-gray-300 shadow-custom-md rounded-lg hover:shadow-custom-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-[-5px] hover:translate-y-[-3px]"      >
        No, Go Back
      </button>
    </div>
  </div>
);

export default UnfinishedModal;