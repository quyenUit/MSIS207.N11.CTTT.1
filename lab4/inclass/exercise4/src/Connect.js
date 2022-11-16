const express = require("express");
const app = express();

app.use(express.json());

const messages = [
  {
    author: "SC",
    text: "Rolls complete and a pitch is program. one Bravo.",
  },
  {
    author: "SC",
    text: "Rolls complete and a pitch is program. one Bravo.",
  },
  {
    author: "SC",
    text: "Rolls complete and a pitch is program. one Bravo.",
  },
];

app.get("/messages/:forum", (request, response) => {
  if (request.params && request.params.forum === "nasa") {
    messages.push(request.body);
    return response.send("OK");
  }
  return response.status(404).send({ error: "Unknown forum" });
  app.listen(5000, () => console.log(" Laugched on port 5000!"));
});
