INSERT INTO organization (id, name, created_at, updated_at) VALUES 
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d476',
    'University of Science',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d477',
    'University of Technology',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d478',
    'University of Medicine',
    now(),
    now()
);

INSERT INTO user (id, name, role, org_user_id, created_at, updated_at) VALUES 
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    'Nguyễn Đinh Quang Khánh',
    2,
    '20127530',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d480',
    'Nguyễn Quốc Tuấn',
   2,
    '20127012',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d481',
    'Nguyễn Thanh Hoàng',
    2,
    '20127013',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d482',
    'Nguyễn Thị Thanh',
    1,
    '',
    now(),
    now()
);

INSERT INTO course (id, org_id, name, created_at, updated_at) VALUES 
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d483',
    'f47ac10b-58cc-4372-a567-0e02b2c3d476',
    'CS101',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d484',
    'f47ac10b-58cc-4372-a567-0e02b2c3d477',
    'CS102',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d485',
    'f47ac10b-58cc-4372-a567-0e02b2c3d478',
    'CS103',
    now(),
    now()
);

-- Create 3 exams for each course
INSERT INTO exam (id, course_id, name, user_id, created_at, updated_at) VALUES 
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d486',
    'f47ac10b-58cc-4372-a567-0e02b2c3d483',
    'Midterm',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d487',
    'f47ac10b-58cc-4372-a567-0e02b2c3d483',
    'Final',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d488',
    'f47ac10b-58cc-4372-a567-0e02b2c3d483',
    'Quiz',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d489',
    'f47ac10b-58cc-4372-a567-0e02b2c3d484',
    'Midterm',
    'f47ac10b-58cc-4372-a567-0e02b2c3d480',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d490',
    'f47ac10b-58cc-4372-a567-0e02b2c3d484',
    'Final',
    'f47ac10b-58cc-4372-a567-0e02b2c3d480',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d491',
    'f47ac10b-58cc-4372-a567-0e02b2c3d484',
    'Quiz',
    'f47ac10b-58cc-4372-a567-0e02b2c3d480',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d492',
    'f47ac10b-58cc-4372-a567-0e02b2c3d485',
    'Midterm',
    'f47ac10b-58cc-4372-a567-0e02b2c3d481',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d493',
    'f47ac10b-58cc-4372-a567-0e02b2c3d485',
    'Final',
    'f47ac10b-58cc-4372-a567-0e02b2c3d481',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d494',
    'f47ac10b-58cc-4372-a567-0e02b2c3d485',
    'Quiz',
    'f47ac10b-58cc-4372-a567-0e02b2c3d481',
    now(),
    now()
);


INSERT INTO code_question (id, title, exam_id, user_id, created_at, updated_at) VALUES 
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d495',
    'Question 1',
    'f47ac10b-58cc-4372-a567-0e02b2c3d486',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d496',
    'Question 2',
    'f47ac10b-58cc-4372-a567-0e02b2c3d486',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d497',
    'Question 3',
    'f47ac10b-58cc-4372-a567-0e02b2c3d486',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d498',
    'Question 1',
    'f47ac10b-58cc-4372-a567-0e02b2c3d487',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d499',
    'Question 2',
    'f47ac10b-58cc-4372-a567-0e02b2c3d487',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d500',
    'Question 3',
    'f47ac10b-58cc-4372-a567-0e02b2c3d487',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d501',
    'Question 1',
    'f47ac10b-58cc-4372-a567-0e02b2c3d488',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d502',
    'Question 2',
    'f47ac10b-58cc-4372-a567-0e02b2c3d488',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d503',
    'Question 3',
    'f47ac10b-58cc-4372-a567-0e02b2c3d488',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
);

INSERT INTO code_submission (id, code_question_id, programming_language_name, source_code, user_id, created_at, updated_at) VALUES 
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d504',
    'f47ac10b-58cc-4372-a567-0e02b2c3d495',
    'Python',
    'print("Hello World")',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d505',
    'f47ac10b-58cc-4372-a567-0e02b2c3d496',
    'Python',
    'print("Hello World")',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d506',
    'f47ac10b-58cc-4372-a567-0e02b2c3d497',
    'Python',
    'print("Hello World")',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d507',
    'f47ac10b-58cc-4372-a567-0e02b2c3d498',
    'Python',
    'print("Hello World")',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d508',
    'f47ac10b-58cc-4372-a567-0e02b2c3d499',
    'Python',
    'print("Hello World")',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d509',
    'f47ac10b-58cc-4372-a567-0e02b2c3d500',
    'Python',
    'print("Hello World")',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d510',
    'f47ac10b-58cc-4372-a567-0e02b2c3d501',
    'Python',
    'print("Hello World")',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d511',
    'f47ac10b-58cc-4372-a567-0e02b2c3d502',
    'Python',
    'print("Hello World")',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
),
(
    -- random uuid
    'f47ac10b-58cc-4372-a567-0e02b2c3d512',
    'f47ac10b-58cc-4372-a567-0e02b2c3d503',
    'Python',
    'print("Hello World")',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    now(),
    now()
);
