/*
 Navicat Premium Data Transfer

 Source Server         : postgres
 Source Server Type    : PostgreSQL
 Source Server Version : 160002 (160002)
 Source Host           : localhost:2345
 Source Catalog        : dolos_demo
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 160002 (160002)
 File Encoding         : 65001

 Date: 26/03/2024 15:28:44
*/


-- ----------------------------
-- Table structure for code_question
-- ----------------------------
DROP TABLE IF EXISTS "public"."code_question";
CREATE TABLE "public"."code_question" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "title" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "exam_id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "user_id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "created_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
)
;
ALTER TABLE "public"."code_question" OWNER TO "postgres";

-- ----------------------------
-- Records of code_question
-- ----------------------------
BEGIN;
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d495', 'Question 1', 'f47ac10b-58cc-4372-a567-0e02b2c3d486', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d496', 'Question 2', 'f47ac10b-58cc-4372-a567-0e02b2c3d486', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d497', 'Question 3', 'f47ac10b-58cc-4372-a567-0e02b2c3d486', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d498', 'Question 1', 'f47ac10b-58cc-4372-a567-0e02b2c3d487', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d499', 'Question 2', 'f47ac10b-58cc-4372-a567-0e02b2c3d487', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d500', 'Question 3', 'f47ac10b-58cc-4372-a567-0e02b2c3d487', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d501', 'Question 1', 'f47ac10b-58cc-4372-a567-0e02b2c3d488', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d502', 'Question 2', 'f47ac10b-58cc-4372-a567-0e02b2c3d488', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d503', 'Question 3', 'f47ac10b-58cc-4372-a567-0e02b2c3d488', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d504', 'Question 1', 'f47ac10b-58cc-4372-a567-0e02b2c3d489', 'f47ac10b-58cc-4372-a567-0e02b2c3d480', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d505', 'Question 2', 'f47ac10b-58cc-4372-a567-0e02b2c3d489', 'f47ac10b-58cc-4372-a567-0e02b2c3d480', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d506', 'Question 3', 'f47ac10b-58cc-4372-a567-0e02b2c3d489', 'f47ac10b-58cc-4372-a567-0e02b2c3d480', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d507', 'Question 1', 'f47ac10b-58cc-4372-a567-0e02b2c3d490', 'f47ac10b-58cc-4372-a567-0e02b2c3d480', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d508', 'Question 2', 'f47ac10b-58cc-4372-a567-0e02b2c3d490', 'f47ac10b-58cc-4372-a567-0e02b2c3d480', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d509', 'Question 3', 'f47ac10b-58cc-4372-a567-0e02b2c3d490', 'f47ac10b-58cc-4372-a567-0e02b2c3d480', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d510', 'Question 1', 'f47ac10b-58cc-4372-a567-0e02b2c3d491', 'f47ac10b-58cc-4372-a567-0e02b2c3d481', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d511', 'Question 2', 'f47ac10b-58cc-4372-a567-0e02b2c3d491', 'f47ac10b-58cc-4372-a567-0e02b2c3d481', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
INSERT INTO "public"."code_question" ("id", "title", "exam_id", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d512', 'Question 3', 'f47ac10b-58cc-4372-a567-0e02b2c3d491', 'f47ac10b-58cc-4372-a567-0e02b2c3d481', '2024-03-25 10:40:12.030177+00', '2024-03-25 10:40:12.030177+00');
COMMIT;

-- ----------------------------
-- Table structure for code_submission
-- ----------------------------
DROP TABLE IF EXISTS "public"."code_submission";
CREATE TABLE "public"."code_submission" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "code_question_id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "programming_language_name" text COLLATE "pg_catalog"."default" NOT NULL,
  "source_code" text COLLATE "pg_catalog"."default" NOT NULL,
  "user_id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "created_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
)
;
ALTER TABLE "public"."code_submission" OWNER TO "postgres";

-- ----------------------------
-- Records of code_submission
-- ----------------------------
BEGIN;
INSERT INTO "public"."code_submission" ("id", "code_question_id", "programming_language_name", "source_code", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d504', 'f47ac10b-58cc-4372-a567-0e02b2c3d495', 'Python', 'class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert(root, key):
    if root is None:
        return Node(key)
    else:
        if root.val < key:
            root.right = insert(root.right, key)
        else:
            root.left = insert(root.left, key)
    return root

def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.val)
        inorder_traversal(root.right)

