import React, { createRef, useState } from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import faqsData from "../data/faqs";
import { FiChevronDown } from "react-icons/fi";

const FAQ = () => {
  const [faqs, setFaqs] = useState(faqsData);
  const [answerHeight, setAnswerHeight] = useState([
    new Array(faqs.length).fill(0),
  ]);
  const [answerRefs, setAnswerRefs] = useState([]);

  useEffect(() => {
    setAnswerRefs((ansRefs) =>
      Array(faqs.length)
        .fill()
        .map((_, i) => ansRefs[i] || createRef())
    );
  }, [faqs.length]);

  const showAnswer = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].hidden = !newFaqs[index].hidden;
    setFaqs(newFaqs);
  };

  return (
    <>
      <Navbar />

      <div className="my-12 mx-[4%]">
        <h1 className="text-3xl">FAQs</h1>

        {faqs.map(({ question, answer, hidden }, idx) => {
          return (
            <div key={idx} className="text-sm">
              <div
                className="py-4 px-8 bg-gray-50 text-[#8b8b8b] my-6 rounded-md cursor-pointer"
                onClick={() => {
                  showAnswer(idx);
                  const newAnswerHeight = [...answerHeight];
                  newAnswerHeight[idx] = answerRefs[idx].current.scrollHeight;
                  setAnswerHeight(newAnswerHeight);
                }}
              >
                <div className="flex justify-between">
                  <p className={`${!hidden ? "text-black font-medium" : ""}`}>
                    {question}
                  </p>
                  <span
                    className={`${
                      !hidden ? "rotate-180" : ""
                    } transition-all ease-in duration-200`}
                  >
                    <FiChevronDown />
                  </span>
                </div>
                <div
                  className="transition-all ease-out duration-300 overflow-hidden"
                  style={
                    !hidden
                      ? { maxHeight: answerHeight[idx] + "px" }
                      : { maxHeight: 0 }
                  }
                >
                  <p ref={answerRefs[idx]} className="pt-4">
                    {answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FAQ;
