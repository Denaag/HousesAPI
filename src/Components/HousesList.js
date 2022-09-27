import React from "react";
import { House } from './House';
import { housesApi } from "../rest/HousesAPI"; //may need to remove .js

export class HousesList extends React.Component { //different way to extend component with class-based components
    // state is no longer the constructor - creating it as an object with empty array
    constructor(props) {
        super(props)
        this.state ={
            houses: []
        }
    } 
    
    // state = { 
    //     houses: []
    // };

    componentDidMount() {
        this.fetchHouses();
    };

    fetchHouses = async () => {
        const housesStoredInTheAPI = await housesApi.get(); //this is where we are using get method and re-use this (await - don't do anything until...)
        this.setState({ houses: housesStoredInTheAPI }); // based on the values that come back from API this is what it'll be set to
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse); //this will be called in HousesApi.js file to have API updated
        this.fetchHouses(); // this will call the the fetchHouses method which this will update our state with the new houses
    };

    addHouse = async ({name}) => {
        await housesApi.post({
            name
        });
        this.fetchHouses();
    }

    render() {
        return (
            <div className="house-list">
                {/* here we will map each house from our state's houses */}
                {this.state.houses.map((house) => (
                    <House 
                        house={house} 
                        key={house._id} 
                        updateHouse={this.updateHouse}
                        addHouse={this.addHouse} 
                    />
                ))}
            </div>
        )
    }
}