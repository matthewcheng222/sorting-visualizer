import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import algorithmDetails from "../algorithms/algorithmDetails";

const generateArray = (size = 25) =>
  Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 5);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const SortVisualizer = () => {
  const [array, setArray] = useState(generateArray());
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [activeBars, setActiveBars] = useState([]);

  const isStopped = useRef(false);

  const visualizeSort = async () => {
    setIsSorting(true);
    isStopped.current = false;

    const animations = algorithmDetails[algorithm].sort(array);

    for (let animation of animations) {
      if (isStopped.current) break;

      if (animation.compare) setActiveBars(animation.compare);
      if (animation.swap || animation.setArray) setArray(animation.array);

      await delay(speed);
      setActiveBars([]);
    }

    setIsSorting(false);
    setActiveBars([]);
  };

  const resetArray = () => {
    isStopped.current = true;
    setArray(generateArray());
    setIsSorting(false);
    setActiveBars([]);
  };

  const stopSorting = () => {
    isStopped.current = true;
    setIsSorting(false);
    setActiveBars([]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-900">
      <header className="py-10 px-4 text-center">
        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sorting Algorithm Visualizer
        </motion.h1>
        <p className="text-gray-600 text-sm">Explore how different sorting algorithms work</p>
      </header>

      <main className="flex flex-col-reverse lg:flex-row gap-6 px-6 max-w-7xl mx-auto w-full pb-16">
        <motion.div
          className="w-full lg:w-1/2 bg-white p-6 rounded-xl shadow border"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Algorithm Info</h2>

          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            disabled={isSorting}
            className="mb-4 w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg cursor-pointer border border-gray-300"
          >
            {Object.keys(algorithmDetails).map((algo) => (
              <option key={algo} value={algo}>{algo}</option>
            ))}
          </select>

          <div className="mb-4">
            <strong className="block mb-1">Steps:</strong>
            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
              {algorithmDetails[algorithm].steps.map((step, idx) => (
                <motion.li key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.05 }}>{step}</motion.li>
              ))}
            </ol>
          </div>

          <p className="mb-1 text-sm"><strong>Time Complexity:</strong> {algorithmDetails[algorithm].complexity.time}</p>
          <p className="mb-4 text-sm"><strong>Space Complexity:</strong> {algorithmDetails[algorithm].complexity.space}</p>

          <div className="flex flex-col gap-2 mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 transition-colors" onClick={visualizeSort} disabled={isSorting}>Start</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-300 transition-colors" onClick={stopSorting} disabled={!isSorting}>Stop</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:bg-gray-300 transition-colors" onClick={resetArray} disabled={isSorting}>Reset</button>
            <div className="mt-3">
              <input type="range" min={10} max={500} value={speed} onChange={(e) => setSpeed(Number(e.target.value))} disabled={isSorting} className="w-full"/>
              <p className="text-center text-xs mt-1 text-gray-500">Speed: {speed}ms</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-1 items-end justify-center h-64 bg-gray-100 p-4 rounded-xl shadow-inner border">
            <AnimatePresence>
              {array.map((value, idx) => (
                <motion.div
                  key={idx}
                  layout
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-md w-[10px] transition-all ${
                    activeBars.includes(idx) ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  style={{ height: `${value * 2}px` }}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </main>

      <footer className="text-center py-6 border-t mt-10 text-sm text-gray-500">
        Built by Matthew Cheng © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default SortVisualizer;