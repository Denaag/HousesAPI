import React from "react";
import { NewRoomForm } from './NewRoomForm';
import { NewHouseForm } from './NewHouseForm';

export const House = (props) => { //functional component

    const { house, updateHouse, addHouse } = props;

    // everytime we delete a room, we are udpating the house - this removes the room and filter finds the room by id
    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewHouse = (house) => addHouse(house);

    //takes new array based on old array of house and then add a new room to it
    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]});

    const checkRoomArea = (room) => {
        if (room === null || room === '') {
            return '';
        } else {
            return room.area;
        }
    }

    const checkRoomName = (room) => {
        if (room === null || room === '') {
            return '';
        } else {
            return room.name;
        }
    }

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                
                <li key={index}>
                    {/* <label> {`${room.name} Area: ${room.area}`} </label> */}
                    {console.log(house.room)}
                    <label>{`${checkRoomArea(room)}`}</label>
                    <label>{`${checkRoomName(room)}`}</label>
                    <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return ( //rooms is function that is taking props which is all the rooms
    <div>
        <div>
            <NewHouseForm addNewHouse={addNewHouse} />
        </div>

        <div>
            <h1>{house.name}</h1>
            
            <h1>{house.room}</h1>
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    </div>
    );
};