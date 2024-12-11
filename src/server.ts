import "dotenv/config";
import app from "./app.ts";

const port: number = +(process.env.PORT ?? 3000);

app.listen(port, (): void => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
