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
        className="w-full p-6 items-center flex flex-col"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-2xl font-semibold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        >
          URL Checker
        </motion.h1>
        <motion.input
          type="text"
          placeholder="Enter URL"
          className="w-1/2 px-4 py-2 rounded-lg border-2 border-purple-400 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={url}
          onChange={handleInputChange}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
        />
        <motion.button
          className="w-1/6 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={handleButtonClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          Check
        </motion.button>
        {isClicked && (
          <motion.div
            className="w-3/4 flex flex-grow h-6 mt-4 flex-col gap-2 md:bg-gray-300 md:shadow-2xl"
            initial="hidden"
            animate="visible"
            variants={resultVariants}
          >
            <motion.div
              className="mt-8 ml-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
            >
              <motion.h1 className="text-gray-700 font-bold">{`Url: ${url}`}</motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4 } }}>
                Details
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default EnterUrl;
