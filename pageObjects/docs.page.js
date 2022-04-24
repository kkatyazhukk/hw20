const Page = require('./page');

class DocsPage extends Page {
    get docsTitle() {
        return $(`//*[@class = 'theme-doc-markdown markdown']/header/h1`);
    }

    get getExpandedList() {
        return $(`//*[@id="__docusaurus"]/div[3]/div/aside/div/nav/ul/li[2]/div`);
    }

    get getExpandedItem() {
        return $(`//*/li[@class = 'theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item']/a[@href = '/docs/setuptypes']`);
    }

}

module.exports = new DocsPage();
