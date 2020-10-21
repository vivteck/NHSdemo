package StepDefinitions;

import TestBase.BaseClass;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ForgotPasswordTest extends BaseClass {
    @And("^I Click on ForgotPassword link$")
    public void iClickOnForgotPasswordLink() {

        LoginPage.forgotPassword();
    }

    @Then("^I should be navigate to ForgotPassword page$")
    public void iShouldBeNavigateToForgotPasswordPage() {
        String title = getPageTitle();
        System.out.println(title);
    }

    @And("^I enter username or email \"([^\"]*)\"$")
    public void iEnterUsernameOrEmail(String forgotUname) throws InterruptedException {
        // pageWait();
        LoginPage.forgotUserName(forgotUname);
    }

    @When("^I Click on Submit button$")
    public void iClickOnSubmitButton() throws InterruptedException {
        // pageWait();
        LoginPage.submitButton();
    }

    // @Then("^I should get a message \"([^\"]*)\"$")
    // public void iShouldGetAMessage(String msg)  {


}

