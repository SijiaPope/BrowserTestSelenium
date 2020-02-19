// const { describe, it, after, before } = require('mocha');
// const Page = require('../lib/homePage');
// const dotenv = require('dotenv');
// dotenv.config();
// const chai = require('chai');
// const expect = chai.expect;
// const chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);
//
// process.on('unhandledRejection', () => { });
//
// (async function example() {
//     try {
//         describe('Home page automated testing', async function () {
//             this.timeout(5000);
//             let driver, page;
//
//             beforeEach(async () => {
//                 page = new Page();
//                 driver = page.driver;
//                 await page.visit(process.env.TESTING_URL);
//             });
//
//             afterEach(async () => {
//                 await page.quit();
//             });
//
//             it('find all the tags on the home page', async () => {
//                 const exercise = await page.findThroughId("exercises");
//                 expect(exercise).to.equal('Exercises');
//
//                 const createExercise = await page.findThroughId("createExercise");
//                 expect(createExercise).to.equal('Create Exercise Log');
//
//                 const createUser = await page.findThroughId("createUser");
//                 expect(createUser).to.equal('Create User');
//             });
//
//             it('Create User Tag -- contents are displayed ', async () => {
//                 const tag = await page.findThroughTagName("h3");
//                 expect(tag).to.equal('Logged Exercises');
//             });
//
//         });
//     } catch (ex) {
//         console.log(new Error(ex.message));
//     } finally {
//
//     }
// })();