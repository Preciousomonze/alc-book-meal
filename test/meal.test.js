import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/index';
// import MealData from './data/mealDummyData';

// During the test the env variable is set to test
process.env.NODE_ENV = 'test';
const server = app;
chai.use(chaiHttp);
chai.should(); // simpler english for me

// Our parent block
describe('TESTING FOR MEALS', () => {
  const apiRoute = '/api/v1/';
  /*
   * Test the /GET /meals/
   */
  describe('/GET /meals/', () => {
    it('It should get all the meals', (done) => {
      chai.request(server)
        .get(`${apiRoute}meals`)
        .end((err, res) => {
          res.should.have.property('status', 200);
          res.body.should.be.an('object');
          console.log(res.body);
          done(err);
        });
    });
  });

  /*
   * Test the /POST /meals/
   */
  describe('/POST /meals/', () => {
    it('It should add a meal', (done) => {
      const meal = {
        name: 'continental',
        size: 'large',
        prize: '2500',
      };
      chai.request(server)
        .post(`${apiRoute}meals`)
        .send(meal)
        .end((err, res) => {
          res.should.have.property('status', 200);
          res.body.should.be.an('object');
          done(err);
        });
    });
  });
});
