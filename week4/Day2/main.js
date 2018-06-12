const express = require('express');
const app=express();
const bodyparser=require('body-parser');
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
app.get('api/student',(req,resp) =>{
    resp.json(studentsList);
});
app.post('api/student',(req,resp) =>{
    console.log(studentsList);
    const newStudent = {
        ...req.body,
        id : studentsList.length + 1
    };
    studentsList.push(newStudent);
    resp.json(newStudent.id);
    resp.status(201);
});

app.listen(5000);
    
