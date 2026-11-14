import express from "express";
import itemRoutes from "./routes/item.js";
import logger from "./middleware/logger.js";
import { errorHandler } from "./middleware/error.js";

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({
    message: "Inventory API is running"
  });
});

app.use("/items", itemRoutes);

app.use(errorHandler);

const port = process.env.PORT || 3000;

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;