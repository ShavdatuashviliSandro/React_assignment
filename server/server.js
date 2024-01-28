const express = require("express");

const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
