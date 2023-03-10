const express = require('express');

const router = express.Router();

const Professor = require('./professor');

router.get('/', async (req, res) => {
  const professor = await Professor.findAll()
  res.send(professor);
});

router.get('/:id', async (req, res) => {
  const professorId = req.params.id;
  const professor = await Professor.findByPk(professorId)
  res.send(professor);
});

router.get('/:id/nome', async (req, res) => {
  const professor = await Professor.findByPk(professorId)

  res.send({
    nome: professor.nome
  })
})

router.post('/', async (req, res) => {
  let novoProfessor = req.body;
  novoProfessor = await Professor.create(req.body)
  res.send({ message: 'Professor adicionado com sucesso', professor: novoProfessor });
});

router.put('/:id', async (req, res) => {
  const professorId = req.params.id; 
  const dadosNovosProfessor = req.body;

  let professor = await Professor.findByPk(professorId);

  if (professor) {
    professor.set({...dadosNovosProfessor})
    await professor.save();
    res.send({ message: 'Professor atualizado com sucesso'});
  } else {
    res.status(404).send({ message: 'Professor não encontrado' });
  }
});

router.delete('/:id', async (req, res) => {
  const professorId = req.params.id;
  let professor = await Professor.findByPk(professorId);
  if (professor) {
    await professor.destroy();
    res.send({ message: 'Professor excluído com sucesso' });
  } else {
    res.status(404).send({ message: 'Professor não encontrado' });
  }
});

module.exports = router;

