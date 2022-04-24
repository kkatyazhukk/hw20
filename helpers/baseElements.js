class BaseElement {
    static async wrap(wdioElement) {
        const baseElement = new BaseElement();
        baseElement.webElement = wdioElement;
        return baseElement;
      }
    
      static async get(selector) {
        if (!(selector instanceof BaseElement)) {
          const element = await BaseElement.wrap(await $(selector));
          element.selector = selector;
          return element;
        }
        return selector;
      }
    
      static async getArray(selector) {
        const elements = await $$(selector);
        const baseElementsArray = [];
        for (const element of elements) {
          const baseElement = await BaseElement.wrap(element);
          baseElement.selector = selector;
          baseElementsArray.push(baseElement);
        }
        return baseElementsArray;
      }

      getElement() {
        return this.webElement;
      }

      async click(options) {
        await this.getElement().waitForEnabled();
        return this.getElement().click(options);
      }
}

module.exports = BaseElement;