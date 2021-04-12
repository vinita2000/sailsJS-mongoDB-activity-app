const bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string'
    },
    email: {
      type: 'string',
      isEmail: true,
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },
  customToJSON: function() {
    return _.omit(this, ['password']);
  },
  beforeCreate: (value, next) => {
    bcrypt.hash(value.password, 10, (err, hash) => {
      if (err){
        throw new Error(err);
      }
      value.password = hash;
      next();
    });
  },
};

