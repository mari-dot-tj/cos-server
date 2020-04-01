import httpClient from './httpClient'

interface deliveryObject {
    delivery_id: number,
    delivery_option: String,
    price: number
}

interface mailPriceObject {
    mail_price_id: number,
    name: String,
    price: number
}

class DeliveryService {

    async getAllDeliveryOptions(): Promise<Array<deliveryObject>> { 
        return httpClient.get('/delivery')
            .then(function (response) {
                console.log(response)
                return response.data
            })
            .catch((error) => {
                console.warn(error)
            })
    };

    async getAllMailPrices(): Promise<Array<mailPriceObject>> { 
        return httpClient.get('/mail_price')
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