import { useCallback, useEffect } from "react";
import inWords from "./AmountInWords";

export default function Form5(props: any) {
  const formData = props.formData;
  const handleInputChange = props.handleInputChange;
  const calculateSubtotal = () => {
    let subtotal = 0;
    formData.details.items.forEach((item: any) => {
      subtotal += item.quantity * item.unitPrice;
    });
    return subtotal;
  };
  function generateInvoiceString(billingDate: any, customerName: string) {
    const formattedDate = billingDate
      .toLocaleDateString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "");
    const formattedCustomerName = customerName.slice(0, 2).toUpperCase();
    const invoiceString = `${formattedCustomerName}-${formattedDate}`;
    return invoiceString;
  }
  function convertStringToDate(dateString: any) {
    const [year, month, day] = dateString.split("-");
    return new Date(year, month - 1, day);
  }

  const calculateTotalAmount = () => {
    const subtotal = calculateSubtotal();
    const taxAmount =
      formData.details.taxDetails.amountType === "amount"
        ? formData.details.taxDetails.amount
        : subtotal * (formData.details.taxDetails.amount / 100);
    const discountAmount =
      formData.details.discountDetails.amountType === "amount"
        ? formData.details.discountDetails.amount
        : subtotal * (formData.details.discountDetails.amount / 100);
    const shippingCost =
      formData.details.shippingDetails.costType === "amount"
        ? formData.details.shippingDetails.cost
        : subtotal * (formData.details.shippingDetails.cost / 100);
    const totalAmount = subtotal + taxAmount - discountAmount + shippingCost;
    handleInputChange(
      { target: { name: "totalAmount", value: totalAmount } },
      "details"
    );
    handleInputChange(
      { target: { name: "totalAmountInWords", value: inWords(totalAmount) } },
      "details"
    );
    handleInputChange(
      { target: { name: "subTotal", value: subtotal } },
      "details"
    );
    console.log(convertStringToDate(formData.details.invoiceDate));
if(formData.details.invoiceNumber==""){
    handleInputChange(
      {
        target: {
          name: "invoiceNumber",
          value: generateInvoiceString(
            new Date(2022, 4, 31),
            formData.receiver.name
          ),
        },
      },
      "details"
    );}
    return totalAmount;
  };
  useEffect(() => {
    calculateTotalAmount();
  }, []);
  return (
    <div className="p-4 dark:bg-gray-900 bg-gray-100">
      <h2 className="text-lg font-bold mb-2">Additional Information</h2>
      <label className="block dark:text-gray-300 text-gray-700">
        Additional Notes:
        <textarea
          name="additionalNotes"
          value={formData.details.additionalNotes}
          onChange={(e) => handleInputChange(e, "details")}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
        />
      </label>
      <label className="block dark:text-gray-300 text-gray-700">
        Payment Terms:
        <input
          type="text"
          name="paymentTerms"
          value={formData.details.paymentTerms}
          onChange={(e) => handleInputChange(e, "details")}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
        />
      </label>

      <label className="block dark:text-gray-300 text-gray-700">
        PDF Template:
        <select
          name="pdfTemplate"
          value={formData.pdfTemplate}
          onChange={(e) => handleInputChange(e, "pdfTemplate")}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
        >
          <option value={1}>Template 1</option>
          <option value={2}>Template 2</option>
          <option value={3}>Template 3</option>
        </select>
      </label>
      <label className="block dark:text-gray-300 text-gray-700">
        Subtotal:
        <input
          type="number"
          name="subTotal"
          value={formData.details.subTotal}
          onChange={(e) => handleInputChange(e, "subTotal")}
          disabled
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
        />
      </label>
      <label className="block dark:text-gray-300 text-gray-700">
        Total Amount:
        <input
          type="number"
          name="totalAmount"
          value={formData.details.totalAmount}
          onChange={(e) => handleInputChange(e, "totalAmount")}
          disabled
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
        />
      </label>
      <label className="block dark:text-gray-300 text-gray-700">
        Total Amount in Words:
        <p
          className="w-full px-3 py-2 border rounded-md focus:outline-none
          focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
        >
          {formData.details.totalAmountInWords}
        </p>
      </label>
    </div>
  );
}
