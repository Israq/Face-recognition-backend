const handleApiCall = (req, res) => {
  const PAT = "92df0e4f1578415c934b8e635fa36a01";
  const USER_ID = "clarifai";
  const APP_ID = "main";
  const MODEL_ID = "face-detection";
  const IMAGE_URL = req.body.input;

  const raw = JSON.stringify({
    user_app_id: { user_id: USER_ID, app_id: APP_ID },
    inputs: [{ data: { image: { url: IMAGE_URL } } }],
  });

  fetch(`https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
      "Content-Type": "application/json",
    },
    body: raw,
  })
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("API Error:", err);
      res.status(400).json("Unable to Work with API");
    });
};

const handleImage = (req, res, db) => {
  console.log("handleImage called with body:", req.body);
  const { id } = req.body;
  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => {
      console.log("Image update success:", entries);
      res.json(entries[0].entries);
    })
    .catch((err) => {
      console.log("Image error:", err);
      res.status(400).json("Unable to Get Entries");
    });
};

module.exports = {
  handleImage,
  handleApiCall,
};
