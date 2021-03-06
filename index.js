import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import logger from "node-color-log";

const { PORT } = process.env;

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});

const server = app.listen(PORT, () => {
  logger
    .bold()
    .color("black")
    .bgColor("green")
    .log(`Server running at http://localhost:${PORT}`);
});
