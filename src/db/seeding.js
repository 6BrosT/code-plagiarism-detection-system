import db from "../utils/db.js";

await db("organization")
  .insert([
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d476",
      name: "University of Science",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d477",
      name: "University of Technology",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d478",
      name: "University of Medicine",
    },
  ])
  .then(() => console.log("Inserted into organization"));

await db("user")
  .insert([
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      name: "Nguyễn Đinh Quang Khánh",
      role: 2,
      org_user_id: "20127530",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d480",
      name: "Nguyễn Quốc Tuấn",
      role: 2,
      org_user_id: "20127012",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d481",
      name: "Nguyễn Thanh Hoàng",
      role: 2,
      org_user_id: "20127013",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d482",
      name: "Nguyễn Thị Thanh",
      role: 1,
      org_user_id: "",
    },
  ])
  .then(() => console.log("Inserted into user"));

await db("course")
  .insert([
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d483",
      org_id: "f47ac10b-58cc-4372-a567-0e02b2c3d476",
      name: "CS101",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d484",
      org_id: "f47ac10b-58cc-4372-a567-0e02b2c3d477",
      name: "CS102",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d485",
      org_id: "f47ac10b-58cc-4372-a567-0e02b2c3d478",
      name: "CS103",
    },
  ])
  .then(() => console.log("Inserted into course"));

await db("exam")
  .insert([
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d486",
      course_id: "f47ac10b-58cc-4372-a567-0e02b2c3d483",
      name: "Midterm",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d487",
      course_id: "f47ac10b-58cc-4372-a567-0e02b2c3d483",
      name: "Final",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d488",
      course_id: "f47ac10b-58cc-4372-a567-0e02b2c3d483",
      name: "Quiz",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d489",
      course_id: "f47ac10b-58cc-4372-a567-0e02b2c3d484",
      name: "Midterm",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d480",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d490",
      course_id: "f47ac10b-58cc-4372-a567-0e02b2c3d484",
      name: "Final",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d480",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d491",
      course_id: "f47ac10b-58cc-4372-a567-0e02b2c3d484",
      name: "Quiz",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d480",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d492",
      course_id: "f47ac10b-58cc-4372-a567-0e02b2c3d485",
      name: "Midterm",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d481",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d493",
      course_id: "f47ac10b-58cc-4372-a567-0e02b2c3d485",
      name: "Final",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d481",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d494",
      course_id: "f47ac10b-58cc-4372-a567-0e02b2c3d485",
      name: "Quiz",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d481",
    },
  ])
  .then(() => console.log("Inserted into exam"));

await db("code_question")
  .insert([
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d495",
      title: "Question 1",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d486",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d496",
      title: "Question 2",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d486",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d497",
      title: "Question 3",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d486",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d498",
      title: "Question 1",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d487",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d499",
      title: "Question 2",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d487",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d500",
      title: "Question 3",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d487",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d501",
      title: "Question 1",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d488",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d502",
      title: "Question 2",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d488",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d503",
      title: "Question 3",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d488",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d504",
      title: "Question 1",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d489",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d480",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d505",
      title: "Question 2",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d489",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d480",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d506",
      title: "Question 3",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d489",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d480",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d507",
      title: "Question 1",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d490",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d480",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d508",
      title: "Question 2",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d490",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d480",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d509",
      title: "Question 3",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d490",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d480",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d510",
      title: "Question 1",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d491",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d481",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d511",
      title: "Question 2",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d491",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d481",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d512",
      title: "Question 3",
      exam_id: "f47ac10b-58cc-4372-a567-0e02b2c3d491",
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d481",
    },
  ])
  .then(() => console.log("Inserted into code_question"));

await db("code_submission")
  .insert([
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d504",
      code_question_id: "f47ac10b-58cc-4372-a567-0e02b2c3d495",
      programming_language_name: "Python",
      source_code: 'print("Hello World")',
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d505",
      code_question_id: "f47ac10b-58cc-4372-a567-0e02b2c3d496",
      programming_language_name: "Python",
      source_code: 'print("Hello World")',
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d506",
      code_question_id: "f47ac10b-58cc-4372-a567-0e02b2c3d497",
      programming_language_name: "Python",
      source_code: 'print("Hello World")',
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d507",
      code_question_id: "f47ac10b-58cc-4372-a567-0e02b2c3d498",
      programming_language_name: "Python",
      source_code: 'print("Hello World")',
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d508",
      code_question_id: "f47ac10b-58cc-4372-a567-0e02b2c3d499",
      programming_language_name: "Python",
      source_code: 'print("Hello World")',
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d509",
      code_question_id: "f47ac10b-58cc-4372-a567-0e02b2c3d500",
      programming_language_name: "Python",
      source_code: 'print("Hello World")',
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d510",
      code_question_id: "f47ac10b-58cc-4372-a567-0e02b2c3d501",
      programming_language_name: "Python",
      source_code: 'print("Hello World")',
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d511",
      code_question_id: "f47ac10b-58cc-4372-a567-0e02b2c3d502",
      programming_language_name: "Python",
      source_code: 'print("Hello World")',
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d512",
      code_question_id: "f47ac10b-58cc-4372-a567-0e02b2c3d503",
      programming_language_name: "Python",
      source_code: 'print("Hello World")',
      user_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    },
  ])
  .then(() => console.log("Inserted into code_submission"));
