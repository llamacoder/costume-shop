const uuid = require('uuid/v4')

//  I wanted the route experience, but I don't really want to work on I/O,
//  so I'm just using a data array.  TSD
var COSTUMES = [
  {
    id: 1,
    name: 'Batman',
    price: 15.50,
    desc: 'Batman costume',
    tags: [
      {
        id: 1,
        name: 'purple',
        color: '#420256'
      },
      {
        id: 2,
        name: 'gray',
        color: '#425256'
      }
    ]
  },
  {
    id: 2,
    name: 'Spiderman',
    price: 21.50,
    desc: 'Spiderman costume',
    tags: [
      {
        id: 3,
        name: 'blue',
        color: '#020256'
      },
      {
        id: 4,
        name: 'green',
        color: '#485216'
      }
    ]
  },
  {
    id: 3,
    name: 'Joker',
    price: 7.50,
    desc: 'Joker costume',
    tags: [
      {
        id: 1,
        name: 'purple',
        color: '#420256'
      },
      {
        id: 5,
        name: 'red',
        color: '#c25256'
      }
    ]
  }
]

function getAll() {
  return COSTUMES
}

function getOne(id) {
  let results = COSTUMES.filter(costume => costume.id == id)
  if (results.length === 1) return results[0]
  else return null
}

function create() {
}
function updateOne() {
}

function deleteOne(id) {
  let index = COSTUMES.find(costume => costume.id == id)
  if (index == -1) return results
  else COSTUMES.splice(index, 1)
}

module.exports = {
  getAll, getOne, create, updateOne, deleteOne
}
