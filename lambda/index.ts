import { Context, Env, Hono } from "hono"
import { handle } from "hono/aws-lambda"
import { router } from "./router";

const app = new Hono();

router(app);

export const handler = handle(app);
