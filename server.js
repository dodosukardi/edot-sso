const express = require('express');
app = express();

const dotenv = require('dotenv');
dotenv.config();

const enWords = require('./lang/en-words');
const idWords = require('./lang/id-words');

app.set('view engine', 'ejs');
app.use('/static', express.static('./static/'));


app.get('/', (req, res) => {
  const params = {
    sitekey: process.env.SITEKEY,
    words: enWords,
    withCaptcha: true,
  }
  res.render('index', params);
});

// English routing pages
app.get('/en/login', (req, res) => {
  const params = {
    sitekey: process.env.SITEKEY,
    words: enWords,
    withCaptcha: true,
  }
  res.render('index', params);
});

app.get('/en/login-nocaptcha', (req, res) => {
  const params = {
    sitekey: process.env.SITEKEY,
    words: enWords,
    withCaptcha: false,
  }
  res.render('index', params);
});

app.get('/en/prompt', (req, res) => {
  res.render('prompt', {
    words: enWords,
  });
});


// Bahasa routing pages
app.get('/id/login', (req, res) => {
  const params = {
    sitekey: process.env.SITEKEY,
    words: idWords,
    withCaptcha: true,
  }
  res.render('index', params);
});

app.get('/id/login-nocaptcha', (req, res) => {
  const params = {
    sitekey: process.env.SITEKEY,
    words: idWords,
    withCaptcha: false,
  }
  res.render('index', params);
});

app.get('/id/prompt', (req, res) => {
  res.render('prompt', {
    words: idWords,
  });
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
