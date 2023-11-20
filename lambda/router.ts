import { Hono, Context, Env } from "hono";
import { honoNotImplementedAdapter } from "./adapter";

export const router = (app: Hono) => {
    app.get("/", (c) => c.json({
        name: "name",
        email: "email",
        message: "hogehoge"
    }))

    app.get("/user/:id", (c) => {
        c.status(202);
        return c.json({ name: "name", id: c.req.param("id") })
    })

    app.get("/user", (c) => {
        return honoNotImplementedAdapter(c);
    })
}
