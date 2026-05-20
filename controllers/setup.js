const setupTables = (db) => (req, res) => {
  db.schema
    .hasTable("login")
    .then((exists) => {
      if (!exists) {
        return db.schema
          .createTable("login", (table) => {
            table.increments("id").primary();
            table.string("email").unique().notNullable();
            table.string("hash").notNullable();
          })
          .then(() => {
            return db.schema.hasTable("users");
          })
          .then((exists) => {
            if (!exists) {
              return db.schema.createTable("users", (table) => {
                table.increments("id").primary();
                table.string("name").notNullable();
                table.string("email").unique().notNullable();
                table.timestamp("joined").defaultTo(db.fn.now());
              });
            }
          })
          .then(() => {
            res.json("Tables created");
          })
          .catch((err) => {
            console.log("Setup error:", err);
            res.status(400).json("Setup failed");
          });
      } else {
        res.json("Tables already exist");
      }
    })
    .catch((err) => {
      console.log("Setup error:", err);
      res.status(400).json("Setup failed");
    });
};

module.exports = { setupTables };
