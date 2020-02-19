let ExercisePage = require('./basePage');
const locator = require('../utils/locator');

let userNameSelection, descriptionInput, durationInput, datePicker, createButton, result;

// not working
ExercisePage.prototype.findInputAndButton = async function () {
    userNameSelection = await this.findById("userNameSelection");

    descriptionInput = await this.findById("descriptionInput");
    durationInput = await this.findById("durationInput");
    datePicker = await this.findById('datePicker');

    createButton = await this.findById('createButton');
    console.log("------------------------------ datePicker is ", datePicker);
    const result = await this.driver.wait(async function () {
        // const searchButtonText = await searchButton.getAttribute('value');
        const userNameSelectionEnableFlag = await userNameSelection.isEnabled();

        const descriptionInputEnableFlag = await descriptionInput.isEnabled();
        const durationInputEnableFlag = await durationInput.isEnabled();
        const datePickerEnableFlag = await datePicker.isEnabled();
        const createButtonText = await createButton.getAttribute('value');

        return {
            userNameSelectionEnableFlag: userNameSelectionEnableFlag,
            descriptionInputEnableFlag: descriptionInputEnableFlag,
            durationInputEnableFlag: durationInputEnableFlag,
            datePickerEnableFlag: datePickerEnableFlag,
            createButtonText: createButtonText
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

ExercisePage.prototype.findThroughId = async function(id) {
    // console.log("homePage -- findById");
    result = await this.findById(id);
    // console.log("result is ", result);

    return await this.driver.wait(async function () {
        // console.log("result text is ", result.getText());
        return await result.getText();
    }, 5000);
};

ExercisePage.prototype.findThroughTagName = async function(tag) {
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

// module.exports = Page;
module.exports = ExercisePage;