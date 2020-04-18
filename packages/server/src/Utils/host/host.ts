export const port = process.env.NODE_ENV === "test" ? 5000 : 4000;
export const host = `http://localhost:${port}/graphql`;
