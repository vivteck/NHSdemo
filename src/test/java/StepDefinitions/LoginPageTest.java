package StepDefinitions;

import Pages.LoginPage;
import TestBase.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

public class LoginPageTest extends BaseClass {

    @Given("^I navigate to url \"([^\"]*)\"$")
    public void i_navigate_to_url(String url)  {
        initialization();
    }

    @When("^I click on login link$")
    public void i_click_on_login_link() throws InterruptedException {
        LoginPage.logInClick();

    }

    @Then("^I should be navigate to login page$")
    public void i_should_be_navigate_to_login_page()  {
        String LoginPageTitle = getPageTitle();
        System.out.println(LoginPageTitle);

    }

    @When("^I enter username \"([^\"]*)\"$")
    public void i_enter_username(String email) throws InterruptedException {
        // pageWait();
        LoginPage.emailTextBox(email);
    }

    @When("^I enter password \"([^\"]*)\"$")
    public void i_enter_password(String password)  {
        LoginPage.PasswordTextBox(password);
    }

    @When("^I click on login button$")
    public void i_click_on_login_button()  {
        LoginPage.logInClick();
    }

    @Then("^I should be logged in successfully$")
    public void i_should_be_logged_in_successfully()  {
        LoginPage.verifyLogin();
        //tearDown();
    }


}

