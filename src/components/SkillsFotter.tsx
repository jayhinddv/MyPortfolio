import React from "react";

// Adjust this import based on your actual image location and handling method
// import ViteLogo from "../../public/vite.svg"; // Example for a specific import

interface MyComponentProps {
  items: Array<{ alt: string; img: string }>; // Use 'string' for image paths
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items && items.map((val, indx) => (
        <div className="p-4" key={indx}>
          <img 
            src={val?.img} // Assuming img is a string path
            alt={val?.alt}
            className="rounded-full w-auto max-h-20"
          />
        </div>
      ))}
    </>
  );
};

export default SkillsFooter;
