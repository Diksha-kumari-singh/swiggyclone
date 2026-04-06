import Heading from "./Heading";

import Foodcard from "./Foodcard";
import Instaoption from "./Instaoption";
import Resturantoption from "./resturantoption";
import Banner from "./banner";

export default function Home(){
    return(
        <>
            <Heading></Heading>
            <Foodcard ></Foodcard>
            <Instaoption></Instaoption>
            <Resturantoption></Resturantoption>
            <Banner></Banner>
        </>
    )
}