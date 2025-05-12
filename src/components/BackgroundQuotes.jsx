// src/components/BackgroundQuotes.jsx
import { motion } from "framer-motion";
import './BackgroundQuotes.css';

const lines = [
  'Debugging life with a smirk.',
  'Love and hate relationship with ";" — mostly hate.',
  'Built different. Compiled weird.',
  'Throwing exceptions in code and gym.',
  'Stuck between stars and syntax errors.',
  'Wrote it. Broke it. Fixed it. Forgot how.',
  'Not a bug. A spontaneous feature manifestation.',
  'Some commit messages were never meant to be read.',
  'lost in source code.',
  'Ctrl + Z is my therapy',
  'Pixel astronaut in a spaghetti code universe.',
  'With great code comes great stack traces.',
  'Code slinger by day, powerlifter by night.',
  'Ctrl + C calories, Ctrl + V protein.',
  'Lift heavy. Code clean.',
  'Powerlifting my way through production bugs.',
  'Chaotic Neutral — unless semicolons are involved.',
  'Probably in a quantum state of chill and cracked.',
  'Commit messages and emotional damage — both frequent.'
];

const getRandomPosition = () => ({
  top: `${Math.random() * 90}%`,
  left: `${Math.random() * 90}%`,
});

export default function BackgroundQuotes() {
  return (
    <div className="background-quotes-wrapper">
      {lines
  .sort(() => 0.5 - Math.random()) // to shuffle the lines
  .slice(0, 8) // show only 8 at a time
  .map((line, i) => {
        const { top, left } = getRandomPosition();
        return (
          <motion.div
            key={i}
            className="quote-line"
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: [0, 0.4, 0], 
                y:  [0, 90, 180]
              }}
              transition={{
                duration: 22 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              
            style={{ top, left }}
          >
            {line}
          </motion.div>
        );
      })}
    </div>
  );
}
