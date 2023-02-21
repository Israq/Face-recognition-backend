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

      Hostname: "dpg-cfpidsqrrk0fd9tpo360-a",
      Database: "face_recogtion_app_zewr",
      DATABASE_URL:"postgres://face_recogtion_app_zewr_user:KfKXjp3Uy8VJHqtXJktCY3CJIocmn70B@dpg-cfpidsqrrk0fd9tpo360-a/face_recogtion_app_zewr",
      Username: "face_recogtion_app_zewr_user",
      password:"KfKXjp3Uy8VJHqtXJktCY3CJIocmn70B",
      ssl: true,



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