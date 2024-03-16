const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000; 
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const bodyParser = require('body-parser');

const users = [
    { id: 1, username: 'Yana', password: 'myclassadmin' },
];
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
app.post('/addNewHomework', (req, res) => {
    const data = req.body;
    res.sendStatus(200);
    let content = JSON.parse(fs.readFileSync('homework.txt', 'utf-8'));
    content.push({
        homework: data.homework,
    });
    fs.writeFile('homework.txt', JSON.stringify(content), (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Завдання збережено`)
        }
    })
});
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


app.post('/saveNewGoods', (req, res) => {
    const data = req.body;
    console.log(data)
    // res.sendStatus(200);
    // let content = JSON.parse(fs.readFileSync('mondayHomework.txt', 'utf-8'));
    // content.push({
    //     time: data.time,
    //     name: data.name,
    //     price: data.price,
    //     img: data.img,
    //     bg: data.bg,
    //     backGroundColor: data.bg, 
    // });
    // fs.writeFile('mondayHomework.txt', JSON.stringify(content), (err) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log(`Д/з збережено`)
    //     }
    // })
});


app.listen(PORT, ()=>{
    console.log(`Server work on PORT: ${PORT}`)
});

