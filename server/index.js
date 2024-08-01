const express = require("express");
const cors = require("cors");
const categoryRoute = require("./routes/CategoriesRoute.js");
const productRoute = require("./routes/ProductRout.js");
const userRoute = require("./routes/UserRout.js");
const imageRouter = require ("./routes/imageRoute.js")
const PORT = 3000;
const app = express();





app.use(express.json());
app.use(cors());
app.use('/category',categoryRoute)
app.use('/product',productRoute)
app.use('/users',userRoute)
app.use('/images', imageRouter)
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
