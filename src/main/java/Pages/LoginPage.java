package Pages;

import TestBase.BaseClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BaseClass {
    WebDriver driver;

    @FindBy(xpath = "//input[@id='pms_username']")
    public WebElement emailTextBox;
    @FindBy(xpath = "//input[@id='pms_inputPassword']")
    public WebElement passwordTextBox;
    @FindBy(xpath = "//a[.='Login']")
    //@FindBy(xpath = "//button[@id='btn-login']")
    public WebElement logInClick;
    @FindBy(linkText = "Forgot Password?")
    public WebElement forgotPasswordTextBox;
    @FindBy(xpath = "//input[@id='pms_email_uname']")
    public WebElement forgotUserName;
    @FindBy(id = "btn-login")
    public WebElement submit;
    @FindBy(xpath = "//input[@id='newPassword']")
    public WebElement newPassword;
    @FindBy(xpath = "//input[@id='confirmPassword']")
    public WebElement confirmPassword;
    @FindBy(xpath = "//button[@id='btn-login']")
    public WebElement changePassword;
    @FindBy(xpath = "//a[.='Logout']")
    public WebElement logout;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void emailTextBox(String email) {
        emailTextBox.sendKeys(email);
    }

    public void PasswordTextBox(String password) {
        passwordTextBox.sendKeys(password);
    }

    public void logInClick() {
        logInClick.click();
    }

    public void forgotPassword() {
        forgotPasswordTextBox.click();
    }

    public void forgotUserName(String forgotUname) {
        forgotUserName.sendKeys(forgotUname);
    }

    public void submitButton() {
        submit.click();
    }

    public void navigateToUrl(String url) {
        driver.navigate().to(url);
    }

    public void verifyLogin() { logout.isDisplayed();  }

    public void newPassword(String nP) {
        newPassword.sendKeys(nP);
    }

    public void confirmPassword(String cP){
        confirmPassword.sendKeys(cP);
    }

    public void changePasswordButton(){
        changePassword.click();
    }
}


