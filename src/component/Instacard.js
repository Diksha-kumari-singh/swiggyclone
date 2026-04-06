export default function Instacard({gridcard}){
    return(
        <>
        <div className="flex-none">
            <a href={gridcard?.action?.link} target="_blank">
            
            <img className="h-50 w-40 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+gridcard?.imageId}></img>
            <p className="text-center font-bold">{gridcard.action.text}</p>
            </a>
        </div>
        </>
    )
} 