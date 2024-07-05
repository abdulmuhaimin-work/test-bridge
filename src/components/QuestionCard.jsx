const QuestionCard = ({ q, index, currentQuestionIndex, answers, handleChange }) => (
    <div className={`relative p-6 bg-white border border-gray-300 shadow-custom-md rounded-lg hover:shadow-custom-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-[-5px] hover:translate-y-[-3px] ${index <= currentQuestionIndex ? 'animate-flipIn' : ''}`}>
      {/* <div className="absolute top-[-5px] left-[-5px] right-[-5px] bottom-[-5px] border border-gray-300 rounded-lg pointer-events-none"></div> */}
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
                <span className={`text-gray-700 ${answers[index] === option ? 'font-bold' : ''}`}>{option}</span>
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