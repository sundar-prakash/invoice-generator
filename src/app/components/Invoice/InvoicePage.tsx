// InvoiceForm.tsx

import React, { useRef, useState } from "react";
import invoiceData from "./InvoiceData.json";
import Form1 from "./Form1";
import Form4 from "./Form4";
import Form5 from "./Form5";
import Form2 from "./Form2";
import Form3 from "./Form3";
import InvoiceFormNav from "./InvoiceFormNav";
import SaveButton from "./SaveButton";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";

export default function InvoiceForm() {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState(invoiceData);
  const PdfRef= useRef();


  const handleNextSection = () => {
    setCurrentSection(currentSection + 1);
  };

  const handlePrevSection = () => {
    setCurrentSection(currentSection - 1);
  };
  const handleExportData = () => {
    // Convert the formData object to a JSON string
    const jsonData = JSON.stringify(formData);

    // Create a download link for the JSON data
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute(
      "href",
      "data:text/json;charset=utf-8," + encodeURIComponent(jsonData)
    );
    downloadLink.setAttribute("download", "form-data.json");

    // Append the download link to the document and click it
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleImportData = () => {
    // Create a file input element
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";

    // Add an event listener to the file input
    fileInput.addEventListener("change", (event) => {
      const file = (event.target! as HTMLInputElement).files![0];
      if (file) {
        // Read the file contents
        const reader = new FileReader();
        reader.onload = () => {
          // Parse the JSON data and update the formData state
          const importedData = JSON.parse(reader.result as string);
          setFormData(importedData);
        };
        reader.readAsText(file);
      }
    });

    // Append the file input to the document and click it
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    path: string
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [path]: {
        ...prevData[path as keyof typeof prevData],
        [name]: value,
      },
    }));
  };

  const handleSectionChange = (section: number) => {
    setCurrentSection(section);
  };
  return (
    <div className={`flex flex-col md:flex-row dark:bg-gray-700 dark:text-white bg-white text-gray-800`}>
      
      {/* Form Section */}

      <div className={`md:w-1/2 p-4 dark:bg-gray-700 bg-gray-100`}>
      <div className="flex justify-end mt-4">
        <div className="flex space-x-2">
          <button
            onClick={handleExportData}
            className="flex bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
</svg>Export

          </button>
          <button
            onClick={handleImportData}
            className="flex bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
</svg>Import

          </button>
        </div>
      </div>
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg w-full max-w-4xl p-6">
          <InvoiceFormNav
            currentSection={currentSection}
            onSectionChange={handleSectionChange}
          />
          <h1 className="text-2xl font-bold mb-4 dark:text-white">
            Invoice Form
          </h1>
          {currentSection === 0 && (
            <Form1 formData={formData} handleInputChange={handleInputChange} />
          )}
          {currentSection === 1 && (
            <Form2 formData={formData} handleInputChange={handleInputChange} />
          )}
          {currentSection === 2 && (
            <Form3 formData={formData} handleInputChange={handleInputChange} />
          )}
          {currentSection === 3 && (
            <Form4 formData={formData} handleInputChange={handleInputChange} />
          )}
          {currentSection === 4 && (
            <Form5 formData={formData} handleInputChange={handleInputChange} />
          )}
          <div className="flex justify-between mt-4">
            {currentSection > 0 && (
              <button
                onClick={handlePrevSection}
                className="bg-gray-500 flex space-between hover:bg-gray-600 text-white px-4 py-2 rounded-md"
              >
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
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                Previous
              </button>
            )}
            {currentSection < 4 && (
              <button
                onClick={handleNextSection}
                className="dark:bg-white text-white dark:text-black bg-gray-900 flex space-between hover:bg-gray-300  px-4 py-2 rounded-md"
              >
                Next
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
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            )}
            {currentSection === 4 && (
              <SaveButton eleRef={PdfRef} formData={formData}/>
            )}
          </div>
        </div>
      </div>

      {/* Live Preview Section */}
      <LivePreview refID={PdfRef} formData={formData} />
    </div>
  );
}
export function LivePreview(props:any){
  return(
    <div ref={props.refID} className={`md:w-1/2 p-4 bg-white text-gray-900'}`} id="invoice-view">
        <Template2 invoiceData={props.formData} />
      </div>
  );
}