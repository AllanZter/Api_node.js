const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const conexao = require('../config/db');

const router = express.Router();

// LOGIN
router.post('/validar', async (req, res) => {
    try {
        const { email, password } = req.body;

        const [rows] = await conexao.query(`
            SELECT 
                id_users,
                username,
                email,
                password,
                type
            FROM users
            INNER JOIN user_types 
            ON user_types.id_user_types = users.user_type_id
            WHERE email = ?
        `, [email]);

        if (rows.length === 0) {
            return res.status(401).json({ success: false });
        }

        const user = rows[0];

        const senhaValida = await bcrypt.compare(password, user.password);
        if (!senhaValida) {
            return res.status(401).json({ success: false });
        }

        const token = jwt.sign(
            { id: user.id_users, userType: user.type },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            success: true,
            token,
            user: {
                id: user.id_users,
                username: user.username,
                userType: user.type
            }
        });

    } catch (erro) {
        console.error('ERRO LOGIN:', erro);
        res.status(500).json({ success: false });
    }
});

module.exports = router;
