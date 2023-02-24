var express = require('express');
var router = express.Router();

router.post('/register', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.render('index', { user });
  });
  
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({
      username,
      password
    });
  
    if (user) {
      return res.render('index', { user });
    } else {
      return res.render('login', { message: 'Email or Password incorrect' });
    }
  });
module.exports = router;