import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

// @ desc Create new order
// @ route POST /api/orders
// @ access Private
const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No Order Items");
    return;
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    //////////////////// SECURITY BUG: GET IT FIXED

    // var current=JSON.parse(localStorage.getItem("cartItems"))
    // current[0].price = 0.01
    // ...
    // localStorage.setItem("cartItems", JSON.stringify(current))

    //--------------------------------------

    // for (const item of order.orderItems) {
    //   const product = await Product.findOne({ _id: item.product });

    //   item.price = product.price;
    // }

    //---------------------------------------------
    // orderItems.forEach(async (item) => {
    //   console.log(item);
    //   let lookupItem = await Product.findById(item.product);
    //   console.log(lookupItem);
    //   if (item.price !== lookupItem.price) {
    //     res.status(400);
    //     throw new Error(
    //       "There is a discrepancy between the prices of the items, and whats in the Database, please try again"
    //     );
    //   }
    // });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @ desc Get Order by Id
// @ route GET /api/orders/:id
// @ access Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @ desc Get Order by Id and Update it to paid
// @ route GET /api/orders/:id/pay
// @ access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();

    // FOR PAYPAL
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

//----------------
// Named Export
//---------------
export { createOrder, getOrderById, updateOrderToPaid };
