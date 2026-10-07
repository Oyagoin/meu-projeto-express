const UserModel = require('../models/UserModel');

async function index(req, res) {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno' });
  }
}

async function show(req, res) {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno' });
  }
}

async function create(req, res) {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno' });
  }
}

async function update(req, res) {
  try {
    const updatedUser = await UserModel.update(req.params.id, req.body);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno' });
  }
}

async function deleteUser(req, res) {
  try {
    const deleted = await UserModel.delete(req.params.id);
    if (deleted) {
      res.json({ message: 'Usuário deletado com sucesso' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno' });
  }
}

module.exports = { index, show, create, update, delete: deleteUser };
