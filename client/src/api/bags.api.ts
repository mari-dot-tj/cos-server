import httpClient from './httpClient'

interface bagObject {
    bag_id: number,
    size: String,
    grams: number
}

class BagService {

    private END_POINT = '/bag'

    async getAllBags(): Promise<Array<bagObject>> { 
        return httpClient.get(this.END_POINT)
            .then(function (response) {
                console.log(response)
                return response.data
            })
            .catch((error) => {
                console.warn(error)
            })
    }

}
const bagService = new BagService
export default bagService