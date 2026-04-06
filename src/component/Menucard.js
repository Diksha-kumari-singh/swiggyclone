import { useState } from "react";
import MenuItems from "./Menuinfo.js";


export default function MenuCard({Items,foodselected}){

    const [isOpen, setIsOpen] = useState(true);
    
    
    if("categories" in Items){
        return(
            <div className="w-full">
            <p className="text-2xl font-bold">{Items.title}</p>
            <div>
                {
                    Items?.categories?.map((items)=> <MenuCard key={items?.title} Items={items} foodselected={foodselected}></MenuCard>)
                }
            </div>
            </div>
        )
    }

   
    if(!isOpen){
        return(
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{Items.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>   
        ) 
    }
    

    if(foodselected==='veg'){
        return(
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{Items.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    Items?.itemCards?.filter((food)=> "isVeg" in food?.card?.info).map((items)=><MenuItems key={items?.card?.info?.id} restData = {items?.card?.info}></MenuItems>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }

    if(foodselected==='nonveg'){
        return(
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{Items.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    Items?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info)).map((items)=><MenuItems key={items?.card?.info?.id} restData = {items?.card?.info}></MenuItems>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }

   


    return (
       
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{Items.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
            <div>
                {
                    Items?.itemCards?.map((items)=><MenuItems key={items?.card?.info?.id} restData = {items?.card?.info}></MenuItems>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        
    )
}