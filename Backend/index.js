require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

main()
  .then(() => console.log("connected with database"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

// app.get("/addholdings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3100.0,
//       price: 3194.8,
//       net: "+3.05%",
//       day: "-0.25%",
//     },
//     {
//       name: "INFY",
//       qty: 3,
//       avg: 1500.0,
//       price: 1555.45,
//       net: "+3.70%",
//       day: "-1.60%",
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2700.0,
//       price: 2890.5,
//       net: "+7.06%",
//       day: "+1.20%",
//     },
//     {
//       name: "ICICIBANK",
//       qty: 4,
//       avg: 900.0,
//       price: 945.3,
//       net: "+5.03%",
//       day: "-0.40%",
//     },
//     {
//       name: "SBIN",
//       qty: 5,
//       avg: 600.0,
//       price: 620.75,
//       net: "+3.45%",
//       day: "+0.65%",
//     },
//     {
//       name: "WIPRO",
//       qty: 6,
//       avg: 500.0,
//       price: 489.6,
//       net: "-2.08%",
//       day: "-0.75%",
//     },
//     {
//       name: "LT",
//       qty: 2,
//       avg: 3400.0,
//       price: 3540.9,
//       net: "+4.14%",
//       day: "+0.30%",
//     },
//     {
//       name: "HCLTECH",
//       qty: 3,
//       avg: 1100.0,
//       price: 1155.25,
//       net: "+5.02%",
//       day: "+0.50%",
//     },
//     {
//       name: "AXISBANK",
//       qty: 2,
//       avg: 950.0,
//       price: 980.4,
//       net: "+3.20%",
//       day: "-0.15%",
//     },
//     {
//       name: "KOTAKBANK",
//       qty: 1,
//       avg: 1800.0,
//       price: 1855.6,
//       net: "+3.09%",
//       day: "+0.40%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("done");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });

//   res.send("done");
// });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find();
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find();
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.send("Order saved!");
});

app.listen(PORT, () => {
  console.log("App started");
});
