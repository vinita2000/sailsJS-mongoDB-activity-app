
module.exports.routes = {
  // sign up route
  'POST /api/v1/signup': {action: 'signup/signup'},
  // login route
  'PUT /api/v1/login': {action: 'login/login'},
  // user routes
  'GET /api/v1/showUser/:userID': {action: 'user/showUser'},
  'GET /api/v1/find-all-users': {action: 'user/findAllUsers'},
  'PUT /api/v1/update-user/:userID': {action: 'user/update'},
  'DELETE /api/v1/delete-user/:userID': {action: 'user/delete'},
};
