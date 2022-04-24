const BaseElement = require('../../helpers/baseElements');

class Header {
    constructor() {
        this.buttonByText = function(text) {
            return $(`//*[text()="${text}"]`)
        }
    }

    get menuButton() {
        return $(`//*[@class = 'navbar__items']`);
    }

    get apiButton() {
        return $(`//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]`);
    }

    get closeAnnouncementBar() {
        return $(`//*[@class = 'clean-btn close announcementBarClose_FG1z']`);
    } 

    get announcementBar() {
        return $(`//*[@class = 'announcementBar_IbjG']`);
    } 

    get searchButton() {
        return $(`//*[@class = 'DocSearch-Button-Placeholder']`);
    }

    get searchInput() {
        return $(`//*[@class = 'DocSearch-Input']`);
    }

    get firstResult() {
        return $(`//*[@id = 'docsearch-item-0']`);
    }

    async goToWebsiteSection(buttonText) {
        const headerButton = await this.buttonByText(buttonText);
        await headerButton.waitForClickable();
        await headerButton.click();
    }

}

module.exports = Header;