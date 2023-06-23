import React, { useState } from 'react';
import { motion } from 'framer-motion';

function EnterUrl() {
  const [url, setUrl] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleInputChange = (event) => {
    setUrl(event.target.value);
    setIsClicked(false);
  };

  const handleButtonClick = () => {
    setIsClicked(true);
    console.log('URL:', url);
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const resultVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={`flex ${isClicked ? 'items-top' : 'items-center'} justify-center min-h-screen`}
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
      <motion.div
        className="flex flex-col items-center w-full p-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="mb-6 text-2xl font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        >
          URL Checker
        </motion.h1>
        <motion.input
          type="text"
          placeholder="Enter URL"
          className="w-1/2 px-4 py-2 mb-4 border-2 border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={url}
          onChange={handleInputChange}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
        />
        <motion.button
          className="w-1/6 py-2 font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={handleButtonClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          Check
        </motion.button>
        {isClicked && (
          <motion.div
            className="flex flex-col flex-grow items-center justify-center w-3/4 h-6 gap-2 mt-4 md:bg-gray-300 md:shadow-2xl"
            initial="hidden"
            animate="visible"
            variants={resultVariants}
          >
            <motion.div
              className="mt-8 ml-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
            >
              <motion.h1 className="font-bold text-6xl text-gray-700">{}Phishing</motion.h1>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default EnterUrl;