const express = require("express");
const router = express.Router();
const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = "orebi66eada0b38adb";
const store_passwd = "orebi66eada0b38adb@ssl";
const is_live = false; //true for live, false for sandbox

router.post("/init", (req, res) => {
  const data = {
    total_amount: 100,
    currency: "BDT",
    tran_id: "REF123", // use unique tran_id for each api call
    success_url: `http://localhost:3000/api/v1/payment/success/234234`,
    fail_url: "http://localhost:5173/fail",
    cancel_url: "http://localhost:3030/cancel",
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "customer@example.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    const getPageurlUid = GatewayPageURL.split("/");
    const id = getPageurlUid[getPageurlUid.length - 1];
    res.status(200).send(id);
  });
});
router.post("/success/:tran_id", async (req, res) => {
  res.send(req.params.tran_id);
});

module.exports = router;
