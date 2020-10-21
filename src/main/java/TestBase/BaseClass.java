package TestBase;

import Util.testUtil;
import Pages.LoginPage;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class BaseClass {

    public static WebDriver driver;
    //public static Properties prop;
    public static EventFiringWebDriver e_driver;
    public static LoginPage LoginPage;

    public static void initialization() {

        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("https://d3iwznaj5nmwfk.cloudfront.net/");
        e_driver = new EventFiringWebDriver(driver);
        // Now create object of EventListerHandler to register it with EventFiringWebDriver

        driver = e_driver;
        driver.manage().window().maximize();
        LoginPage = new LoginPage(driver);
        //SubmitPage = new SubmitPage(driver);
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(testUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(testUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
    }

    public String getPageTitle() {
        return driver.getTitle();
    }

    public static void tearDown() {
        driver.quit();
    }


}

