//Page1 (Home Page)
List of Category

* http://localhost:9110/category

//Page2 (Listing Page)
List of Products

* http://localhost:9110/product

//Page3 (Details Page)
Products detail

* http://localhost:9110/productdetail

//page4
order detail
.

# Details of selected Item (POST)
* 

# Place the order (POST)

 {
        "orderId": 4,
        "name": "Rohit",
        "email": "rohit@gmail.com",
        "address": "Hom 65",
        "phone": 8934645457,
        "cost": 931,
        "menuItem": [
            9,4,5
        ],
        "status": "Pending"
    }

//page5
# List of order wrt email (GET)
* http://localhost:8777/orders?email=rohit@gmail.com

# Update order status (PUT)
* http://localhost:8777/updateOrder
{
    "_id":"66aef42cb5f85eb0370fe7ab",
    "status":"Delivered"
}


# Delete Order (Delete)
* http://localhost:8777/deleteOrder
> {
    "_id":"66aef42cb5f85eb0370fe7ab"
}