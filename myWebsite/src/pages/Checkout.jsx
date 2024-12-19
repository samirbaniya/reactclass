function Checkout() {
  return (
    <div className="flex justify-center py-8">
      <form className="flex flex-col gap-4 w-1/2 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900">Checkout</h2>
        <label className="flex flex-col gap-2">
          Name:
          <input
            type="text"
            name="name"
            className="border border-gray-300 rounded-md p-3"
          />
        </label>
        <label className="flex flex-col gap-2">
          Email:
          <input
            type="email"
            name="email"
            className="border border-gray-300 rounded-md p-3"
          />
        </label>
        <label className="flex flex-col gap-2">
          Address:
          <input
            type="text"
            name="address"
            className="border border-gray-300 rounded-md p-3"
          />
        </label>
        <label className="flex flex-col gap-2">
          Payment Method:
          <select
            name="paymentMethod"
            className="border border-gray-300 rounded-md p-3"
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-5 rounded"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;

