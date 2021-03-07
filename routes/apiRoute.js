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

  app.post("/api/notes", (req, res) => {
    const { title, text } = req.body;
    const newNote = { title, text, id: Math.floor(Math.random() * 99) };
    data.push(newNote);
    saveNote(data);

    res.JSON(data);
  });
};
