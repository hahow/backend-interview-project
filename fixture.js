const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/hahow", { useNewUrlParser: true });

const { Course, Lecture } = require("./models");

async function main() {
  await Course.deleteMany({});
  await Lecture.deleteMany({});

  let course = new Course({ title: "first course" });
  await course.save();

  let lecture = new Lecture({
    title: "first lecture",
    course: course._id
  });
  await lecture.save();
}

function closeConnection() {
  mongoose.connection.close();
}

main().then(closeConnection);
