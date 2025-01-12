exports.up = function (knex) {
    return Promise.all([
        appControlTable(knex),
        refConstants(knex),
        appConfig(knex),
        appActivity(knex)
    ]);
}

exports.down = function (knex) {
    return knex.schema
        .dropTable("app_control")
        .dropTable("ref_constant")
        .dropTable("app_config")
        .dropTable("app_activity")
}


function appControlTable(knex) {
    return knex.schema.createTable("app_control", (tbl) => {
        tbl.increments("id");
        tbl.boolean("is_prod").notNullable();
        tbl.boolean("in_maintenance").notNullable();
        tbl.text("maintenance_text");
        tbl.string("ios_version").notNullable();
        tbl.string("android_version").notNullable();
        tbl.string("min_android_version").notNullable();
        tbl.string("min_ios_version").notNullable();
        tbl.string("api_url");
        tbl.string("contact_email");
        tbl.json("app_meta");
        tbl.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
        tbl.dateTime("updated_at");
    });
}

function refConstants(knex) {
    return knex.schema.createTable("ref_constant", (tbl) => {
        tbl.string("ref_value").primary();
        tbl.string("ref_value_code").notNullable();
        tbl.string("ref_label").notNullable();
        tbl.string("ref_table", 20).notNullable();
        tbl.string("ref_column", 20).notNullable();
        tbl.dateTime("created_at").defaultTo(knex.fn.now())
    });
}

function appConfig(knex) {
    return knex.schema.createTable("app_config", (tbl) => {
        tbl.string("key").primary();
        tbl.string("value").notNullable();
        tbl.string("data_type").notNullable();
        tbl.string("comment").notNullable();
        tbl.dateTime("created_at").defaultTo(knex.fn.now())
        tbl.dateTime("updated_at");
    });
}

function appActivity(knex) {
    return knex.schema.createTable("app_activity", (tbl) => {
        tbl.increments("id");
        tbl.string("type").notNullable();
        tbl.string("log").notNullable();
        tbl.text("tags");
        tbl.json("meta");
        tbl.dateTime("created_at").defaultTo(knex.fn.now())
    });
}