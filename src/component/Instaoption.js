import {GrocerGridCard} from "../utilis/instamart"
import Instacard from "./Instacard"
export default function Instaoption(){
    return(
        <div className=" max-w-[90%] container mx-auto mt-15">
        <p className="font-bold text-2xl  container mx-auto ">Shop groceries on Instamart</p>
        <div className="  container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3 ">
            {
                GrocerGridCard.map((gridcard)=><Instacard key={gridcard?.id} gridcard={gridcard}></Instacard>)
            }
        </div>
        </div>
    )
}