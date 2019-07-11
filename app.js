const express = require("express");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/hahow", { useNewUrlParser: true });

const { Course, Lecture } = require("./models");

const app = express();

app.get("/courses", async (req, res, next) => {
  try {
    let courses = await Course.find({})
      .lean()
      .exec();
    for (let course of courses) {
      let lectures = await Lecture.find({ course: course._id })
        .lean()
        .exec();
      course.lectures = lectures;
    }
    res.send(JSON.stringify(courses));
  } catch (e) {
    next(e);
  }
});

const PORT = 5050;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
