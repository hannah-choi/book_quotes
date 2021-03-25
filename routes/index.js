var express = require("express");
var router = express.Router();
const db = require("../bin/db.js");
const { rollback } = require("../bin/db.js");

router.get("/", function (req, res, next) {
    const columns = ["id", "author", "title", "contents", "heart"];
    db.query(
        `SELECT ??, date_format(date, '%d %b, %Y') AS date from bookquotes ORDER BY id DESC;`,
        [columns],
        (err, rows, fields) => {
            res.render("index", { rows: rows });
        }
    );
});

router.get("/create", function (req, res) {
    res.render("create", {
        pageTitle: "Write new post",
        action: "/create",
        title: "",
        author: "",
        contents: "",
        id: "",
    });
});

router.post("/create", function (req, res) {
    const columns = ["author", "title", "contents"];
    const values = [req.body.author, req.body.bookTitle, req.body.bookContents];
    db.query(
        `INSERT INTO bookquotes(??) VALUES(?)`,
        [columns, values],
        function (err, rows, fields) {
            if (err) throw err;
            res.redirect("/");
        }
    );
});

router.get("/update", function (req, res) {
    const param = { id: +req.query.id };
    db.query(`SELECT * FROM bookquotes WHERE ?`, param, (err, rows, fields) => {
        res.render("create", {
            pageTitle: "Update post",
            action: "/update",
            title: rows[0].title,
            author: rows[0].author,
            contents: rows[0].contents,
            id: rows[0].id,
        });
    });
});

router.post("/update", function (req, res) {
    const param1 = { author: req.body.author };
    const param2 = { title: req.body.bookTitle };
    const param3 = { contents: req.body.bookContents };
    const param4 = { id: +req.body.id };
    db.query(
        `UPDATE bookquotes SET ?, ?, ? WHERE ?`,
        [param1, param2, param3, param4],
        function (err, rows, fields) {
            if (err) throw err;
            res.redirect("/");
        }
    );
});

router.get("/likeupdate", function (req, res) {
    const param1 = { heart: +req.query.like };
    const param2 = { id: +req.query.id };
    db.query(
        `UPDATE bookquotes SET ? WHERE ?`,
        [param1, param2],
        (err, rows, fields) => {
            if (err) throw err;
            res.sendStatus(200);
        }
    );
});

router.get("/delete", function (req, res) {
    const param = { id: req.query.id };
    db.query(
        `DELETE FROM bookquotes WHERE ?`,
        param,
        function (err, rows, fields) {
            if (err) throw err;
            res.redirect("/");
        }
    );
});

module.exports = router;
