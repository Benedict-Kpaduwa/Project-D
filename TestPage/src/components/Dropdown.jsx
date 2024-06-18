import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <div
        className={`flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 ${!isOpen ? "bg-[#1FBA4A]" : null}`}
        onClick={onClick}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <span className={`text-xl `}>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="p-4 bg-white">{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto border border-gray-200 rounded-md overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
