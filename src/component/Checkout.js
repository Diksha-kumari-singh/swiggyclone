import { useSelector } from "react-redux"

export default function Checkout(){
     
    const items = useSelector(state=>state.cartslice.items);

    return(
        <>
       {/* Header */}
        <div className="w-full bg-orange-500 py-4 shadow-md">
            <div className="w-[85%] mx-auto flex justify-between items-center">
                <img
                className="w-36"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                alt="logo"
                />
                <h3 className="text-white text-2xl font-semibold">
                SECURE CHECKOUT
                </h3>
            </div>
        </div>

        {/* Cart Section */}
        <div className="w-[85%] mx-auto mt-8">
    
        {/* Items */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
            {items.map((value) => (
            <div
            key={value.id}
            className="flex justify-between items-center border-b py-4"
            >
            <div className="flex gap-4 items-center">
            <img
              className="w-28 h-20 object-cover rounded-xl"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                value.imageId
              }
              alt={value.name}
            />

            <div>
              <p className="font-semibold text-lg">
                {value.name}
              </p>
              <p className="text-gray-500">
                Quantity: {value.quantity}
              </p>
            </div>
          </div>

            <p className="font-semibold text-lg text-gray-800">
                ₹ {value.defaultPrice / 100 * value.quantity}
            </p>
            </div>
            ))}
        </div>

            {/* Bill Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mt-6">
        <h2 className="text-xl font-bold mb-4">Bill Details</h2>

        {/* Total Calculation */}
        <div className="flex justify-between text-lg">
        <span>Total Price</span>
        <span>
          ₹{" "}
          {items.reduce(
            (total, item) =>
              total + (item.defaultPrice / 100) * item.quantity,
            0
          )}
        </span>
        </div>

        <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-orange-600 transition">
        Proceed to Pay
        </button>
        </div>
        </div>
        </>
       
    )
}