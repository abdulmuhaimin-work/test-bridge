import React from 'react';

const NameModal = ({ name, setName, handleModalSubmit, handleModalClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Enter your name</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg w-full mb-4"
      />
      <div className="flex justify-end">
        <button
          onClick={handleModalClose}
          className="bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 mr-2"
        >
          Cancel
        </button>
        <button
          onClick={handleModalSubmit}
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
);

export default NameModal;