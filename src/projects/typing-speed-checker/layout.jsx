import React, { useEffect, useState } from "react";

const TypingSpeedTest = () => {
    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(60);
    const [isTimeRunning, setIsTimeRunning] = useState(true);

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    useEffect(() => {
        if (isTimeRunning) {
            const interval = setInterval(() => {
                setTimeRemaining((time) => {
                    if (time <= 0) {
                        clearInterval(interval);
                        setIsTimeRunning(false);
                        return 0;
                    }
                    return time - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isTimeRunning]);

    const testingParagraph =
        "The quick brown fox jumps over the lazy dog, bringing joy to everyone watching. As the sun sets, colors of red, orange, and purple fill the sky. Birds chirp softly, signaling the end of the day. In a quiet village, children laugh, playing games near the stream. Life flows like water, steady yet ever-changing. Kindness spreads warmth, creating bonds stronger than stone. A simple smile brightens someone's world. Words hold power, shaping thoughts, inspiring action.";

    const getWordCount = () => {
        const words = text.trim().split(/\s+/).filter(Boolean);
        return words.length;
    };

    const renderText = () => {
        return testingParagraph.split("").map((char, index) => {
            let color =
                index < text.length
                    ? char === text[index]
                        ? "text-green-400"
                        : "text-red-500"
                    : "text-gray-300";

            return (
                <span key={index} className={`${color}`}>
                    {char}
                </span>
            );
        });
    };

    const calcCorrectStrokes = () => {
        let correctStrokes = 0;
        for (let i = 0; i < Math.min(testingParagraph.length, text.length); i++) {
            if (text[i] === testingParagraph[i]) {
                correctStrokes++;
            }
        }
        return correctStrokes;
    };

    const accuracy = ((calcCorrectStrokes() / testingParagraph.length) * 100).toFixed(2);

    return (
        <div className="bg-gray-700 h-screen p-20">
            {/* Header */}
            <h1 className="text-white text-4xl text-center font-bold mb-8">
                Typing Speed Test
            </h1>

            {/* Timer */}
            {isTimeRunning ? (
                <div>
                    <div className="text-green-400 text-2xl font-semibold text-center mb-6">
                        Time Remaining: {`${timeRemaining}s`}
                    </div>
                    <div className="text-lg mb-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
                        {renderText()}
                    </div>
                    <textarea
                        className="border-2 border-gray-300 bg-gray-800 p-2 mt-4 w-full h-[30vh] text-gray-100"
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Type here..."
                    />
                </div>
            ) : (
                <div>
                    <div className=" text-2xl font-semibold text-center mb-6">
                        <button
                            onClick={() => {
                                setIsTimeRunning(true);
                                setText("");
                                setTimeRemaining(60);
                            }}
                            className="bg-gray-800 hover:scale-110 duration-200 hover:bg-gray-950 rounded-full px-8 py-2 text-white font-semibold mt-8"
                        >
                            Restart Test
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <section className="bg-gray-800 rounded-2xl text-center px-8 py-2">
                            <p className="text-white font-semibold mb-2">Words Typed/WPM</p>
                            <p className="text-2xl font-bold text-green-300">{getWordCount()}</p>
                        </section>
                        <section className="bg-gray-800 rounded-2xl text-center px-8 py-2">
                            <p className="text-white font-semibold mb-2">Correct Strokes</p>
                            <p className="text-2xl font-bold text-blue-400">{calcCorrectStrokes()}</p>
                        </section>
                        <section className="bg-gray-800 rounded-2xl text-center px-8 py-2">
                            <p className="text-white font-semibold mb-2">Accuracy</p>
                            <p className="text-2xl font-bold text-pink-300">{accuracy}%</p>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TypingSpeedTest;