# Usage
root = None
root = insert(root, 50)
insert(root, 30)
insert(root, 20)
insert(root, 40)
insert(root, 70)
insert(root, 60)
insert(root, 80)

inorder_traversal(root)
', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.036256+00', '2024-03-25 10:40:12.036256+00');
INSERT INTO "public"."code_submission" ("id", "code_question_id", "programming_language_name", "source_code", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d505', 'f47ac10b-58cc-4372-a567-0e02b2c3d496', 'Python', 'def calculate_sum(n):
    return (n * (n + 1)) // 2

n = 10
result = calculate_sum(n)
print(f"The sum from 1 to {n} is: {result}")
', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.036256+00', '2024-03-25 10:40:12.036256+00');
INSERT INTO "public"."code_submission" ("id", "code_question_id", "programming_language_name", "source_code", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d506', 'f47ac10b-58cc-4372-a567-0e02b2c3d497', 'Python', 'def recursive_sum(n):
    if n <= 1:
        return n
    else:
        return n + recursive_sum(n-1)

# Test the recursive sum function
n = 5
result = recursive_sum(n)
print(f"The sum from 1 to {n} is: {result}")
', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.036256+00', '2024-03-25 10:40:12.036256+00');
INSERT INTO "public"."code_submission" ("id", "code_question_id", "programming_language_name", "source_code", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d507', 'f47ac10b-58cc-4372-a567-0e02b2c3d498', 'Python', 'def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] < target:
            low = mid + 1
        elif arr[mid] > target:
            high = mid - 1
        else:
            return mid

    return -1
', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.036256+00', '2024-03-25 10:40:12.036256+00');
INSERT INTO "public"."code_submission" ("id", "code_question_id", "programming_language_name", "source_code", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d508', 'f47ac10b-58cc-4372-a567-0e02b2c3d499', 'Python', 'class Stack:
    def __init__(self):
        self.stack = []

    def is_empty(self):
        return len(self.stack) == 0

    def push(self, item):
        self.stack.append(item)

    def pop(self):
        if not self.is_empty():
            return self.stack.pop()
        else:
            return "Stack is empty"

    def peek(self):
        if not self.is_empty():
            return self.stack[-1]
        else:
            return "Stack is empty"

    def size(self):
        return len(self.stack)

# Example Usage
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)

print(stack.pop())  # Output: 3
print(stack.peek())  # Output: 2
print(stack.size())  # Output: 2
', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.036256+00', '2024-03-25 10:40:12.036256+00');
INSERT INTO "public"."code_submission" ("id", "code_question_id", "programming_language_name", "source_code", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d509', 'f47ac10b-58cc-4372-a567-0e02b2c3d500', 'Python', 'class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def print_list(self):
        current = self.head
        while current:
            print(current.data)
            current = current.next

# Example of creating and using a linked list
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)
llist.print_list()
', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.036256+00', '2024-03-25 10:40:12.036256+00');
INSERT INTO "public"."code_submission" ("id", "code_question_id", "programming_language_name", "source_code", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d510', 'f47ac10b-58cc-4372-a567-0e02b2c3d501', 'Python', 'class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    

# Example of creating and using a linked list
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)
llist.print_list()
', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.036256+00', '2024-03-25 10:40:12.036256+00');
INSERT INTO "public"."code_submission" ("id", "code_question_id", "programming_language_name", "source_code", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d511', 'f47ac10b-58cc-4372-a567-0e02b2c3d502', 'Python', 'class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def print_list(self):
        current = self.head
        while current:
            print(current.data)
            current = current.next

', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.036256+00', '2024-03-25 10:40:12.036256+00');
INSERT INTO "public"."code_submission" ("id", "code_question_id", "programming_language_name", "source_code", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d512', 'f47ac10b-58cc-4372-a567-0e02b2c3d503', 'Python', 'class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

# Example of creating and using a linked list
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)
llist.print_list()

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node


', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.036256+00', '2024-03-25 10:40:12.036256+00');
COMMIT;

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS "public"."course";
CREATE TABLE "public"."course" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "org_id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "name" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
)
;
ALTER TABLE "public"."course" OWNER TO "postgres";

