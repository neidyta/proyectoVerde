require("dotenv").config();
const express = require("express");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const habitoRoutes = require("./routes/habitoRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/auth", authRoutes);
app.use("/api/habitos", habitoRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "landing.html"));
});

app.get("/registro", (req, res) => {
    res.sendFile(
        path.join(__dirname, "views", "registro.html")
    );
});

app.get("/login", (req, res) => {

    res.sendFile(
        path.join(__dirname, "views", "login.html")
    );

});

app.get("/dashboard", (req, res) => {

    res.sendFile(
        path.join(__dirname, "views", "dashboard.html")
    );

});

app.get("/resultados", (req, res) => {

    res.sendFile(
        path.join(__dirname, "views", "resultados.html")
    );

});

app.get("/recomendaciones", (req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            "views",
            "recomendaciones.html"
        )
    );

});

app.get("/mis-registros", (req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            "views",
            "misRegistros.html"
        )
    );

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});