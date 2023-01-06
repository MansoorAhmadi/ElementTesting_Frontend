const baseURL = async () => {
  //homepage
  await browser.url("https://demo.trace.gael-systems.com/");
  await browser.pause(3000);
};

module.exports = { baseURL };
