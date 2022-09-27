import React, { useState } from "react";

//functional component
export const NewRoomForm = (props) => {
    //using our hooks
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined); //undefined since it'll be a number

    //this is making sure area will be a number - we want user to pass in a string
    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    //this is what happens once user submits a new form
    const onSubmit = (e) => {
        e.preventDefault(); //default action does not accur
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
            // console.log("Test", name, area)
        } else {
            console.log("Invalid Input")
        }
    };

    return (
        <div>
            <h4>Add a new room</h4>
            <form onSubmit={onSubmit}>
                {/* when the text in this input changes, the setName value state is being updated */}
                <input 
                    type='text' 
                    placeholder="name" 
                    onChange={(e) => setName(e.target.value)}
                    value={name} /* ties state variable to the actual value of the inputs  */
                />
                {/* this uses the method */}
                <input 
                    type='text' 
                    placeholder="area" 
                    onChange={handleAreaInput} 
                    value={area}
                />
                <button type="submit">Add Room</button>
            </form>
        </div>
    )
}