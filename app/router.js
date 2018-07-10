'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = async app => {
  const {router, controller} = app;
  router.get ('/login', controller.home.index);
  router.get ('/', controller.home.index);
};
