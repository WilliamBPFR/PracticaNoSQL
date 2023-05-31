/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'test';
const collection = 'restaurants';

// The current database to use.
use(database);

// Create a new collection.
//EJERCICIO #1;
/*db[collection].aggregate([
  {
    $group: {
      _id: {
        borough: "$borough",
        cuisine: "$cuisine"
      },
      count: { $sum: 1 }
    }
  },
  {
    $sort: {
      count: -1,
      "_id.borough": -1
    }
  },
  {
    $project: {
      _id: 0,
      Borough: "$_id.borough",
      Cousine: "$_id.cuisine",
      Count: "$count"
    }
  }
]);*/

//EJERCICIO #2;
/*db[collection].aggregate([
    {
        $group: {
        _id: {
        name: "$name",
        averageRating: { $avg: "$grades.score" }
        }
    }},
        {
        $sort:
            {
                "_id.averageRating": -1
            }
        },
        {
        $limit: 5
        },
        {
        $project: {
            _id: 0,
            Name: "$_id.name",
            AverageRating: "$_id.averageRating"
          }
        }
]);*/

//EJERCICIO #3;
/*db[collection].aggregate([
    {
        $group: {
        _id: {
        name: "$name",
        averageRating: { $avg: "$grades.score" }
        }
    }},
        {
        $sort:
            {
                "_id.averageRating": 
            }
        },
        {
        $limit: 50
        },
        {
        $project: {
            _id: 0,
            Name: "$_id.name",
            AverageRating: "$_id.averageRating",
            Score: 
            {
                $switch: {
                    branches: [
                        { case: { $gt: ["$_id.averageRating", 20] }, then: "A" },
                        { case: { $gt: ["$_id.averageRating", 13] }, then: "B" },
                    ],
                    default: "C" 
            }
        }
          }
        }
]);*/

//EJERCICIO #4;
db.collection.aggregate([
    {
      $project: {
        _id: 0,
        date: {
          $dateToString: {
            date: { $toDate: NumberLong("$grade.date") },
            format: "%Y-%m-%d" // Formato deseado de la fecha, por ejemplo: "YYYY-MM-DD"
          }
        }
      }
    },
    {
      $sort: {
        date: 1 // Ordenar por fecha en orden ascendente
      }
    },
    {
      $limit: 1 // Obtener solo el primer resultado, que corresponderá al review más antiguo
    }
  ]);