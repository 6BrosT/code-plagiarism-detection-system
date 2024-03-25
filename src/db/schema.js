import db from "../utils/db.js";

await db.schema.hasTable("organization").then((exists) => {
  if (!exists) {
    console.log("Creating organization table");
    return db.schema.createTable("organization", (table) => {
      table.uuid("id").notNullable().defaultTo(db.fn.uuid());
      table.string("name", 50).notNullable();
      table.dateTime("created_at").notNullable().defaultTo(db.fn.now());
      table.dateTime("updated_at").notNullable().defaultTo(db.fn.now());
      table.primary("id");
    });
  }
});

await db.schema.hasTable("user").then((exists) => {
  if (!exists) {
    console.log("Creating user table");
    return db.schema.createTable("user", (table) => {
      table.uuid("id").notNullable().defaultTo(db.fn.uuid());
      table.string("name", 50).notNullable();
      table.integer("role").notNullable().defaultTo(2);
      table.string("org_user_id", 50);
      table.dateTime("created_at").notNullable().defaultTo(db.fn.now());
      table.dateTime("updated_at").notNullable().defaultTo(db.fn.now());
      table.primary("id");
      table.unique(["org_user_id", "role"]);
    });
  }
});

await db.schema.hasTable("course").then((exists) => {
  if (!exists) {
    console.log("Creating course table");
    return db.schema.createTable("course", (table) => {
      table.uuid("id").notNullable().defaultTo(db.fn.uuid());
      table.uuid("org_id").notNullable().defaultTo(db.fn.uuid());
      table.string("name", 50).notNullable();
      table.dateTime("created_at").notNullable().defaultTo(db.fn.now());
      table.dateTime("updated_at").notNullable().defaultTo(db.fn.now());
      table.primary("id");
      table.foreign("org_id").references("organization.id");
    });
  }
});

await db.schema.hasTable("exam").then((exists) => {
  if (!exists) {
    console.log("Creating exam table");
    return db.schema.createTable("exam", (table) => {
      table.uuid("id").notNullable().defaultTo(db.fn.uuid());
      table.uuid("course_id").notNullable().defaultTo(db.fn.uuid());
      table.string("name", 50).notNullable();
      table.uuid("user_id").notNullable().defaultTo(db.fn.uuid());
      table.dateTime("created_at").notNullable().defaultTo(db.fn.now());
      table.dateTime("updated_at").notNullable().defaultTo(db.fn.now());
      table.primary("id");
      table.foreign("course_id").references("course.id");
      table.foreign("user_id").references("user.id");
    });
  }
});

await db.schema.hasTable("code_question").then((exists) => {
  if (!exists) {
    console.log("Creating code_question table");
    return db.schema.createTable("code_question", (table) => {
      table.uuid("id").notNullable().defaultTo(db.fn.uuid());
      table.string("title", 50).notNullable();
      table.uuid("exam_id").notNullable().defaultTo(db.fn.uuid());
      table.uuid("user_id").notNullable().defaultTo(db.fn.uuid());
      table.dateTime("created_at").notNullable().defaultTo(db.fn.now());
      table.dateTime("updated_at").notNullable().defaultTo(db.fn.now());
      table.primary("id");
      table.foreign("exam_id").references("exam.id");
      table.foreign("user_id").references("user.id");
    });
  }
});

await db.schema.hasTable("code_submission").then((exists) => {
  if (!exists) {
    console.log("Creating code_submission table");
    return db.schema.createTable("code_submission", (table) => {
      table.uuid("id").notNullable().defaultTo(db.fn.uuid());
      table.uuid("code_question_id").notNullable().defaultTo(db.fn.uuid());
      table.text("programming_language_name").notNullable();
      table.text("source_code").notNullable();
      table.uuid("user_id").notNullable().defaultTo(db.fn.uuid());
      table.dateTime("created_at").notNullable().defaultTo(db.fn.now());
      table.dateTime("updated_at").notNullable().defaultTo(db.fn.now());
      table.primary("id");
      table.foreign("code_question_id").references("code_question.id");
      table.foreign("user_id").references("user.id");
    });
  }
});

await db.schema.hasTable("dolos_report").then((exists) => {
  if (!exists) {
    console.log("Creating dolos_report table");
    return db.schema.createTable("dolos_report", (table) => {
      table.uuid("id").notNullable().defaultTo(db.fn.uuid());
      table.string("name", 50).notNullable();
      table.string("programming_language_name", 50).notNullable();
      table.text("programming_language_extensions").notNullable();
      table.text("compared_code_question_ids").notNullable();
      table.text("pairs_json_content").notNullable();
      table.uuid("user_id").notNullable().defaultTo(db.fn.uuid());
      table.dateTime("created_at").notNullable().defaultTo(db.fn.now());
      table.dateTime("updated_at").notNullable().defaultTo(db.fn.now());
      table.primary("id");
      table.foreign("user_id").references("user.id");
    });
  }
});
