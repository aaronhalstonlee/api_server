//const express = require("express");
import express from "express";
const router = express.Router();
import * as fetch from 'node-fetch'

router.get("/", (req, res) => {
    res.json({success: "Hello Weather"});
});

export default router;