require("dotenv").config();
const { baseURL, signUP } = require("../services");

describe("My Login application", () => {
  it("should open baseURL", async () => {
    //homepage
    await baseURL();
  });

  it("should sign-up", async () => {
    //sign-up
    await signUP();
  });

  it("should request a key - Key Management", async () => {});
  //end of Key Request - Key Management
  //   it("should logout", async () => {});
});
