app.get("/confirmation/:token", async (req, res) => {
  try {
    const {
      user: { id },
    } = jwt.verify(req.params.token, EMAIL_SECRET);
    await User.update({ confirmed: true }, { where: { id } });
  } catch (e) {
    res.send("error");
  }

  return res.redirect("http://localhost:3001/login");
});
