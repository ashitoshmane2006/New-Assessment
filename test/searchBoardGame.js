Feature('BoardGameGeek Search');

Scenario('Search for Harry Potter Trivia Game', async ({ I }) => {
    I.amOnPage('https://www.boardgamegeek.com/advsearch/boardgame.com/');
    I.fillField('//*[@id="advsearch-title"]', "Harry Potter and the Sorcerer's Stone Trivia Game");
    I.fillField('//*[@id="advsearch-yearpublished-min"]', '1999');
    I.fillField('//*[@id="advsearch-yearpublished-max"]', '2000');
    I.selectOption('//*[@id="advsearch-min-playing-time"]', '15 minutes');
    I.selectOption('//*[@id="advsearch-max-playing-time"]', '1.5 hours');
    I.click('//input[@value="Submit"]');
    I.waitForElement('//*[@id="results_objectname1"]/a', 10);
    const linkText = await I.grabTextFrom('//*[@id="results_objectname1"]/a');
    I.say(`Link displayed: ${linkText}`);
});