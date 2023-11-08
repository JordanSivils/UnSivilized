const express = require('express');
const connectDB = require('./config/database');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const  methodOverride = require('method-override')
const path = require('path');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
require('dotenv').config();

const blogRouter = require('./routes/individualBlogRoutes');
const homeRouter = require('./routes/homeRoutes');
const desertRouter = require('./routes/regionRoutes')
const updateRouter = require('./routes/formRoutes')
const editRouter = require('./routes/editDeleteRoutes');
const loginRouter = require('./routes/loginRoutes');
const allBlogsRouter = require('./routes/allBlogRoutes')
const aboutAndContactRouter = require('./routes/aboutAndContactRoutes')
const { checkUser } = require('./middleware/authMiddle');

const app = express();
const port = 3007;

app.use(express.json())
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/uploads' , express.static(path.join(__dirname , '/uploads')));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'));
app.use(cookieParser());

app.use(blogRouter);
app.use(homeRouter);
app.use(desertRouter);
app.use(updateRouter);
app.use(editRouter);
app.use(loginRouter);
app.use(allBlogsRouter);
app.use(aboutAndContactRouter);

app.get('*', checkUser);

connectDB();

app.listen(port, () =>{
    console.log(`creepin on port ${port}`)
});