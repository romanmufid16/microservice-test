import express from "express";

const app = express();

app.get("/users", (req, res) => {
  res.json({ message: "User Service" });
});

app.listen(3001, () => {
  console.log("User Service is running on port 3000");
});
