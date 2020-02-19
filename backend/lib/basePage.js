const {Builder, By, until} = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
let o = new chrome.Options();
// o.addArguments('start-fullscreen');
o.addArguments('disable-infobars');
o.addArguments('headless'); // running test on visual chrome browser
o.setUserPreferences({ credential_enable_service: false });

var Page = function() {
    this.driver = new Builder()
        .setChromeOptions(o)
        .forBrowser('chrome')
        .build();

    // visit a webpage
    this.visit = async function(theUrl) {
        return await this.driver.get(theUrl);
    };

    // quit current session
    this.quit = async function() {
        return await this.driver.quit();
    };

    // wait and find a specific element with it's id
    this.findById = async function(id) {
        // console.log("basePage -- findById");
        // console.log("the id is ", id);
        // console.log("basePage -- findById -- id is -- ", id);
        await this.driver.wait(until.elementLocated(By.id(id)), 1000, 'Looking for element');
        let result = await this.driver.findElement(By.id(id));
        // console.log("findById result is ", result);
        return await this.driver.findElement({id: id});
    };

    // wait and find a specific element with it's name
    this.findByName = async function(name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 15000, 'Looking for element');
        return await this.driver.findElement(By.name(name));
    };

    this.findByXpath = async function(name) {
        await this.driver.wait(until.elementLocated(By.xpath(name)), 15000, 'Looking for element');
        return await this.driver.findElement(By.xpath(name));
    };

    // fill input web elements
    this.write = async function (el, txt) {
        return await el.sendKeys(txt);
    };

    this.findByCSSSelector = async function(name){
        await this.driver.wait(until.elementLocated(By.css(name)), 15000, 'Looking for element');
        return await this.driver.findElement(By.css(name));
    };

    this.findByTagName = async function(name){
        // console.log('basePage.js -- findByTagName');
        await this.driver.wait(until.elementLocated(By.css(name)), 15000, 'Looking for element');
        return await this.driver.findElement(By.css(name));
    };


    this.findByClassName = async function(name){
        // console.log('basePage.js -- findByClassName');
        await this.driver.wait(until.elementLocated(By.className(name)), 15000, 'Looking for element');
        return await this.driver.findElement(By.className(name));
    };


};

module.exports = Page;