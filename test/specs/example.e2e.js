describe("My Login application", () => {
  it("should open baseURL", async () => {
    //homepage
    await browser.url("https://demo.trace.gael-systems.com/");
    await browser.pause(3000);
  });

  it("should login", async () => {
    //login
    const clickMenuButton = $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]");
    await clickMenuButton.click();
    await browser.pause(2000);

    //login button
    const clickLoginButton = $("/html[1]/body[1]/div[1]/div[2]/span[5]");
    await clickLoginButton.click();
    await browser.pause(2000);

    //SIGN-UP
    const newUserButton = $(
      "/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/a[1]"
    );
    newUserButton.click();

    //firstname
    const newUserFirstname = $("#firstName");
    await newUserFirstname.clearValue();
    await newUserFirstname.addValue("element");
    await browser.pause(2000);

    //lastname
    const newUserLastname = $("#lastName");
    await newUserLastname.clearValue();
    await newUserLastname.addValue("tester");
    await browser.pause(2000);

    //email
    const newUserEmail = $("#email");
    await newUserEmail.clearValue();
    await newUserEmail.addValue("itsmefreak@tuta.io");
    await browser.pause(2000);

    //username
    const newUserUsername = $("#username");
    await newUserUsername.clearValue();
    await newUserUsername.addValue("element.tester1");
    await browser.pause(2000);

    //password
    const newUserPassword = $("#password");
    await newUserPassword.clearValue();
    await newUserPassword.addValue("Nothing");
    await browser.pause(2000);

    //confirm password
    const newUserConfirmPassword = $("#password");
    await newUserConfirmPassword.clearValue();
    await newUserConfirmPassword.addValue("Nothing");
    await browser.pause(2000);

    //submit
    const newUserSubmit = $(
      "/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[7]/div[2]/input[1]"
    );
    // await newUserSubmit.click();

    //LOGIN
    //username
    // const usernameInputField = $("#username");
    // await usernameInputField.clearValue();
    // await usernameInputField.addValue("mansoor.ahmadi1");
    // await browser.pause(1000);

    //password - LOGIN
    // const passwordInputField = $("#password");
    // await passwordInputField.clearValue();
    // await passwordInputField.addValue("Nothing");
    // await browser.pause(2000);

    //KEY MANAGEMENT
    //button
    const keyRequestMenu = $(
      "/html[1]/body[1]/div[1]/div[1]/nav[1]/div[2]/div[2]/a[1]"
    );
    keyRequestMenu.click();

    //keyname
    const keyRequestKeyNameLable = $(
      "div.mleft-container div.key-requests-manager div.wrapper:nth-child(2) div.rows:nth-child(2) form:nth-child(2) > input.name.field-error"
    );
    await keyRequestKeyNameLable.clearValue();
    await keyRequestKeyNameLable.addValue("element-test_demo");
    await browser.pause(2000);

    //email
    const keyRequestEmailLable = $(
      "div.mleft-container div.key-requests-manager div.wrapper:nth-child(2) div.rows:nth-child(2) form:nth-child(2) > input.name.field-error"
    );
    await keyRequestEmailLable.clearValue();
    await keyRequestEmailLable.addValue("itsmefreak@tuta.io");
    await browser.pause(2000);

    //company
    const keyRequestCompany = $(
      "div.mleft-container div.key-requests-manager div.wrapper:nth-child(2) div.rows:nth-child(2) form:nth-child(2) > input.company"
    );
    keyRequestCompany.clearValue();
    keyRequestCompany.addValue("gael-systems");
    await browser.pause(2000);

    //service
    const keyRequestService = $(
      "div.mleft-container div.key-requests-manager div.wrapper:nth-child(2) div.rows:nth-child(2) form:nth-child(2) > input.service.field-error"
    );
    keyRequestService.clearValue();
    keyRequestService.addValue("dtQ0dW");
    await browser.pause(2000);

    //expires on
    const keyRequestExpiresOn = $(
      "div.mleft-container div.key-requests-manager div.wrapper:nth-child(2) div.rows:nth-child(2) form:nth-child(2) div.date-picker div.react-datepicker-wrapper div.react-datepicker__input-container > input:nth-child(1)"
    );
    keyRequestExpiresOn.clearValue();
    keyRequestExpiresOn.addValue("07/03/2024");
    await browser.pause(2000);

    //request button
  }); //end of Homepage and Login

  it("should request a key - Key Management", async () => {});
  //end of Key Request - Key Management
  //   it("should logout", async () => {});
});
