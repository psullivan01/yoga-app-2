var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/auth/google',
  passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' });


  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

//insert get, post, etc. here

module.exports = router;
