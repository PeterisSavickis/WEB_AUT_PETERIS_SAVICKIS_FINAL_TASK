import BasePage from "../pages/BasePage"
import FormPage from "../pages/FormPage";

describe('template spec', () => {
  it('passes', () => {
    const basePage = new BasePage();
    const formPage = new FormPage();

    //Open URL
    basePage.visit();

    //Fill the form
    formPage.enterFirstName();
    formPage.enterLastName();
    formPage.enterEmail();
    formPage.enterGender();
    formPage.enterPhoneNumber();
    formPage.enterDateOfBirth();
    formPage.enterSubject();
    formPage.enterHobby();
    formPage.uploadFile();
    formPage.selectState();
    formPage.selectCity();

    //Click Submit
    formPage.clickSubmit();

    //Validate entered information
    formPage.validateEnteredInfo();
  })
})