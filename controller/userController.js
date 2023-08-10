const User = require('../model/user');

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
    await User.update(
        {
        name: name,
        password: password,
        email: email
    }, {
        where: {
            id: id
        }
    }
    ).then(() => {
        res.json('Usuário atualizado realizado com sucesso!');
        console.log('Usuário deletado realizado com sucesso!');
    }).catch((erro) => {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);
    })
    
}

module.exports = { createUser, getUser, deleteUser, updateUser };