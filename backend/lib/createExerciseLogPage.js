let Page = require('./basePage');
const locator = require('../utils/locator');

let descriptionInput, durationInput, dateLabel, result;

// Page.prototype.findInputAndButton = async function () {
//     // searchInput = await this.findByName(searchInputSelectorId);
//     // searchButton = await this.findByName(searchButtonSelectorName);
//     console.log("homePage.js -- findInputAndButton");
//     searchInput = await this.findById("usernameId");
//     console.log("**************  search input is ", await searchInput.getAttribute('value'));
//
//     console.log("------- start to search button");
//     searchButton = await this.findById("inputId");
//     console.log("********  search button is ", await searchButton);
//     searchButton.click();
//
//     console.log("**************  search button is ", await searchButton.getAttribute('value'));
//
//     const result = await this.driver.wait(async function () {
//         const searchButtonText = await searchButton.getAttribute('value');
//         console.log("searchButtonText is ", searchButtonText);
//         const searchInputEnableFlag = await searchInput.isEnabled();
//
//         return {
//             inputEnabled: searchInputEnableFlag,
//             buttonText: searchButtonText
//         }
//     }, 5000);
//     return result;
// };

// not working
Page.prototype.findInputAndButton = async function () {
    descriptionInput = await this.findById("descriptionInput");
    // durationInput = await this.findThroughId("durationLabel");
    // dateLabel = await this.findThroughId("dateLabel"); // it is a date
    console.log("------------------------------ descriptionInput is ", descriptionInput);
    const result = await this.driver.wait(async function () {
        // const searchButtonText = await searchButton.getAttribute('value');
        const descriptionInputEnableFlag = await descriptionInput.isEnabled();
        return {
            inputEnabled: descriptionInputEnableFlag,
            // buttonText: searchButtonText
        }
    }, 5000);
    return result;
};

// Page.prototype.submitKeywordAndGetResult = async function() {
//     await this.findInputAndButton();
//
//     await this.write(searchInput, fakeNameKeyword);
//     console.log('search input is ' + fakeNameKeyword);
//
//     await searchButton.click();
//     console.log("clicked search button");
//     resultStat = await this.findById(resultConfirmationSelectorId);
//     return await this.driver.wait(async function () {
//         return await resultStat.getText();
//     }, 5000);
// };

Page.prototype.findThroughId = async function(id) {
    // console.log("homePage -- findById");
    result = await this.findById(id);
    // console.log("result is ", result);

    return await this.driver.wait(async function () {
        // console.log("result text is ", result.getText());
        return await result.getText();
    }, 5000);
};

Page.prototype.findThroughTagName = async function(tag) {
    console.log("homePage.js -- findThroughTagName");
    try{
        result = await this.findByTagName(tag);

    } catch (e) {
        console.log("homePage.js -- ERROR ", e);
    }

    return await this.driver.wait(async function () {
        const text = await result.getText();
        console.log("homePage.js -- result text is ", text);
        return text;
    }, 5000);
};

module.exports = Page;