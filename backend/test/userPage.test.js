const { describe, it, after, before } = require('mocha');
const Page = require('../lib/homePage');
const dotenv = require('dotenv');
dotenv.config();
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => { });

(async function example() {
    try {
        describe('User page automated testing', async function () {
            this.timeout(5000);
            let driver, page;

            beforeEach(async () => {
                page = new Page();
                driver = page.driver;
                await page.visit(`${process.env.TESTING_URL}/user`);
                // await page.visit("http://localhost:3000/user");
            });

            afterEach(async () => {
                await page.quit();
            });

            it('find the input box and button', async () => {
                const result = await page.findInputAndButton();
                expect(result.inputEnabled).to.equal(true);
                expect(result.buttonText).to.include('Create User');
            });

            // // TODO: worked
            it('Create User -- check if contents are displayed ', async () => {
                const title = await page.findThroughTagName("h3");
                expect(title).to.equal('Create New User');

                const UserNameLable = await page.findThroughTagName("label");
                console.log("UserNameLable is ", UserNameLable);
                expect(UserNameLable).to.equal('Username:');

            });


        });
    } catch (ex) {
        console.log(new Error(ex.message));
    } finally {

    }
})();