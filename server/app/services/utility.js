
module.exports = {
  loggedIn: function (req, res, next) {
    // No login implemented
    next();

    // if (req.user) {
    //   next();
    // } else {
    //   res.send({
    //     auth: {
    //       user_login_done : false
    //     }
    //   });
    // }
  }
}
