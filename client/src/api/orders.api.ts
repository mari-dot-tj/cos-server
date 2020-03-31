import httpClient from './httpClient'


/*interface Order{
  info: String,
  delivery_date: Date,
  production_date: Date,
  customer_id: number,
  status_id: number,
  delivery_id: number,
  ref_id: number,
  items: [
      {
      coffee_id: number,
      bag_id: number,
      ground_level_id: number,
      quantity: number
      }
    ]
}*/

class OrderService {

    private END_POINT = '/order'

    async postOrder(items: [], delivery_id: number){
        let obj = {
            info: "Info",
            delivery_date: '2020-08-09',
            production_date: '2020-08-09',
            customer_id: 1,
            status_id: 1,
            delivery_id: delivery_id,
            ref_id: 1,
            list: items
        }
        var jsonObj = JSON.stringify(obj)
        return httpClient.post(this.END_POINT, jsonObj)
        .then(function (response) {
            console.log(response)
            return response.data
        })
        .catch((error) => {
            console.warn(error)
        })
    }

}
const orderService = new OrderService
export default orderService