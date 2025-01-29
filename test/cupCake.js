
const { I } = inject();
const { assert } = require('chai');
Feature('Cupcake Ipsum Generator');
Scenario('Generate Cupcake Ipsum', async () => {
    I.amOnPage('http://www.cupcakeipsum.com');
    I.see('Cupcake Ipsum - Sugar-coated Lorem Ipsum Generator');
    const paragraphsFieldValue = await I.grabValueFrom('//*[@id="number_of_paragraphs"]');
    assert.equal(paragraphsFieldValue, '5');
    I.checkOption("//div[@id='length_of_paragraph']//input[@value='short']");
    I.checkOption('//*[@name="startsWithCupcakeIpsum"]');
    I.waitForElement('//p', 5);
    I.see('Cupcake ipsum dolor sit amet');
    I.dontSee('//button[text()="Copy to Clipboard"]');
    I.click('//button[text()="Generate"]');
    I.waitForElement('//p', 5);
    I.seeNumberOfElements('//p', 2);
}); 

