const express = require('express');
const bcrypt = require('bcrypt');
const conexao = require('../config/db');
const autenticar = require('../middlewares/autenticar');

const router = express.Router();

const TIPOS_USUARIO = ['ADMIN', 'MEDIDOR', 'EMPRESA'];

// LISTAR USUÁRIOS (protegido)
router.get('/', autenticar, async (req, res) => {
    const sql = `
        SELECT id_users, username, email, type 
        FROM users 
        INNER JOIN user_types 
        ON users.user_type_id = user_types.id_user_types
    `;
    const [users] = await conexao.query(sql);
    res.json(users);
});

// CADASTRAR USUÁRIO
router.post('/cadastrar', async (req, res) => {
    try {
        const { username, email, password, id_user_types } = req.body;

        if (!TIPOS_USUARIO.includes(id_user_types)) {
            return res.status(400).json({ message: 'Tipo inválido' });
        }

        const [tipo] = await conexao.query(
            'SELECT id_user_types FROM user_types WHERE type = ?',
            [id_user_types]
        );

        const senhaHash = await bcrypt.hash(password, 10);

        await conexao.query(
            `INSERT INTO users (username, email, password, user_type_id)
             VALUES (?, ?, ?, ?)`,
            [username, email, senhaHash, tipo[0].id_user_types]
        );

        res.redirect('/');

    } catch (erro) {
        console.error(erro);
        res.status(500).json({ success: false });
    }
});

module.exports = router;
