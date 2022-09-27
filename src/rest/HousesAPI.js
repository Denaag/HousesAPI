//
const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

// normal class
class HousesApi {
    // no parameter necessary
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT); //this will be our response
            const data = await resp.json(); //this is where we get the data of that info and it'll come back as JSON
            return data;
        } catch(e) { //in case anything goes wrong this will handle the failure for us
            console.log("Oops, looks like fetchHouses had an issue.", e); //this will log out the issue/exceptions
        }
    }

    delete = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}` , {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
            });
            return await resp.json();
        } catch(e) {
            console.log('Ooops, look like fetchHouses had an issue.', e)
        }
    }

    //this will take parameter and this will update the house thats being passed into it
    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house.id}`, { //will get the infor for us
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json(); // this returns the variable/data just like lines 10-12 do for the await resp.json
        } catch(e) { //in case anything goes wrong this will handle the failure for us
            console.log('Oops, looks like updating houses had an issue.', e)
        }
    }

    post = async (house) => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: house})
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating houses had an issue.', e);
        }
    }
}

export const housesApi = new HousesApi();