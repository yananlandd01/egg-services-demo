'use strict';
const Controller = require ('egg').Controller;

// assembly response body
const assemblyBody = (code, msg, data) => {
  const body = {
    code: code,
    msg: msg,
    data: data,
  };
  return body;
};

class HomeController extends Controller {
  async index () {
    // 'this.ctx.query' can get query of requests
    const querySearch = this.ctx.query.userName;
    const password = this.ctx.query.password;

    // get db from the table of username with async
    const queryData = await this.ctx.app.mysql.get ('username', {
      username: querySearch,
    });

    if (parseInt (password) === queryData.password) {
      body = assemblyBody (0, 'success', {
        auth: {},
      });
    } else {
      body = assemblyBody (-1, 'failed', {});
    }
    this.ctx.body = JSON.stringify (body);
  }
}

module.exports = HomeController;
