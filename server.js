// const express = require('express');
// const sqlite3 = require('sqlite3');
import express from "express"
import sqlite3 from "sqlite3";
import cors from "cors"
import { useEffect } from "react";

const app = express();
const port = 3004; // You can choose any port
app.use(cors())
const db = new sqlite3.Database('./dua_main.sqlite');

// Define API endpoint to fetch data
export const connection = () => {
  app.get('/api/data', (req, res) => {

    const { table } = req.query;

    if (!table) {
      return res.status(400).json({ error: 'Table  are required in the query parameters' });
    }
    const query = `SELECT * FROM ${table}`
    db.all(query, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(rows);
      }
    });
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
connection()
// useEffect(() => {

// }, [])