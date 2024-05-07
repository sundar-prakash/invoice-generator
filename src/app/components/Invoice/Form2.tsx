import React from 'react';

const Form2 = (props: any) => {
    const formData = props.formData;
  const handleInputChange = props.handleInputChange;

  return (
    <div className=" p-4 dark:bg-gray-900 bg-gray-100">
      <h2 className="text-lg font-bold mb-2">Invoice Details</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
        <label className="block dark:text-gray-300 text-gray-700">
        Bill Type:
        <select
          name="type"
          value={formData.details.type}
          onChange={(e) => handleInputChange(e, "details")}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
        >
          <option value={"Invoice"}>Invoice</option>
          <option value={"Quote"}>Quote</option>
          <option value={"Bill"}>Bill</option>
        </select>
      </label>
          <label className="block dark:text-gray-300 text-gray-700">
            Invoice Logo:
            <input
              type="text"
              required
              name="invoiceLogo"
              value={formData.details.invoiceLogo}
              onChange={(e) => handleInputChange(e, 'details')}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            />
          </label>
        </div>
        <div>
          <label className="block dark:text-gray-300 text-gray-700">
            Invoice Number:
            <input
              type="text"
              required
              title="Leave it blank for auto-generation"
              name="invoiceNumber"
              value={formData.details.invoiceNumber}
              onChange={(e) => handleInputChange(e, 'details')}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            />
            <span>Leave it blank for auto-generation</span>
          </label>
        </div>
        <div>
          <label className="block dark:text-gray-300 text-gray-700">
            Invoice Date:
            <input
              required
              type="date"
              name="invoiceDate"
              value={formData.details.invoiceDate}
              onChange={(e) => handleInputChange(e, 'details')}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            />
          </label>
        </div>
        <div>
          <label className="block dark:text-gray-300 text-gray-700">
            Due Date:
            <input
              required
              type="date"
              name="dueDate"
              value={formData.details.dueDate}
              onChange={(e) => handleInputChange(e, 'details')}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            />
          </label>
        </div>
        <div>
          <label className="block dark:text-gray-300 text-gray-700">
            Currency:
            <select
              name="currency"
              value={formData.details.currency}
              onChange={(e) => handleInputChange(e, 'details')}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </label>
        </div>
        <div>
          <label className="block dark:text-gray-300 text-gray-700">
            Language:
            <select
              name="language"
              value={formData.details.language}
              onChange={(e) => handleInputChange(e, 'details')}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </label>
        </div>
        
      </div>
    </div>
  );
};

export default Form2;