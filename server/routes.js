const express = require("express");

// create an instance of our router
const router = express.Router();

// GET /todos
router.get("/todos", (req, res) => {
    res.status(200).json({ mssg: "GET REQUEST TO /api/todos" });
});

// POST /todos
router.post("/todos", (req, res) => {
    res.status(201).json({ mssg: "POST REQUEST TO /api/todos" });
});

// DELETE /todos/:id
router.delete("/todos/:id", (req, res) => {
    res.status(200).json({ mssg: "DELETE REQUEST TO /api/todos/:id" });
});

// PUT /todos/:id
router.put("/todos/:id", (req, res) => {
    res.status(200).json({ mssg: "PUT REQUEST TO /api/todos/:id" });
});

module.exports = router;