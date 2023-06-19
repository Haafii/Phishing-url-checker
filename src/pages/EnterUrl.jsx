// import React, { useState } from 'react'

// function EnterUrl() {
//   const [url, setUrl] = useState('');

//   const handleInputChange = (event) => {
//     setUrl(event.target.value);
//   };

//   const handleButtonClick = () => {
//     console.log('URL:', url);
//   };
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//       <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h1 className="text-2xl font-semibold mb-6">URL Checker</h1>
//         <input
//           type="text"
//           placeholder="Enter URL"
//           className="w-full px-4 py-2 rounded-lg border-2 border-purple-400 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
//           value={url}
//           onChange={handleInputChange}
//         />
//         <button
//           className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//           onClick={handleButtonClick}
//         >
//           Check
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EnterUrl







import React, { useState } from 'react';
import { motion } from 'framer-motion';

function EnterUrl() {
  const [url, setUrl] = useState('');

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleButtonClick = () => {
    console.log('URL:', url);
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: 'linear-gradient(to right, #ff4b1f, #1fddff)',
      }}
      animate={{
        background: ['linear-gradient(to right, #ff4b1f, #1fddff)', 'linear-gradient(to right, #1fddff, #ff4b1f)'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <div className="max-w-md p-6 items-center flex flex-col">
        <h1 className="text-2xl font-semibold mb-6 " >URL Checker</h1>
        <input
          type="text"
          placeholder="Enter URL"
          className="w-full px-4 py-2 rounded-lg border-2 border-purple-400 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={url}
          onChange={handleInputChange}
        />
        <button
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={handleButtonClick}
        >
          Check
        </button>
      </div>
    </motion.div>
  );
}

export default EnterUrl;
