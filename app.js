const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000; 
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const bodyParser = require('body-parser');


passport.use(new LocalStrategy((username, password, done) => {
    const user = users.find(u => u.username == username && u.password == password);
    if (user) {
        return done(null, user);
    } else {
        return done(null, false, { message: 'Невірний логін або пароль' });
    }
}))
passport.serializeUser((user, done) => {
    done(null, user.id);
})
passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id == id);
    done(null, user);
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login',
    failureFlash: true
}))
app.get('/admin', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin'));
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong!');
})
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
}) 

app.get('/contact', (req, res)=>{
    res.send('Намер компанії: 0972058786');
}) 

app.get('/pay', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'pay.html'))
}) 
app.get('/cont', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'contact.html'))
}) 
app.listen(PORT, ()=>{
    console.log(`Server work on PORT: ${PORT}`)
});

