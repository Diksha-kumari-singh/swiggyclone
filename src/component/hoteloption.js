import {  useEffect,useState } from "react";

import Hotelcard from "./hotelcard";
export default function Hoteloption(){
    const [restData,setRestData]=useState([]);
    useEffect(()=>{
         async function fetchData(){
            const server="https://cors-anywhere.herokuapp.com/";
            const fetchapi="https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const response= await fetch("https://cors-anywhere.herokuapp.com/"+fetchapi);
            const data=await response.json();
            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         }
         fetchData();
         
    },[])
    //it wont work because intermediate server is blocked
    return(
        <>
        <div className="text-3xl font-bold max-w-[80%] mx-auto  mt-2 mb-4">Top restaurant chains in Kolkata</div>
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                restData.map((Data)=><Hotelcard key={Data?.info?.id} Data={Data}></Hotelcard>)
            }
        </div>
        </>
    )
}