# Checkout Web App Instructions 
## Link to separate repository used for the mobile part of this assignment:
https://github.com/csc301-summer-2020/assignment1_pair-7-burtonrider-zhanlu00-mobile

## Project Description
This is a simple checkout app, which supports add items, delete items, add random items, add promocode, change region and checkout functions. 

## Project Instructions
### Go to https://csc301-checkout-app.herokuapp.com/ for deployed app
### Develop locally
``` bash
1. Clone or download this repository
2. cd into the local folder
3. Install dependencies by npm run setup
3. npm run setup
4. npm run dev
```

## Available Scripts
``` bash
In the project directory, you can run:

# Download and install dependencies associate with the project
npm run setup

# Runs the express server locally at [http://localhost:5000]
npm run server

# Runs the React client locally at [http://localhost:3000]
npm run client

# Runs server and client concurrently at local
npm run dev

# Runs the available tests locally
npm run test

```

## Application Features
#### Add Custom Item:
An Item can be add by inputing item name, price and quantity and click the add button. Note that the price here is the total price for {quantity} many items. The subtotal is calculated by sending request to server.

#### Add Random Item:
Add an item randomly to the cart by click the add button. This feature is built for costomers that do not know what to buy. The new subtotal is calculated by sending request to server.

#### Delete Item:
Delete an item from the cart. The new subtotal is calculated by sending request to server.

#### Add Discount:
Add an discount by inputing a promo code and click the discount button. A wrong promo code does not get added. Only one promo code can be used for each order.  Availble code: 20discount, 30discount.

#### Change Region:
Change the region by click the dropdown on the navbar. This is for getting the tax rate at checkout. 

#### Checkout:
Get the total by click the chackout button. An request will send to server to calculate the final total after taxes and discount. 


## Backend API:
#### route: subtotal
  - action support: post
  - request body data: total, price
  - return {"newsub": newTotal}
 
#### route: tax
  - action support: get
  - request body data: none
  - return with all the tax information accross Canada
  
#### route: tax/:region
  - action support: get
  - param: regionCode
  - return {"GST":9.975,"QST":5}
  
#### route: checkout
  - action support: post
  - request body data: total, discount, regionCode
  - return {"total": total}
  


## App Info

### Version

1.0.0

### License

This project is licensed under the MIT License
