import { Context } from "hono";

/**
 * This is the just wrapper of the Hono.
 * This returns 405 Not Implemented.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
 * @param c
 */
export const honoMethodNotAllowAdapter = (c: Context): Response => {
	c.header("Content-Type", "text/plain");
	c.status(405);
	return c.text("Method Not Allowed");
};

/**
 * This is the just wrapper of the Hono.
 * This returns 501 Not Implemented.
 * Used when it is implemented that will be implemented future.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
 * @param c
 */
export const honoNotImplementedAdapter = (c: Context): Response => {
	c.header("Content-Type", "text/plain");
	c.status(501);
	return c.text("Not Implemented");
};
