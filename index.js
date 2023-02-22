const express = require("express");
const formidable = require("express-formidable"); 
const dotenv = require("dotenv");
const app = express();
const PORT = 8000;

dotenv.config()

app.use(formidable());
app.use(require("./routes/router.js"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});