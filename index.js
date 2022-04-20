const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Look I started node using nodemon!')
});

const users = [
    { id: 1, name: 'Helen', email: 'sabana@gmail.com', phone: '0182354553' },
    { id: 2, name: 'Rita', email: 'rita@gmail.com', phone: '01734545223' },
    { id: 3, name: 'Adele', email: 'adele@gmail.com', phone: '0162342423' },
    { id: 4, name: 'Kelly', email: 'kelly@gmail.com', phone: '01956846588' },
    { id: 5, name: 'Katie', email: 'katie@gmail.com', phone: '0183425667885' },
    { id: 6, name: 'shakira', email: 'shakira@gmail.com', phone: '0182354553' },
    { id: 7, name: 'Lady gaga', email: 'ladygaga@gmail.com', phone: '0182354553' }
]

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);

})

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    } else {

        res.send(users)
    }
    console.log('query', req.query);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
});

app.listen(port, () => {
    console.log('Listening to port ', port);
});
