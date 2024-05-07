// InvoiceFormNav.tsx

import React from 'react';

interface InvoiceFormNavProps {
  currentSection: number;
  onSectionChange: (section: number) => void;
}

const InvoiceFormNav = ({ currentSection, onSectionChange }: InvoiceFormNavProps) => {
  const sections = ['Bill Info', 'Invoice Details', 'Products Details', 'Payment', 'Review'];

  return (
    <div className="flex flex-wrap justify-center mb-4">
      {sections.map((section, index) => (
        <button
          key={index}
          onClick={() => onSectionChange(index)}
          className={`mx-2 my-1 px-4 py-2 rounded-md text-sm sm:text-base ${
            currentSection === index
              ? 'dark:bg-white dark:text-gray-800 bg-gray-800 text-white'
              : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
          }`}
        >
          {`${index + 1}. ${section}`}
        </button>
      ))}
    </div>
  );
};

export default InvoiceFormNav;