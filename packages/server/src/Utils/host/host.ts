export const port =
  process.env.NODE_ENV === "test"
    ? process.env.Test_PORT
    : process.env.DEVOP_PORT;
export const host = `http://localhost:${port}/graphql`;
