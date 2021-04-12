
module.exports = {
  signup: async (req, res) => {
    try{
      let user = await User.find({email: req.body.email});
      if(user.length !== 0){
        throw new Error('User already registered');
      }
      user = await User.create(req.body).fetch();
      if (!user){
        throw new Error('Failed');
      }
      res.status(201).json({
        message: 'User Data',
        user: user
      });
    }catch(e){
      res.status(500).json({
        message: e.message
      });
    }
  }
};

