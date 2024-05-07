import React, { useState } from "react";
import { jsPDF } from "jspdf";
import Template1 from "../Templates/Template1";
import { LivePreview } from "./InvoicePage";
const SaveButton = (props: any) => {
  const formData = props.formData;
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSave = () => {
        const divToPrint = document.getElementById('invoice-view')!;
        
        // Create a new window for printing
        const newWindow = window.open('', '_blank')!;
        
        // Write the content of the div to the new window
        newWindow.document.write(divToPrint.innerHTML);
        
        // Wait for the content to load
        newWindow.document.addEventListener('DOMContentLoaded', () => {
          // Print the content
          newWindow.print();
          
          // Close the window after printing
          newWindow.close();
        });
      
      
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleSave}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
      >
        <span className="mr-2">Save as PDF</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SaveButton;