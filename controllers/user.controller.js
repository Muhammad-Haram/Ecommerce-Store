export const usertest = (req, res) => {
  try {
    res.send("userRoute test trigger");
  } catch (error) {
    console.log(error, "userRoute error");
  }
};

export const userpost = (req, res) => {
  try {
    const { username } = req.body;
    res.send(`hello ${username}`);
  } catch (error) {
    console.log(error, "userRoute error");
  }
};
