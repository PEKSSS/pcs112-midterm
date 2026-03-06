//SQL
const connection=require('../config/db');
//get all users
exports.getAllUsers=(req,res)=>{
    connection.query('SELECT * FROM student_enrollments', (err, rows, fields)=>{
        if(err) throw err;
            res.json(rows);
    });
};

// Search a user by id
// CRUD - Report
// exports.getUserById=(req,res)=>{
//     const id=req.params.id;
//     connection.query('SELECT * FROM student_enrollments WHERE id=?', [id], (err, rows, fields)=>{
//         if(err) throw err;
//         if(rows.length>0)
//             res.json(rows);
//         else
//             res.status(404).json({message: "User not found"});
//     });
// }

//Create a new user
//CRUD - Create
exports.createUser=(req,res)=>{
    const {productName, category, stockCount, locationCode, lastUpdated}=req.body;
    connection.query('INSERT INTO student_enrollments (productName, category, stockCount, locationCode, lastUpdated) VALUES (?, ?, ?, ?, ?)', [productName, category, stockCount, locationCode, lastUpdated], (err, result)=>{
        if(err) throw err;
        res.json({message: 'User created successfully', userId: result.insertId});
    })
}

// //Edit a user
// //CRUD - Update

// exports.updateUser=(req,res)=>{
//     const {id, productName, category, stockCount, locationCode, lastUpdated}=req.body;
//     connection.query('UPDATE student_enrollments SET productName=?, category=?, stockCount=?, locationCode=? WHERE id=?', [productName, category, stockCount, locationCode, id], (err, result)=>{
//         if(err) throw err;
//         if(result.affectedRows>0)
//             res.json({message: 'User updated successfully'});
//         else
//             res.status(404).json({message: 'User not found'});
//         })
//     }

// //Delete a user
// //CRUD - Delete
// exports.deleteUser=(req,res)=>{
//     const id=req.body.id;
//     connection.query('DELETE FROM student_enrollments WHERE id=?', [id], (err, result)=>{
//         if(err) throw err;
//         if(result.affectedRows>0)
//             res.json({message: 'User deleted successfully'});
//         else
//             res.status(404).json({message: 'User not found'});
//     })
// }


