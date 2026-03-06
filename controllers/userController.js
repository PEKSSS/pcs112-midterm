//SQL
const connection=require('../config/db');
//get all users
exports.getAllUsers=(req,res)=>{
    connection.query('SELECT * FROM student_enrollments', (err, rows, fields)=>{
        if(err) throw err;
            res.json(rows);
    });
};

//Create a new user
//CRUD - Create
exports.createUser=(req,res)=>{
    const {productName, category, stockCount, locationCode, lastUpdated}=req.body;
    connection.query('INSERT INTO student_enrollments (productName, category, stockCount, locationCode, lastUpdated) VALUES (?, ?, ?, ?, ?)', [productName, category, stockCount, locationCode, lastUpdated], (err, result)=>{
        if(err) throw err;
        res.json({message: 'User created successfully', userId: result.insertId});
    })
}

