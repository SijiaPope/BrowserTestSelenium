// const { describe, it, after, before } = require('mocha');
// const Page = require('../lib/createExerciseLogPage');
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
//         describe('Create New Exercise Log page automated testing', async function () {
//             this.timeout(5000);
//             let driver, page;
//
//             beforeEach(async () => {
//                 page = new Page();
//                 driver = page.driver;
//                 await page.visit("http://localhost:3000/create");
//
//             });
//
//             afterEach(async () => {
//                 await page.quit();
//             });
//
//             // TODO: worked
//             it('Create New Exercise Log -- check if contents are displayed ', async () => {
//                 const title = await page.findThroughTagName("h3");
//                 expect(title).to.equal('Create New Exercise Log');
//
//                 const usernameLabel = await page.findThroughId("usernameLabel");
//                 expect(usernameLabel).to.equal('Username:');
//
//                 const descriptionLabel = await page.findThroughId("descriptionLabel");
//                 expect(descriptionLabel).to.equal('Description:');
//
//                 const durationLabel = await page.findThroughId("durationLabel");
//                 expect(durationLabel).to.equal('Duration (in minutes):');
//
//                 const dateLabel = await page.findThroughId("dateLabel");
//                 expect(dateLabel).to.equal('Date:');
//
//             });
//
//             it('find the input box and button', async () => {
//             const result = await page.findInputAndButton();
//             expect(result.inputEnabled).to.equal(true);
//             expect(result.buttonText).to.include('Create User');
//         });
//
//             // TODO: Front-end needs to add action after click on submit button
//             // it('put name in input box and click create-user button', async () => {
//             //     const result = await page.submitKeywordAndGetResult();
//             //     expect(result.length).to.be.above(3);
//             // });
//
//
//
//
//
//         });
//     } catch (ex) {
//         console.log(new Error(ex.message));
//     } finally {
//
//     }
// })();