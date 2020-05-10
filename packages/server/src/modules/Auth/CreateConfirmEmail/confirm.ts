import { app } from "../../../StartServer";

export const ConfirmEmail = async () => {
  app.get("/graphql/confirm/:token", async (req, res) => {
    console.log("req Token", req.params);
    return res.redirect("http://localhost:4000/graphql");
  });
};
