import React from 'react';

const PaymentForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Payment Form
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="card-number" className="sr-only">
                Card number
              </label>
              <input
                id="card-number"
                name="card-number"
                type="text"
                autoComplete="cc-number"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Card number"
              />
            </div>
            <div>
              <label htmlFor="expiry" className="sr-only">
                Expiry
              </label>
              <input
                id="expiry"
                name="expiry"
                type="text"
                autoComplete="cc-exp"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="sr-only">
                CVV
              </label>
              <input
                id="cvv"
                name="cvv"
                type="text"
                autoComplete="cc-csc"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="CVV"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
