import express from "express";

const app = express();

app.get("/orders", (req, res) => {
  res.json({ message: "Order Service" });
});

app.listen(3002, () => {
  console.log("Order Service is running on port 3000");
});
