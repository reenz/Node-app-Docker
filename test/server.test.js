const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);
const server = require("../server.js");

describe("Index page", () => {
  it("should respond with status 200", (done) => {
    chai.request(server)
    .get("/")
    .end((err, res) => {
      should.not.exist(err);
      res.status.should.equal(200);
      done();
    });
  });

  it("should respond with 'Hello World", (done) => {
    chai.request(server)
    .get("/")
    .end((err, res) => {
      should.not.exist(err);
      res.text.should.equal("Hello World");
      done();
    });
  });
});
