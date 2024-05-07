import { useState } from "react";

export default function Form1(props: any) {
  const formData = props.formData;
  const handleInputChange = props.handleInputChange;
  return (
    <div className="flex flex-col md:flex-row">
        
      {/* Sender Details */}
      <div className="md:w-1/2 p-4 ">
        <h2 className="text-lg font-bold mb-2">Bill From</h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              Name:
              <input
                type="text"
                name="name"
                required
                value={formData.sender.name}
                onChange={(e) => handleInputChange(e, "sender")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              Address:
              <input
                type="text"
                required
                name="address"
                value={formData.sender.address}
                onChange={(e) => handleInputChange(e, "sender")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              Zip Code:
              <input
                type="text"
                required
                name="zipCode"
                value={formData.sender.zipCode}
                onChange={(e) => handleInputChange(e, "sender")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              City:
              <input
                type="text"
                required
                name="city"
                value={formData.sender.city}
                onChange={(e) => handleInputChange(e, "sender")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              Country:
              <input
                type="text"
                required
                name="country"
                value={formData.sender.country}
                onChange={(e) => handleInputChange(e, "sender")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              Email:
              <input
                type="email"
                required
                name="email"
                value={formData.sender.email}
                onChange={(e) => handleInputChange(e, "sender")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              Phone:
              <input
                type="tel"
                name="phone"
                required
                value={formData.sender.phone}
                onChange={(e) => handleInputChange(e, "sender")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Receiver Details */}
      <div className="md:w-1/2 p-4 ">
        <h2 className="text-lg font-bold mb-2">To</h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              Name:
              <input
                type="text"
                name="name"
                required
                value={formData.receiver.name}
                onChange={(e) => handleInputChange(e, "receiver")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              Address:
              <input
                type="text"
                required
                name="address"
                value={formData.receiver.address}
                onChange={(e) => handleInputChange(e, "receiver")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              Zip Code:
              <input
                type="text"
                name="zipCode"
                required
                value={formData.receiver.zipCode}
                onChange={(e) => handleInputChange(e, "receiver")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              City:
              <input
                type="text"
                required
                name="city"
                value={formData.receiver.city}
                onChange={(e) => handleInputChange(e, "receiver")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              Country:
              <input
                type="text"
                required
                name="country"
                value={formData.receiver.country}
                onChange={(e) => handleInputChange(e, "receiver")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              Email:
              <input
                type="email"
                required
                name="email"
                value={formData.receiver.email}
                onChange={(e) => handleInputChange(e, "receiver")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
          <div>
            <label className="block dark:text-gray-300 text-gray-700">
              Phone:
              <input
                type="tel"
                name="phone"
                required
                value={formData.receiver.phone}
                onChange={(e) => handleInputChange(e, "receiver")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white dark:bg-gray-600 dark:text-white"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
