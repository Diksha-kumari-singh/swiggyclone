import { imageGridCards } from "../Utilis/FoodData";
import Foodoption from "./Foodoption"


export default function Foodcard(){

    return (
        <>
         <p className=" w-[90%] container mx-auto font-bold text-2xl mt-15">Order our best food options</p>
          <div className="w-[90%] container mx-auto flex flex-wrap mt-5 gap-3">
            {
                imageGridCards.map((foodData)=><Foodoption key={foodData.id} foodData={foodData}></Foodoption>)
            }
          </div>
        </>
    )
}