webdriver 在headless默认是没有滚动条的，忽略默认配置可以展示滚动条

With a bit of Googling I found out you can override the default behaviour so you do see scrollbars in headless mode. Just add to your puppeteer configuration:ignoreDefaultArgs: ["--hide-scrollbars"]

this.browser = await puppeteer.launch({
  // Existing config goes here...
  ignoreDefaultArgs: ["--hide-scrollbars"]
});
Code copied from here: #2999 (comment)

Jeehunter reacted with thumbs up emoji
