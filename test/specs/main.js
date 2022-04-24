const Header = require('../../pageobjects/pageComponents/header');
const HomePage = require('../../pageobjects/home.page');
const DocsPage = require('../../pageObjects/docs.page');
const { expect } = require('chai');

const header = new Header();

describe('Webdriver.io tests', function() {

    it(`Check navigating to "API" page`, async () => {
        await HomePage.navigate('https://webdriver.io/');
        await header.goToWebsiteSection('API');
        const url = await browser.getUrl();
        expect(url).to.be.equal('https://webdriver.io/docs/api');
    })

    it(`Check closing of "Announcement" bar`, async () => {
        await HomePage.navigate('https://webdriver.io/');
        await header.closeAnnouncementBar.waitForClickable();
        await header.closeAnnouncementBar.click();
        const announcementBar = await header.announcementBar;
        expect(announcementBar).to.not.exist;
        //Женя, подскажи, плиз, как сделать здесь проверку на то, что элемента не существует в dom дереве?
        //перепробовала все в интернете, но нашла только метод .dom.to.be.visible() в chai-webdriver. 
        //А как можно сделать проверку в просто chai?
    })

    it(`Check search`, async () => {
        await HomePage.navigate('https://webdriver.io/');
        await header.searchButton.waitForClickable();
        await header.searchButton.click();

        await header.searchInput.waitForClickable();
        await header.searchInput.setValue('mock');

        await header.firstResult.waitForClickable();
        await header.firstResult.click();

        await DocsPage.docsTitle.isDisplayed();
        const title = await DocsPage.docsTitle.getText();

        expect(title).to.contain('mock');
    })

    it(`Check extended list`, async () => {
        await HomePage.navigate('https://webdriver.io/');
        await header.goToWebsiteSection('Docs');
        await DocsPage.getExpandedList.waitForClickable();
        await DocsPage.getExpandedList.click();

        await DocsPage.getExpandedItem.isDisplayed();
        expect(await DocsPage.getExpandedItem).to.exist;
    })

})