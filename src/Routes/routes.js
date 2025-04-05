const express = require("express");
const cors = require("cors");
const {
  getAllContact,
  storeContact,
  deleteContact,
  getContactById,
} = require("../Controller/ContactController");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST",
  })
);

app.get("/", getAllContact);

app.get("/contact/:id", getContactById);

app.post("/contact", storeContact);

app.post("/contact/:id", deleteContact);

app.listen(process.env.PORT, () => console.log("Backend is running"));
