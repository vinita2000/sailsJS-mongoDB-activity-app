const bcrypt = require('bcrypt');
module.exports = {
  login: async (req, res) => {
    try{
      const user = await User.findOne({email: req.body.email});
      if (!user){
        throw new Error('Failed to find User');
      }
      const isMatched = await bcrypt.compare(`${req.body.password}`,`${user.password}`);
      if (!isMatched){
        throw new Error('Incorrect Password');
      }
      res.status(201).json({
        message: 'User logged In',
        user: user
      });
    }catch(e){
      res.status(401).json({
        message: e.message
      });
    }
  },
};

