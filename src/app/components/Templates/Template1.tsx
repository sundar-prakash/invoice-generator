import React from 'react';

const Template1 = ({ invoiceData }:any) => {
  const { sender, receiver, details } = invoiceData;

  return (
    <div className="p-4 outline outline-1 text-black">
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold">{sender.name}</h2>
          <p>{sender.address}</p>
          <p>{sender.zipCode} {sender.city}</p>
          <p>{sender.country}</p>
          <p>Email: {sender.email}</p>
          <p>Phone: {sender.phone}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">{receiver.name}</h2>
          <p>{receiver.address}</p>
          <p>{receiver.zipCode} {receiver.city}</p>
          <p>{receiver.country}</p>
          <p>Email: {receiver.email}</p>
          <p>Phone: {receiver.phone}</p>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">{details.type} Details</h2>
        <p>Invoice Number: {details.invoiceNumber}</p>
        <p>Invoice Date: {details.invoiceDate}</p>
        <p>Due Date: {details.dueDate}</p>
        <p>Currency: {details.currency}</p>
        <p>Language: {details.language}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Items</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {details.items.map((item:any, index:number) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Tax, Discount, Shipping, and Payment Information</h2>
        <p>Tax Amount: {details.taxDetails.amount}</p>
        <p>Tax Amount Type: {details.taxDetails.amountType}</p>
        <p>Tax ID: {details.taxDetails.taxID}</p>
        <p>Discount Amount: {details.discountDetails.amount}</p>
        <p>Discount Amount Type: {details.discountDetails.amountType}</p>
        <p>Shipping Cost: {details.shippingDetails.cost}</p>
        <p>Shipping Cost Type: {details.shippingDetails.costType}</p>
        <p>Bank Name: {details.paymentInformation.bankName}</p>
        <p>Account Name: {details.paymentInformation.accountName}</p>
        <p>Account Number: {details.paymentInformation.accountNumber}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Additional Information</h2>
        <p>Additional Notes: {details.additionalNotes}</p>
        <p>Payment Terms: {details.paymentTerms}</p>
        <p>Total Amount in Words: {details.totalAmountInWords}</p>
        <p>Subtotal: {details.subTotal}</p>
        <p>Total Amount: {details.totalAmount}</p>
      </div>
    </div>
  );
};

export default Template1;