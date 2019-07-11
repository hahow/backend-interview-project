const mongoose = require("mongoose");

const Course = mongoose.model("Course", {
  title: { type: String, required: true }
});

exports.Course = Course;

const Lecture = mongoose.model("Lecture", {
  title: { type: String, required: true },
  course: { type: mongoose.Schema.ObjectId, required: true }
});

exports.Lecture = Lecture;
