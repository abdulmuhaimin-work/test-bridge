import React, { useEffect, useRef } from 'react';

const NameModal = ({ name, setName, handleModalSubmit, handleModalClose }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleModalSubmit();
      } else if (e.key === 'Escape') {
        handleModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleModalSubmit, handleModalClose]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Enter your name</h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={32}
          className="border border-gray-300 p-2 rounded-lg w-full mb-4"
        />
        <div className="flex justify-center">
          <button
            onClick={handleModalClose}
            className="bg-gray-600 text-white py-2 px-4 mr-2 rounded-lg hover:bg-gray-700 border border-gray-300 shadow-[10px_10px_0_0_gray] rounded-lg hover:shadow-[15px_15px_2px_0_gray] transition-all duration-300 transform hover:scale-105 hover:translate-x-[-5px] hover:translate-y-[-3px]"
          >
            Cancel
          </button>
          <button
            onClick={handleModalSubmit}
            className="bg-indigo-600 text-white py-2 px-4 ml-2 rounded-lg hover:bg-indigo-700 border border-gray-300 shadow-custom-md rounded-lg hover:shadow-custom-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-[-5px] hover:translate-y-[-3px]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameModal;
