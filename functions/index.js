const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IPaoDDlp973cFVTs2Jz9jYwmDIR54fNhzUMqrj5bjmIleeVPQjFVMKd07oHHpDzrFQDmHiMCXhT74Ri6K6KEmcP00QPAf11hN"
);

// API

// - App config
const app = express();

// - MiddleWare
app.use(cors({ origin: true }));
app.use(express.json());
// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request recieved total ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });
  //   OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);
