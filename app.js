const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const priorityRouter = require('./server/controllers/priorityRouter');
const organizations = require('./server/controllers/orgRouter.js');
const users = require('./server/controllers/userRouter.js');
const types = require('./server/controllers/typeRouter.js');
const actions = require('./server/controllers/actionsRouter.js');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const app = express();

const USER_DATA = [ // should be a database or something persistant
  {email:"test@gmail.com", password:"1234"}, // user data from email-password
  {email:"test2@gmail.com", provider:"facebook"} // user data from OAuth has no password
]

const authorization_data = {
  "kevinfries916@gmail.com": {
    "neighborhood": "Ben Ali Community",
    "roles": ["add_priority", "update_priority", "delete_priority", "sort_priorities"]
  }
}
// cookieSession config
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
  keys: ['randomstringhere']
}));
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express.json());

app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }));
app.use(cors());
app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions
app.use(cookieParser());

// Utility functions for checking if a user exists in the DATA array - Note: DATA array is flushed after every restart of server
function FindOrCreate(user){
  if(CheckUser(user)){  // if user exists then return user
      return user
  }else{
    console.log("pushing new user");  
      USER_DATA.push(user) // else create a new user
  }
}
function CheckUser(input){
  for (var i in USER_DATA) {
      if(input.email==USER_DATA[i].email && (input.password==USER_DATA[i].password || USER_DATA[i].provider==input.provider))
          return true // found
      else
          null //console.log('no match')
    }
  return false // not found
}

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");
passport.use(new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "http://localhost:3000/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token: ", accessToken);
      console.log("profile: ", profile);
      done(null, profile); // passes the profile data to serializeUser
    }
  )
);

// Routes
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// Routes
app.get('/whoami.json', (req, res) => {
  const token = req.cookies["jwt"];
  
  // verify a token symmetric
  // VERIFY should pull back the data at this point.  Doesn't work?
  
  jwt.verify(token, "secret", function(err, x) {
    console.log("any err", err);
    console.log("verify token", x);
    res.send(x);
  });

  // Is it common practice to retrieve the user data this way?

});

app.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));
// app.get("/auth/google/redirect", () => {
//   passport.authenticate('google');
//   console.log("authenticating");
// });

app.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
  console.log("in auth google redirect");
  let user = {
    displayName: req.user.displayName,
    name: req.user.name.givenName,
    email: req.user._json.email,
    provider: req.user.provider }
  console.log("USER is " + user.email)
    //console.log("other json is " + JSON.stringify(req.user._json));
  FindOrCreate(user)
  let token = jwt.sign({
      data: user
      }, 'secret', { expiresIn: 60 * 60 }); // expiry in seconds

  res.cookie('jwt', token)
  res.redirect('/secret');
});

// Routes
app.use('/priorities', priorityRouter);
app.use('/orgs', organizations);
app.use('/users', users);
app.use('/types', types);
app.use('/actions', actions);


// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
  done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
  console.log("checking isUserAuthed", req.user)
  if (req.user) {
      next();
  } else {
      res.send('You must login! <a href="/auth/google">Sign in with Google</a>');
  }
}

// Secret route
app.get('/secret', isUserAuthenticated, (req, res) => {
  let user_string = "";
  for (var i in USER_DATA) {
    user_string += USER_DATA[i].email + ", ";
  }
  
  res.send('You have reached the secret route  ' + user_string);
});

//  logout route
app.get('/logout', function(req, res) {
  console.log("log out user " + req.user);
  req.logout();
  console.log("log out user " + req.user);
  res.redirect('/');
});

module.exports = app;