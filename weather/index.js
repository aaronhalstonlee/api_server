//const express = require("express");
import express from "express";
const router = express.Router();
import fetch from 'node-fetch'

const fetchWeather = async (searchtext) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchtext}&units=imperial&APPID=${process.env.WEATHER_API_KEY}`;

    try {
        const weatherStream = await fetch(url);
        const weatherJson = await weatherStream.json();
        return weatherJson;
    } catch (err) {
        return { Error: err.stack };
    }
    /*
    //get coords
    let locate = (spot) => {
        lat = spot.coords.latitude.toFixed(4);
        lon = spot.coords.longitude.toFixed(4);
        weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${process.env.WEATHER_API_KEY}`;
    };

    //when not able to locate
    let err = () => {
        alert("Oops... I'm having trouble finding you...")
    };

    //location call
    navigator.geolocation.getCurrentPosition(locate, err);
    */
}

router.get("/", (req, res) => {
    res.json({success: "Hello Weather"});
});

router.get("/:searchtext", async (req, res) => {
    const searchtext = req.params.searchtext;
    const data = await fetchWeather(searchtext);
    res.json(data);
});

router.post("/", async (req, res) => {
    const searchtext = req.body.searchtext;
    const data = await fetchWeather(searchtext);
    res.json(data);
})

export default router;