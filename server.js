const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const connectToDB=require("./config/dbconect")
const authroutes=require('./routes/authRoutes');
const bodyParser = require('body-parser');
const { errorHandler, notfound } = require('./middleware/errorHandler');
const asyncHandler=require('express-async-handler')
connectToDB()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use("/api/user",authroutes)
app.use(notfound)
app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});