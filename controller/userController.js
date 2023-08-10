const User = require('../model/user');
const secret = require('../config/auth.json');
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
    const { name, password, email } = req.body;
    await User.create({
        name: name,
        password: password,
        email: email
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);
    })
}

const getUser = async (req, res) => {
    
    const users = await User.findAll()
    return res.json(users);
}

const deleteUser = async (req, res) => {
    const id = req.params;
    await User.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.json('Usuário deletado com sucesso!');
        console.log('Usuário deletado com sucesso!');
    }).catch((erro) => {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);
    })
    
}
const updateUser = async (req, res) => {
    const id = req.params;
    const { name, password, email } = req.body;
    const TransformID = parseInt(id)
    await User.update(
        {
        name: name,
        password: password,
        email: email
    }, {
        where: {
            id: TransformID
        }
    }
    ).then(() => {
        res.json('Usuário atualizado realizado com sucesso!');
        console.log('Usuário atualizado realizado com sucesso!');
    }).catch((erro) => {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);
    })
    
}

const authenticatedUser = async (req, res) => {
    const { email, password} = req.body;
    try{
        const isUserAthenticated = await User.findOne({
            where: {
                email: email,
                password: password
            }
        })
        const token = jwt.sign({id: email}, secret.secret, {
            expireIn: 86400,
        })
        return res.json({
            name: isUserAthenticated.name,
            email: isUserAthenticated.email,
            token: token
        });     
    } catch(error){
        return res.json("Usuário não encontrado")
    }
}

module.exports = { createUser, getUser, deleteUser, updateUser, authenticatedUser };