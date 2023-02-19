const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile')
const image = require('./controllers/image');


const db = knex({
    client: 'pg',
    connection: {
      host : 'dpg-cfo7s682i3mo4brs6580-a',
      port : 5432,
      user : 'face_recogtion_app_user',
      password : 'hUpaBEgEBmJ4pG9XY1O5d8Hlc8H60ZDu',
      database : 'face_recogtion_app'
    }
});



const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => { res.send('It is working') })
app.post('/signin', signin.handleSignin( db, bcrypt))
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})
app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req, res, db)})    
app.put('/image', (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})

app.listen(process.env.PORT || 3000, () => {
    console.log('app is running on port ${process.env.PORT}')
})