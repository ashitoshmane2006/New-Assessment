Feature('Marksheet Signup');

Scenario('Complete Signup Form', async ({ I }) => {
    I.amOnPage('https://marksheet.io/html-forms.html');
    I.checkOption('//*[@value="miss"]');
    I.fillField('(//label[contains(text(),"First name")]/following-sibling::input)[2]', 'John');
    I.fillField('//label[contains(text(),"Last name")]/following-sibling::input', 'Smith');
    I.fillField('(//label[contains(text(),"Email")]/following-sibling::input)[2]', 'john.smith@test.com');
    I.fillField('//label[contains(text(),"Phone number")]/following-sibling::input', '555-5555');
    I.fillField('//label[contains(text(),"Password")]/following-sibling::input', 'password');
    I.fillField('//label[contains(text(),"Confirm your password")]/following-sibling::input', 'password');
    I.selectOption('//label[contains(text(),"Country")]/following-sibling::select', 'United States');
    I.checkOption('(//label/input[@type="checkbox"])[3]');
    I.click('//p/button');
    I.seeInCurrentUrl('https://marksheet.io/signup');
    I.see('403');
    const response = await I.sendGetRequest('/signup');
    I.assertEqual(response.status, 403);
});
