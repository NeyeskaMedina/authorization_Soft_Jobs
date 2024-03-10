import loginRoutes from "./config/routes/loginRoutes.js";
import usersRoutes from "./config/routes/usersRoutes.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


app.use("/", usersRoutes);
app.use("/", loginRoutes)

app.listen(PORT, console.log(`¡Servidor encendido en el puerto ${PORT})`));