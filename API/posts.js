const express = require("express");
const postRouter = express.Router();
const Post = require("../models/Post");

//hämta/get posts
postRouter.get("/getposts", (req, res) => {
    /*const posts = [
        { title: "Post 1", body: "Detta är en post" },
        { title: "Post 2", body: "Detta är också en post" },
    ];
    res.status(200).json({ posts });*/
    Post.find({}, (err, documents) => {
        if (err) {
          res.status(500).json({
            msg: {
              msgBody: "Ett error uppstod medans hämtning av posts",
              msgError: true,
            },
          });
        } else {
          res.status(200).json({ posts: documents });
        }
      });
    });

    //lägg till/add post
postRouter.post("/newpost", (req, res) => {
    console.log("Post att lägga till:", req.body);
    //res.status(200).json({msg: `tillagd post: ${req.body.title}`});
    const newPost = new Post({
        title: req.body.title,
        body: req.body.body,
      });
      newPost.save((err) => {
        if (err) {
          res.status(500).json({
            msg: {
              msgBody: "An error occured while saving post",
              msgError: true,
            },
          });
        } else {
          res.status(201).json({
            msg: {
              msgBody: "Post was saved",
              msgError: false,
            },
          });
        }
      });
    });

    //uppdatera/update post
postRouter.put("/updatepost/:id", (req, res) => {
    /*console.log("post att uppdatera: ", req.body);
    console.log("Post ID", req.params.id);
    res.status(200).json({ msg: `uppdaterad post: ${req.params.id}` });*/
    Post.findByIdAndUpdate(
        req.params.id,
        { title: req.body.title, body: req.body.body },
        (err) => {
          if (err) {
            res.status(500).json({
              msg: {
                msgBody: "An error occured while updating post",
                msgError: true,
              },
            });
          } else {
            res.status(200).json({
              msg: {
                msgBody: "Post was updated",
                msgError: false,
              },
            });
          }
        }
      );
    });

  //radera/delete post
  postRouter.delete("/deletepost/:id", (req, res) => {
    /*console.log("Post ID", req.params.id);
    res.status(200).json({ msg: `Raderad post: ${req.params.id}` });*/
    Post.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
          res.status(500).json({
            msg: {
              msgBody: "An error occured while deleting post",
              msgError: true,
            },
          });
        } else {
          res.status(200).json({
            msg: {
              msgBody: "Post was deleted",
              msgError: false,
            },
          });
        }
      });
    });
    
    module.exports = postRouter;


    /*EMIR ALIC-ECUTBILDNING*/