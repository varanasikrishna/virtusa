const express = require('express');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.json());

const studentsList=[
    {
        id : 1,
        name : 'abc',
        age : 21,
        dept : 'IT'
    },
    {
        id : 2,
        name : 'xyz',
        age : 21,
        dept : 'CSE'
    },
    {
        id : 3,
        name : 'bcd',
        age : 21,
        dept : 'ECE'
    },
    {
        id : 4,
        name : 'pqr',
        age : 21,
        dept : 'EIE'
    }
];

app.get('/api/student',(req,resp) =>{
    resp.json(studentsList);
});

app.post('/api/student',(req,resp) =>{
    console.log(studentsList);
    const newStudent = {
        name: req.body.name,
        age: req.body.age,
        id:studentsList.length + 1
    };

    studentsList.push(newStudent);
    resp.status(201);
    resp.json(newStudent.id);
    
});

app.delete('/api/delete/:id',(req,resp) =>{
    console.log(req);
    const idToBeDeleted=parseInt(req.params.id);
    const studentToBeDeleted=studentsList.findIndex(student => student.id === idToBeDeleted);
    studentsList.splice(studentToBeDeleted,1);
    resp.json(idToBeDeleted);
});

app.listen(5000);
    
