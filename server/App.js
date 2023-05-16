const express = require("express");
const client = require("./Database/Utils");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { response } = require("express");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/studentRegister/v1/student", (req, res) => {
  client
    .db("StudentRegister")
    .collection("students")
    .find()
    .toArray()
    .then((students) => {
      res.send(students);
    });
});

//  SIGN IN AN EXISTING STUDENT
app.post("/studentRegister/v1/signInStudent", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const student = {
    email,
    password,
  };

  client
    .db("StudentRegister")
    .collection("students")
    .findOne({ email: email }, (err) => {
      if (err) console.log(err);
    })
    .then((foundStudent) => {
      if (foundStudent) {
        bcrypt
          .compare(student.password, foundStudent.password)
          .then((result) => {
            if (result === true) {
              res.send("Logged in");
            } else {
              res.send("Wrong password");
            }
          });
      } else {
        res.send("No students found");
      }
    });
});

//  REGISTER A NEW STUDENT
app.post("/studentRegister/v1/addStudent", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confPassword;
  const student = {
    name,
    email,
    password,
  };

  client
    .db("StudentRegister")
    .collection("students")
    .findOne({ email: student.email }, (err) => {
      if (err) {
        console.log(err);
      }
    })
    .then((result) => {
      if (result) {
        res.send("Already exists");
      } else {
        if (student.password !== confirmPassword) {
          res.send("Passwords do not match");
        } else {
          //Encrypt the password
          bcrypt.hash(student.password, saltRounds, (err, hash) => {
            if (err) console.log(err);
            else {
              student.password = hash;
              //Add to DB
              client
                .db("StudentRegister")
                .collection("students")
                .insertOne(student)
                .then(() => {
                  res.send("Added a new student");
                });
            }
          });
        }
      }
    });
});

client
  .connect()
  .then(() => {
    app.listen(7000, () => console.log("Server connected to Database"));
  })
  .catch((err) => console.log(err));
