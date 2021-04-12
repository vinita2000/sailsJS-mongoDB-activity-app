
module.exports = {
  showUser: async (req, res) => {
    try{
      const user = await User.findOne({_id: req.params.userID});
      if (!user){
        throw new Error('NO user');
      }
      res.status(200).json({
        message: 'User Data',
        user: user
      });
    }catch(e){
      res.status(400).json({
        message: e.message
      });
    }
  },
  findAllUsers:  async (req, res) => {
    try{
      const users = await User.find({});
      if (!users || users.length === 0){
        throw new Error('No users');
      }
      res.status(200).json({
        message: 'Users Data',
        users: users
      });
    }catch(e){
      res.status(400).json({
        message: e.message
      });
    }
  },
  update: async (req, res) => {
    try{
      const user = await User.updateOne({_id:req.params.userID}, req.body);
      if (!user){
        throw new Error('No users');
      }
      res.status(200).json({
        message: 'User updated',
        user: user
      });
    }catch(e){
      res.status(400).json({
        message: e.message
      });
    }
  },
  delete: async (req, res) => {
    try{
      const user = await User.findOne({_id: req.params.userID});
      if (!user){
        throw new Error('Invalid User ID');
      }
      await User.destroyOne({_id: req.params.userID});
      res.status(200).json({
        message: 'User deleted'
      });
    }catch(e){
      res.status(400).json({
        message: e.message
      });
    }
  },
};