-- ----------------------------
-- Records of course
-- ----------------------------
BEGIN;
INSERT INTO "public"."course" ("id", "org_id", "name", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d483', 'f47ac10b-58cc-4372-a567-0e02b2c3d476', 'CS101', '2024-03-25 10:40:12.021277+00', '2024-03-25 10:40:12.021277+00');
INSERT INTO "public"."course" ("id", "org_id", "name", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d484', 'f47ac10b-58cc-4372-a567-0e02b2c3d477', 'CS102', '2024-03-25 10:40:12.021277+00', '2024-03-25 10:40:12.021277+00');
INSERT INTO "public"."course" ("id", "org_id", "name", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d485', 'f47ac10b-58cc-4372-a567-0e02b2c3d478', 'CS103', '2024-03-25 10:40:12.021277+00', '2024-03-25 10:40:12.021277+00');
COMMIT;

-- ----------------------------
-- Table structure for dolos_report
-- ----------------------------
DROP TABLE IF EXISTS "public"."dolos_report";
CREATE TABLE "public"."dolos_report" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "name" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "programming_language_name" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "programming_language_extensions" text COLLATE "pg_catalog"."default" NOT NULL,
  "compared_code_question_ids" text COLLATE "pg_catalog"."default" NOT NULL,
  "pairs_json_content" text COLLATE "pg_catalog"."default" NOT NULL,
  "user_id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "created_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
)
;
ALTER TABLE "public"."dolos_report" OWNER TO "postgres";

-- ----------------------------
-- Records of dolos_report
-- ----------------------------
BEGIN;
INSERT INTO "public"."dolos_report" ("id", "name", "programming_language_name", "programming_language_extensions", "compared_code_question_ids", "pairs_json_content", "user_id", "created_at", "updated_at") VALUES ('10c24ec8-6fd4-4681-a8b7-f01b10c6b655', 'Report change', 'python', '[".py",".py3"]', '["f47ac10b-58cc-4372-a567-0e02b2c3d495","f47ac10b-58cc-4372-a567-0e02b2c3d496","f47ac10b-58cc-4372-a567-0e02b2c3d497"]', '[{"id":66,"leftFile":{"id":1,"path":"undefined","charCount":131,"lines":["def calculate_sum(n):","    return (n * (n + 1)) // 2","","n = 10","result = calculate_sum(n)","print(f\"The sum from 1 to {n} is: {result}\")",""],"lineCount":7,"extra":{"id":1,"questionId":"f47ac10b-58cc-4372-a567-0e02b2c3d496","questionName":"Question 2","userId":"f47ac10b-58cc-4372-a567-0e02b2c3d479","orgUserId":"20127530","userFullName":"Nguyễn Đinh Quang Khánh","programmingLanguage":"Python","filename":"undefined","fullName":"undefined","status":"","submissionID":"","nameEN":"","nameNL":"","exerciseID":"","createdAt":"2024-03-25T10:40:12.036Z","labels":""},"amountOfKgrams":23},"rightFile":{"id":2,"path":"undefined","charCount":214,"lines":["def recursive_sum(n):","    if n <= 1:","        return n","    else:","        return n + recursive_sum(n-1)","","# Test the recursive sum function","n = 5","result = recursive_sum(n)","print(f\"The sum from 1 to {n} is: {result}\")",""],"lineCount":11,"extra":{"id":2,"questionId":"f47ac10b-58cc-4372-a567-0e02b2c3d497","questionName":"Question 3","userId":"f47ac10b-58cc-4372-a567-0e02b2c3d479","orgUserId":"20127530","userFullName":"Nguyễn Đinh Quang Khánh","programmingLanguage":"Python","filename":"undefined","fullName":"undefined","status":"","submissionID":"","nameEN":"","nameNL":"","exerciseID":"","createdAt":"2024-03-25T10:40:12.036Z","labels":""},"amountOfKgrams":23},"leftCovered":4,"rightCovered":4,"leftTotal":9,"rightTotal":13,"longestFragment":4,"similarity":0.36363636363636365,"totalOverlap":8,"fragments":[{"left":{"startRow":3,"startCol":0,"endRow":5,"endCol":41},"right":{"startRow":7,"startCol":0,"endRow":9,"endCol":41}}]},{"id":64,"leftFile":{"id":0,"path":"undefined","charCount":662,"lines":["class Node:","    def __init__(self, key):","        self.left = None","        self.right = None","        self.val = key","","def insert(root, key):","    if root is None:","        return Node(key)","    else:","        if root.val < key:","            root.right = insert(root.right, key)","        else:","            root.left = insert(root.left, key)","    return root","","def inorder_traversal(root):","    if root:","        inorder_traversal(root.left)","        print(root.val)","        inorder_traversal(root.right)","","# Usage","root = None","root = insert(root, 50)","insert(root, 30)","insert(root, 20)","insert(root, 40)","insert(root, 70)","insert(root, 60)","insert(root, 80)","","inorder_traversal(root)",""],"lineCount":34,"extra":{"id":0,"questionId":"f47ac10b-58cc-4372-a567-0e02b2c3d495","questionName":"Question 1","userId":"f47ac10b-58cc-4372-a567-0e02b2c3d479","orgUserId":"20127530","userFullName":"Nguyễn Đinh Quang Khánh","programmingLanguage":"Python","filename":"undefined","fullName":"undefined","status":"","submissionID":"","nameEN":"","nameNL":"","exerciseID":"","createdAt":"2024-03-25T10:40:12.036Z","labels":""},"amountOfKgrams":23},"rightFile":{"id":1,"path":"undefined","charCount":131,"lines":["def calculate_sum(n):","    return (n * (n + 1)) // 2","","n = 10","result = calculate_sum(n)","print(f\"The sum from 1 to {n} is: {result}\")",""],"lineCount":7,"extra":{"id":1,"questionId":"f47ac10b-58cc-4372-a567-0e02b2c3d496","questionName":"Question 2","userId":"f47ac10b-58cc-4372-a567-0e02b2c3d479","orgUserId":"20127530","userFullName":"Nguyễn Đinh Quang Khánh","programmingLanguage":"Python","filename":"undefined","fullName":"undefined","status":"","submissionID":"","nameEN":"","nameNL":"","exerciseID":"","createdAt":"2024-03-25T10:40:12.036Z","labels":""},"amountOfKgrams":23},"leftCovered":0,"rightCovered":0,"leftTotal":55,"rightTotal":9,"longestFragment":0,"similarity":0,"totalOverlap":0,"fragments":[]},{"id":65,"leftFile":{"id":0,"path":"undefined","charCount":662,"lines":["class Node:","    def __init__(self, key):","        self.left = None","        self.right = None","        self.val = key","","def insert(root, key):","    if root is None:","        return Node(key)","    else:","        if root.val < key:","            root.right = insert(root.right, key)","        else:","            root.left = insert(root.left, key)","    return root","","def inorder_traversal(root):","    if root:","        inorder_traversal(root.left)","        print(root.val)","        inorder_traversal(root.right)","","# Usage","root = None","root = insert(root, 50)","insert(root, 30)","insert(root, 20)","insert(root, 40)","insert(root, 70)","insert(root, 60)","insert(root, 80)","","inorder_traversal(root)",""],"lineCount":34,"extra":{"id":0,"questionId":"f47ac10b-58cc-4372-a567-0e02b2c3d495","questionName":"Question 1","userId":"f47ac10b-58cc-4372-a567-0e02b2c3d479","orgUserId":"20127530","userFullName":"Nguyễn Đinh Quang Khánh","programmingLanguage":"Python","filename":"undefined","fullName":"undefined","status":"","submissionID":"","nameEN":"","nameNL":"","exerciseID":"","createdAt":"2024-03-25T10:40:12.036Z","labels":""},"amountOfKgrams":23},"rightFile":{"id":2,"path":"undefined","charCount":214,"lines":["def recursive_sum(n):","    if n <= 1:","        return n","    else:","        return n + recursive_sum(n-1)","","# Test the recursive sum function","n = 5","result = recursive_sum(n)","print(f\"The sum from 1 to {n} is: {result}\")",""],"lineCount":11,"extra":{"id":2,"questionId":"f47ac10b-58cc-4372-a567-0e02b2c3d497","questionName":"Question 3","userId":"f47ac10b-58cc-4372-a567-0e02b2c3d479","orgUserId":"20127530","userFullName":"Nguyễn Đinh Quang Khánh","programmingLanguage":"Python","filename":"undefined","fullName":"undefined","status":"","submissionID":"","nameEN":"","nameNL":"","exerciseID":"","createdAt":"2024-03-25T10:40:12.036Z","labels":""},"amountOfKgrams":23},"leftCovered":0,"rightCovered":0,"leftTotal":55,"rightTotal":13,"longestFragment":0,"similarity":0,"totalOverlap":0,"fragments":[]}]', 'f47ac10b-58cc-4372-a567-0e02b2c3d482', '2024-03-25 15:51:57.243+00', '2024-03-25 15:51:57.243+00');
COMMIT;

-- ----------------------------
-- Table structure for exam
-- ----------------------------
DROP TABLE IF EXISTS "public"."exam";
CREATE TABLE "public"."exam" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "course_id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "name" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "user_id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "created_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
)
;
ALTER TABLE "public"."exam" OWNER TO "postgres";

-- ----------------------------
-- Records of exam
-- ----------------------------
BEGIN;
INSERT INTO "public"."exam" ("id", "course_id", "name", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d486', 'f47ac10b-58cc-4372-a567-0e02b2c3d483', 'Midterm', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.024054+00', '2024-03-25 10:40:12.024054+00');
INSERT INTO "public"."exam" ("id", "course_id", "name", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d487', 'f47ac10b-58cc-4372-a567-0e02b2c3d483', 'Final', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.024054+00', '2024-03-25 10:40:12.024054+00');
INSERT INTO "public"."exam" ("id", "course_id", "name", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d488', 'f47ac10b-58cc-4372-a567-0e02b2c3d483', 'Quiz', 'f47ac10b-58cc-4372-a567-0e02b2c3d479', '2024-03-25 10:40:12.024054+00', '2024-03-25 10:40:12.024054+00');
INSERT INTO "public"."exam" ("id", "course_id", "name", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d489', 'f47ac10b-58cc-4372-a567-0e02b2c3d484', 'Midterm', 'f47ac10b-58cc-4372-a567-0e02b2c3d480', '2024-03-25 10:40:12.024054+00', '2024-03-25 10:40:12.024054+00');
INSERT INTO "public"."exam" ("id", "course_id", "name", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d490', 'f47ac10b-58cc-4372-a567-0e02b2c3d484', 'Final', 'f47ac10b-58cc-4372-a567-0e02b2c3d480', '2024-03-25 10:40:12.024054+00', '2024-03-25 10:40:12.024054+00');
INSERT INTO "public"."exam" ("id", "course_id", "name", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d491', 'f47ac10b-58cc-4372-a567-0e02b2c3d484', 'Quiz', 'f47ac10b-58cc-4372-a567-0e02b2c3d480', '2024-03-25 10:40:12.024054+00', '2024-03-25 10:40:12.024054+00');
INSERT INTO "public"."exam" ("id", "course_id", "name", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d492', 'f47ac10b-58cc-4372-a567-0e02b2c3d485', 'Midterm', 'f47ac10b-58cc-4372-a567-0e02b2c3d481', '2024-03-25 10:40:12.024054+00', '2024-03-25 10:40:12.024054+00');
INSERT INTO "public"."exam" ("id", "course_id", "name", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d493', 'f47ac10b-58cc-4372-a567-0e02b2c3d485', 'Final', 'f47ac10b-58cc-4372-a567-0e02b2c3d481', '2024-03-25 10:40:12.024054+00', '2024-03-25 10:40:12.024054+00');
INSERT INTO "public"."exam" ("id", "course_id", "name", "user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d494', 'f47ac10b-58cc-4372-a567-0e02b2c3d485', 'Quiz', 'f47ac10b-58cc-4372-a567-0e02b2c3d481', '2024-03-25 10:40:12.024054+00', '2024-03-25 10:40:12.024054+00');
COMMIT;

-- ----------------------------
-- Table structure for organization
-- ----------------------------
DROP TABLE IF EXISTS "public"."organization";
CREATE TABLE "public"."organization" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "name" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
)
;
ALTER TABLE "public"."organization" OWNER TO "postgres";

-- ----------------------------
-- Records of organization
-- ----------------------------
BEGIN;
INSERT INTO "public"."organization" ("id", "name", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d476', 'University of Science', '2024-03-25 10:40:12.008703+00', '2024-03-25 10:40:12.008703+00');
INSERT INTO "public"."organization" ("id", "name", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d477', 'University of Technology', '2024-03-25 10:40:12.008703+00', '2024-03-25 10:40:12.008703+00');
INSERT INTO "public"."organization" ("id", "name", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d478', 'University of Medicine', '2024-03-25 10:40:12.008703+00', '2024-03-25 10:40:12.008703+00');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS "public"."user";
CREATE TABLE "public"."user" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "name" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "role" int4 NOT NULL DEFAULT 2,
  "org_user_id" varchar(50) COLLATE "pg_catalog"."default",
  "created_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
)
;
ALTER TABLE "public"."user" OWNER TO "postgres";

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO "public"."user" ("id", "name", "role", "org_user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d479', 'Nguyễn Đinh Quang Khánh', 2, '20127530', '2024-03-25 10:40:12.018778+00', '2024-03-25 10:40:12.018778+00');
INSERT INTO "public"."user" ("id", "name", "role", "org_user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d480', 'Nguyễn Quốc Tuấn', 2, '20127012', '2024-03-25 10:40:12.018778+00', '2024-03-25 10:40:12.018778+00');
INSERT INTO "public"."user" ("id", "name", "role", "org_user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d481', 'Nguyễn Thanh Hoàng', 2, '20127013', '2024-03-25 10:40:12.018778+00', '2024-03-25 10:40:12.018778+00');
INSERT INTO "public"."user" ("id", "name", "role", "org_user_id", "created_at", "updated_at") VALUES ('f47ac10b-58cc-4372-a567-0e02b2c3d482', 'Nguyễn Thị Thanh', 1, '', '2024-03-25 10:40:12.018778+00', '2024-03-25 10:40:12.018778+00');
COMMIT;

-- ----------------------------
-- Primary Key structure for table code_question
-- ----------------------------
ALTER TABLE "public"."code_question" ADD CONSTRAINT "code_question_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table code_submission
-- ----------------------------
ALTER TABLE "public"."code_submission" ADD CONSTRAINT "code_submission_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table course
-- ----------------------------
ALTER TABLE "public"."course" ADD CONSTRAINT "course_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table dolos_report
-- ----------------------------
ALTER TABLE "public"."dolos_report" ADD CONSTRAINT "dolos_report_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table exam
-- ----------------------------
ALTER TABLE "public"."exam" ADD CONSTRAINT "exam_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table organization
-- ----------------------------
ALTER TABLE "public"."organization" ADD CONSTRAINT "organization_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table user
-- ----------------------------
ALTER TABLE "public"."user" ADD CONSTRAINT "user_org_user_id_role_unique" UNIQUE ("org_user_id", "role");

-- ----------------------------
-- Primary Key structure for table user
-- ----------------------------
ALTER TABLE "public"."user" ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table code_question
-- ----------------------------
ALTER TABLE "public"."code_question" ADD CONSTRAINT "code_question_exam_id_foreign" FOREIGN KEY ("exam_id") REFERENCES "public"."exam" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."code_question" ADD CONSTRAINT "code_question_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "public"."user" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table code_submission
-- ----------------------------
ALTER TABLE "public"."code_submission" ADD CONSTRAINT "code_submission_code_question_id_foreign" FOREIGN KEY ("code_question_id") REFERENCES "public"."code_question" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."code_submission" ADD CONSTRAINT "code_submission_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "public"."user" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table course
-- ----------------------------
ALTER TABLE "public"."course" ADD CONSTRAINT "course_org_id_foreign" FOREIGN KEY ("org_id") REFERENCES "public"."organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table dolos_report
-- ----------------------------
ALTER TABLE "public"."dolos_report" ADD CONSTRAINT "dolos_report_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "public"."user" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table exam
-- ----------------------------
ALTER TABLE "public"."exam" ADD CONSTRAINT "exam_course_id_foreign" FOREIGN KEY ("course_id") REFERENCES "public"."course" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."exam" ADD CONSTRAINT "exam_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "public"."user" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
