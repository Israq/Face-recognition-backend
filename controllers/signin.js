const jwt = require("jsonwebtoken");

const handleSignin = (db, bcrypt) => (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("Incorrect Form Submission");
  }
  db.select("email", "hash")
    .from("login")
    .where("email", "=", email)
    .then((data) => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db
          .select("*")
          .from("users")
          .where("email", "=", email)
          .then((user) => {
            const token = jwt.sign(
              { id: user[0].id, email: user[0].email },
              "your-secret-key",
              { expiresIn: "7d" },
            );
            res.json({ ...user[0], token });
          })
          .catch((err) => {
            console.log("Signin error:", err);
            res.status(400).json("Wrong credentials");
          });
      } else {
        res.status(400).json("Wrong Credentials");
      }
    })
    .catch((err) => res.status(400).json("Wrong credentials"));
};

module.exports = {
  handleSignin: handleSignin,
};
