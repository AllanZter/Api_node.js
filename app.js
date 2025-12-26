require('dotenv').config();

const express = require('express');
const fileupload = require('express-fileupload');
const { engine } = require('express-handlebars');

const app = express();

// middlewares globais
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileupload());

// arquivos estáticos
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));
app.use('/css', express.static('./css'));
app.use('/image', express.static('./image'));

// handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// rotas
app.use('/api', require('./routes/auth.routes'));
app.use('/api', require('./routes/users.routes'));

// página inicial
app.get('/', (req, res) => {
    res.render('login');
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro');
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
