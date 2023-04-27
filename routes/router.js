const express = require('express');

const router = express();


router.get('/', (req, res)=>{
    res.render('home', { pagename: 'Home'});
});

router.get('/login', (req, res)=>{
    res.render('login', { pagename: 'Login'});
});

router.get('/register', (req, res)=>{
    res.render('register', { pagename: 'Register'});
});

// <title><%=pagename%></title>

module.exports= router;
