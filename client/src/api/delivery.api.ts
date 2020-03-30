import httpClient from './httpClient'

interface deliveryObject {
    delivery_id: number,
    delivery_option: String,
    price: number
}

class DeliveryService {

    private END_POINT = '/delivery'

    async getAllDeliveryOptions(): Promise<Array<deliveryObject>> { 
        return httpClient.get(this.END_POINT)
            .then(function (response) {
                console.log(response)
                return response.data
            })
            .catch((error) => {
                console.warn(error)
            })
    };

}
const deliveryService = new DeliveryService
export default deliveryService