const express = require("express");
const router = express.Router();
let tracks = require("../db");

router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      data: tracks
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  id = Number(id);
  try {
    let track = tracks.find(track => track.id === id);
    res.status(200).json({
      data: track
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = router;
