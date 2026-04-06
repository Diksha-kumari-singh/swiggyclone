import { useSelector } from "react-redux"
import { Link } from "react-router";


export default function RestHeader(){

    const counter = useSelector(state=> state.cartslice.count);
    
    return (
              <div className="w-full bg-orange-500 shadow-md">
                    <div className="w-[85%] mx-auto flex justify-between items-center py-4">
    
    
                    <img
                    className="w-32 cursor-pointer"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                    alt="logo"
                    />

    
                    <Link to="/Checkout">
                    <div className="flex items-center gap-2 bg-white text-orange-500 px-4 py-2 rounded-full shadow hover:bg-orange-100 transition">
                        
                        <span className="font-semibold text-lg">
                        Cart
                        </span>

                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
                        {counter}
                        </span>

                    </div>
                    </Link>

                    </div>
                </div>
    )
}