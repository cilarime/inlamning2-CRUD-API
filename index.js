const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//import av routes till att få access från server
const postRouter = require("./API/posts");

//Implementation av lokal .env fil
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());
app.use("/API", postRouter);

/*
//Endpoints
app.get("/getposts", (req, res) => {
    const posts = [
        { title: "Post 1", body: "Detta är en post" },
        { title: "Post 2", body: "Detta är också en post" },
    ];
    res.status(200).json({ posts });
});

app.post("/newpost", (req, res) => {
    console.log("Post att lägga till:", req.body);
    res.status(200).json({msg: `tillagd post: ${req.body.title}`});
});

app.put("/updatepost/:id", (req, res) => {
    console.log("post att uppdatera: ", req.body);
    console.log("Post ID", req.params.id);
    res.status(200).json({ msg: `uppdaterad post: ${req.params.id}` });
  });

  app.delete("/deletepost/:id", (req, res) => {
    console.log("Post ID", req.params.id);
    res.status(200).json({ msg: `Raderad post: ${req.params.id}` });
  });
  */

  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true },
    () => console.log("Connected to DB")
  );

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


/*EMIR ALIC-ECUTBILDNING*/