const express = require('express')
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const path = require('path')

const PORT = process.env.PORT || 2000

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
  defaultLayout:'layout'
}));
app.set('view engine', 'handlebars');

// Routes
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));

// Listen
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})