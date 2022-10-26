const mockResponse = {
    data: [
         {
            "_id": "630a50238aa639cb4ed7c64f",
        "item_id": 6,
        "item_name": "Ladies Sunglasses",
        "product_id": 2,
        "brand_id": 3,
        "rating": 4,
        "cost": 1299,
        "img": "https://i.ibb.co/PgG8TCD/p6.jpg"
         },
      {
        "_id": "630a50238aa639cb4ed7c64f",
        "item_id": 6,
        "item_name": "Ladies Sunglasses",
        "product_id": 2,
        "brand_id": 3,
        "rating": 4,
        "cost": 1299,
        "img": "https://i.ibb.co/PgG8TCD/p6.jpg"
       }
    ]
  }
    
    
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}