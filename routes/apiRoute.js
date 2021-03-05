const db = require("../db/db.json");
const fs = require("fs");

module.exports = (app) => {
  app.get("/api/notes", (req, res) =>
    fs.readFile(db, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.JSON(data);
    })
  );

  
};
