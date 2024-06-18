import {  PrismaClient } from '@prisma/client';
import express from 'express';
import sqlite3 from 'sqlite3' 
import path from 'node:path';

sqlite3.verbose();

const db_name = path.join(__dirname, "../data", "apptest.db");
const db = new sqlite3.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connexion réussie à la base de données 'apptest.db'");
});

const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.get('/posts', async (_req, res) => {
  const posts = await prisma.post.findMany()
  res.send(posts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
