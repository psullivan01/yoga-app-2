var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/auth/google',
  passport.authenticate('google', { scope: ['openid', 'profile', 'email']}), function(req, res) {
    console.log("i'm hereh!!")
  });


router.get('/auth/google/callback',
    passport.authenticate('google', { successRedirect: '/HomePage', failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

//insert get, post, etc. here

module.exports = router;
