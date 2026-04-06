import {dineoutRestaurants} from "../utilis/resturant";
import Resturantcard from "./resturantcard";
export default function Resturantoption(){
    return(

        <div className="max-w-[90%] container mx-auto mt-15">
            
            <p className="font-bold text-2xl">Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap gap-3 mt-5 overflow-x-auto">
            {
                dineoutRestaurants.map((RestData)=><Resturantcard key={RestData?.info?.id} RestData={RestData}></Resturantcard>)
            }
            </div>
        </div>
    )
}