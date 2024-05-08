import React from "react";
import getCurrencySymbol from "../Invoice/GetCurrencySymbol";
const Template2 = ({ invoiceData }: any) => {
  const { sender, receiver, details } = invoiceData;
  const currency = getCurrencySymbol(details.currency);
console.log(details.logoSize);

  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
      <div className="mx-auto">
        <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl " style={{border: `solid black ${details.border}px `}}>
          <div className="flex justify-between">
            <div>
              <img
              height={details.logoSize}
              width={details.logoSize}
              src={details.invoiceLogo}
                alt="invoice-logo"
              />

              <h1 className={`mt-2 text-lg md:text-xl font-semibold `} style={{ color: details.companyColor }}>
                {sender.name}
              </h1>
            </div>

            <div className="text-end">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 ">
                {details.type} #
              </h2>
              <span className="mt-1 block text-gray-500 dark:text-neutral-500">
                {details.invoiceNumber}
              </span>

              <address className="mt-4 not-italic text-gray-800 ">
                {sender.address}
                <br />
                {sender.city}
                <br />
                {sender.zipCode}, {sender.country}
                <br />
              </address>
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 ">
                Bill to:
              </h3>
              <h3 className="text-lg font-semibold text-gray-800 ">
                {receiver.name}
              </h3>
              <address className="mt-2 not-italic text-gray-500 dark:text-neutral-500">
                {receiver.address},
                <br />
                {receiver.city}, {receiver.zipCode},
                <br />
                {receiver.country}
                <br />
              </address>
            </div>

            <div className="sm:text-end space-y-2">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 ">
                    Invoice date:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    {details.invoiceDate}
                  </dd>
                </dl>
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 ">
                    Due date:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    {details.dueDate}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
              <div className="hidden sm:grid sm:grid-cols-5">
                <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Item
                </div>
                <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Qty
                </div>
                <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Rate
                </div>
                <div className="text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Amount
                </div>
              </div>
              <div className="hidden sm:block border-b border-gray-200 dark:border-neutral-700"></div>
              {details.items.map((item: any, index: number) => (
                <div
                  key={index}
                  className="grid grid-cols-3 sm:grid-cols-5 gap-2"
                >
                  <div className="col-span-full sm:col-span-2">
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Item
                    </h5>
                    <p className="font-medium text-gray-800 ">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Qty
                    </h5>
                    <p className="text-gray-800 ">
                      {item.quantity}
                    </p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Rate
                    </h5>
                    <p className="text-gray-800 ">
                      {item.unitPrice}
                    </p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Amount
                    </h5>
                    <p className="sm:text-end text-gray-800 ">
                      {currency}
                      {item.total}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            {details.paymentInformation.bankName!=""&&
            <div className="w-full max-w-md sm:text-left space-y-2">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 ">
                    Bank Name:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    {details.paymentInformation.bankName}
                  </dd>
                </dl>
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 ">
                    Account Name:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    {details.paymentInformation.accountName}
                  </dd>
                </dl>
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 ">
                    Account Number:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    {details.paymentInformation.accountNumber}
                  </dd>
                </dl>
              </div>
            </div>}
            <div className="w-full max-w-2xl sm:text-end space-y-2">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 ">
                    Subtotal:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    {currency}
                    {details.subTotal}
                  </dd>
                </dl>
                {details.shippingDetails.cost != 0 && (
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 ">
                      Shipping:
                    </dt>
                    <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                      {details.shippingDetails.costType === "percentage"
                        ? `${details.shippingDetails.cost}%`
                        : `${currency}${details.shippingDetails.cost}`}
                    </dd>
                  </dl>
                )}
                {details.taxDetails.amount != 0 && (
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 ">
                      Tax:
                    </dt>
                    <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                      {details.taxDetails.amountType === "percentage"
                        ? `${details.taxDetails.amount}%`
                        : `${currency}${details.taxDetails.amount}`}
                    </dd>
                  </dl>
                )}
                {details.discountDetails.amount != 0 && (
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 ">
                      Discount:
                    </dt>
                    <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                      {details.discountDetails.amountType === "percentage"
                        ? `${details.discountDetails.amount}%`
                        : `${currency}${details.discountDetails.amount}`}
                    </dd>
                  </dl>
                )}
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 ">
                    Total:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    {currency}
                    {details.totalAmount}
                  </dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12">
            <h4 className="text-lg font-semibold text-gray-800 ">
              Thank you!
            </h4>
            <p className="text-gray-500 dark:text-neutral-500">
              If you have any questions concerning this invoice, use the
              following contact information:
            </p>
            <div className="mt-2">
              <p className="block text-sm font-medium text-gray-800 ">
                {sender.email}
              </p>
              <p className="block text-sm font-medium text-gray-800 ">
                {sender.phone}
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-500 dark:text-neutral-500">
            © {new Date().getFullYear()} {sender.name}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template2;
