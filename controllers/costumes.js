const model = require('../models/costumes')

function getAll(req, res, next) {
  const data = model.getAll()

  if (!data || data.length === 0) res.sendStatus(404)
  else res.status(200).json({ data })
}

function getOne(req, res) {
  const costume = model.getOne(req.params.id)

  console.log(costume);
  if (!costume) res.sendStatus(404)
  else res.status(200).json({ costume })
}

function create(req, res) {

}

function updateOne(req, res) {

}

function deleteOne(req, res) {

}


module.exports = {
  getAll, getOne, create, updateOne, deleteOne
}
