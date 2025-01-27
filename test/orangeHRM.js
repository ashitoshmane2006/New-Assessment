Feature('OrangeHRM Login');

Scenario('Login and Logout', async ({ I }) => {
    I.amOnPage('https://opensource-demo.orangehrmlive.com');
    
    I.fillField('//input[@name="username"]', 'Admin');
    I.fillField('//input[@name="password"]', 'admin123');
    I.click('//button[@type="submit"]');
    I.see('Dashboard');
    I.click('//*[text()="Admin"]');
    I.see('Records Found');
    I.say('Records Found displayed');
    I.click('//*[@class="oxd-userdropdown-tab"]'); 
    const dropdownOptions = ['About', 'Support', 'Change Password', 'Logout'];
    for (const option of dropdownOptions) {
        I.see(option); 
    }
    I.click('//a[text()="Logout"]');
    I.see('Login'); 
});