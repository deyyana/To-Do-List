import { useState, useEffect, useRef } from 'react';

function Add(){

    const [showPopUp, setShowPopUp] = useState(false);
    // react remember popup actual node so we can check if click inside or outside
    const popUpRef = useRef(null);

    const handleClick = () => {
        // when clicked,show the pop up
        setShowPopUp(true);
    }
    return (
        <div className="flex items-center justify-center">
             <button id ="Add_btn" className=" rounded-full  bg-[#F5F5F5] w-[50px] h-[50px]" onClick={handleClick}>+</button>
            {showPopUp && (
                <div id="popUp">
                <button>Add Event</button>
                <button>Add To Do List</button>
             </div>
            )}
        </div>
       
    );
}

export default Add;