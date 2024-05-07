// Form3.tsx

import React from "react";

const Form3 = (props: any) => {
  const formData = props.formData;
  const handleInputChange = props.handleInputChange;
  const handleAddItem = () => {
    const newItems = [
      ...(formData.details.items || []),
      { name: "", description: "", quantity: 0, unitPrice: 0, total: 0 },
    ];
    handleInputChange(
      { target: { name: "items", value: newItems } },
      "details"
    );
  };

  const handleDeleteItem = (index: number) => {
    if (formData.details.items.length > 1) {
      const newItems = formData.details.items.filter(
        (item: any, i: number) => i !== index
      );
      handleInputChange(
        { target: { name: "items", value: newItems } },
        "details"
      );
    }
  };

  const handleItemInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: string
  ) => {
    const { name, value } = e.target;
    const newItems = [...formData.details.items];
    newItems[index][field] = value;

    // Calculate the total for the item
    if (field === "quantity" || field === "unitPrice") {
      newItems[index].total =
        newItems[index].quantity * newItems[index].unitPrice;
    }

    handleInputChange(
      { target: { name: "items", value: newItems } },
      "details"
    );
  };
  return (
    <div className="p-4 dark:bg-gray-900 bg-gray-100">
      <h2 className="text-lg font-bold mb-2">Items</h2>
      {(formData.details.items || []).map((item: any, index: number) => (
        <div
          key={index}
          className="dark:bg-gray-700 bg-gray-300 p-3 rounded my-1 flex space-between flex-wrap"
        >
          <div>
            <label className="w-1/2 block dark:text-gray-300 text-gray-700">
              Name:
              <input
                type="text"
                name={`items[${index}].name`}
                value={item.name}
                onChange={(e) => handleItemInputChange(e, index, "name")}
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="w-1/2 block dark:text-gray-300 text-gray-700">
              Description:
              <input
                type="text"
                name={`items[${index}].description`}
                value={item.description}
                onChange={(e) => handleItemInputChange(e, index, "description")}
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="w-1/2 block dark:text-gray-300 text-gray-700">
              Quantity:
              <input
                type="number"
                name={`items[${index}].quantity`}
                value={item.quantity}
                onChange={(e) => handleItemInputChange(e, index, "quantity")}
                className="px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="w-1/2 block dark:text-gray-300 text-gray-700">
              Unit Price:
              <input
                type="number"
                name={`items[${index}].unitPrice`}
                value={item.unitPrice}
                onChange={(e) => handleItemInputChange(e, index, "unitPrice")}
                className="px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleDeleteItem(index)}
              className="my-2 outline outline-red-500 text-red-500 px-3 py-1 rounded-md"
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddItem}
        className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4"
      >
        Add Item
      </button>
    </div>
  );
};

export default Form3;
