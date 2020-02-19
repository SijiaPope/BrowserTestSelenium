// let Page = require('./basePage');
// const locator = require('../utils/locator');
// const fake = require('../utils/fakeData');
//
// const searchInputSelectorId = locator.searchInputSelectorId;
// const searchButtonSelectorName = locator.searchButtonSelectorName;
// const resultConfirmationSelectorId = locator.resultConfirmationId;
//
// const fakeNameKeyword = fake.nameKeyword;
//
// let searchInput, searchButton, resultStat, result;
//
// Page.prototype.findInputAndButton = async function () {
//     // searchInput = await this.findByName(searchInputSelectorId);
//     // searchButton = await this.findByName(searchButtonSelectorName);
//     let searchInput = await this.findById("usernameId");
//     let searchButton = await this.findById("inputId");
//     const result = await this.driver.wait(async function () {
//         const searchButtonText = await searchButton.getAttribute('value');
//         const searchInputEnableFlag = await searchInput.isEnabled();
//         return {
//             inputEnabled: searchInputEnableFlag,
//             buttonText: searchButtonText
//         }
//     }, 5000);
//     return result;
// };
//
// // Page.prototype.submitKeywordAndGetResult = async function() {
// //     await this.findInputAndButton();
// //
// //     await this.write(searchInput, fakeNameKeyword);
// //     console.log('search input is ' + fakeNameKeyword);
// //
// //     await searchButton.click();
// //     console.log("clicked search button");
// //     resultStat = await this.findById(resultConfirmationSelectorId);
// //     return await this.driver.wait(async function () {
// //         return await resultStat.getText();
// //     }, 5000);
// // };
//
// Page.prototype.findThroughId = async function(id) {
//     // console.log("homePage -- findById");
//     result = await this.findById(id);
//     // console.log("result is ", result);
//
//     return await this.driver.wait(async function () {
//         // console.log("result text is ", result.getText());
//         return await result.getText();
//     }, 5000);
// };
//
// Page.prototype.findThroughTagName = async function(tag) {
//     // console.log("homePage.js -- findThroughTagName");
//     try{
//         result = await this.findByTagName(tag);
//
//     } catch (e) {
//         // console.log("homePage.js -- ERROR ", e);
//     }
//
//     return await this.driver.wait(async function () {
//         const text = await result.getText();
//         // console.log("homePage.js -- result text is ", text);
//         return text;
//     }, 5000);
// };
//
// module.exports = Page;