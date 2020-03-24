import httpClient from './httpClient';

class CoffeeServices {

    private END_POINT = '/coffee';

    async getAllCoffees(): Promise<Array<object>> { 
        return httpClient.get(this.END_POINT)
            .then(function (response) {
                console.log(response);
                return response.data
            });
    };

}
const coffeeService = new CoffeeServices;
export default coffeeService;

/* Example users.api.js

import httpClient from './httpClient';

const END_POINT = '/users';


const getAllUsers = () => httpClient.get(END_POINT);

// you can pass arguments to use as request parameters/data
const getUser = (user_id) => httpClient.get(END_POINT, { user_id });
// maybe more than one..
const createUser = (username, password) => httpClient.post(END_POINT, { username, password });

export {
    getAllUsers,
    getUser,
    createUser
}
*/