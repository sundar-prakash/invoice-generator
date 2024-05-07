import { useEffect, useState } from "react";

export default function Form4(props: any) {
  const formData = props.formData;
//   const [formData, setFormData] = useState(formData1);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "shippingDetails.cost" ? parseFloat(value) : value;

    // setFormData((prevFormData: any) => ({
    //   ...prevFormData,
    //   [name.split(".")[0]]: {
    //     ...prevFormData[name.split(".")[0]],
    //     [name.split(".")[1]]: parsedValue,
    //   },
    // }));
  };
  useEffect(() => {
    props.handleInputChange(
      { target: { name: "taxDetails", value: formData.taxDetails } },
      "details"
    );
    props.handleInputChange(
      { target: { name: "discountDetails", value: formData.discountDetails } },
      "details"
    );
    props.handleInputChange(
      { target: { name: "shippingDetails", value: formData.shippingDetails } },
      "details"
    );
    props.handleInputChange(
      {
        target: {
          name: "paymentInformation",
          value: formData.paymentInformation,
        },
      },
      "details"
    );
  }, [formData]);

  return (
    <div className="p-4 dark:bg-gray-900 bg-gray-100">
      <h2 className="text-lg font-bold mb-2">
        Tax, Discount, Shipping, and Payment Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tax Details */}
        <div>
          <h3 className="text-lg font-bold mb-2">Tax Details</h3>
          <label className="block dark:text-gray-300 text-gray-700">
            Amount:
            <input
              required
              type="number"
              name="taxDetails.amount"
              value={formData.taxDetails.amount}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            />
          </label>
          <label className="block dark:text-gray-300 text-gray-700">
            Amount Type:
            <select
              name="taxDetails.amountType"
              value={formData.taxDetails.amountType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            >
              <option value="amount">Amount</option>
              <option value="percentage">Percentage</option>
            </select>
          </label>
          <label className="block dark:text-gray-300 text-gray-700">
            Tax ID:
            <input
              type="text"
              name="taxDetails.taxID"
              value={formData.taxDetails.taxID}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            />
          </label>
        </div>
        {/* Discount Details */}
        <div>
          <h3 className="text-lg font-bold mb-2">Discount Details</h3>
          <label className="block dark:text-gray-300 text-gray-700">
            Amount:
            <input
              required
              type="number"
              name="discountDetails.amount"
              value={formData.discountDetails.amount}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            />
          </label>
          <label className="block dark:text-gray-300 text-gray-700">
            Amount Type:
            <select
              name="discountDetails.amountType"
              value={formData.discountDetails.amountType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            >
              <option value="amount">Amount</option>
              <option value="percentage">Percentage</option>
            </select>
          </label>
        </div>
        {/* Shipping Details */}
        <div>
          <h3 className="text-lg font-bold mb-2">Shipping Details</h3>
          <label className="block dark:text-gray-300 text-gray-700">
            Cost:
            <input
              required
              type="number"
              name="shippingDetails.cost"
              value={formData.shippingDetails.cost}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            />
          </label>
          <label className="block dark:text-gray-300 text-gray-700">
            Cost Type:
            <select
              name="shippingDetails.costType"
              value={formData.shippingDetails.costType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            >
              <option value="amount">Amount</option>
              <option value="percentage">Percentage</option>
            </select>
          </label>
        </div>
        {/* Payment Information */}
        <div>
          <h3 className="text-lg font-bold mb-2">Payment Information</h3>
          <label className="block dark:text-gray-300 text-gray-700">
            Bank Name:
            <input
              required
              type="text"
              name="paymentInformation.bankName"
              value={formData.paymentInformation.bankName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            />
          </label>
          <label className="block dark:text-gray-300 text-gray-700">
            Account Name:
            <input
              type="text"
              name="paymentInformation.accountName"
              value={formData.paymentInformation.accountName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            />
          </label>
          <label className="block dark:text-gray-300 text-gray-700">
            Account Number:
            <input
              type="text"
              required
              name="paymentInformation.accountNumber"
              value={formData.paymentInformation.accountNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
