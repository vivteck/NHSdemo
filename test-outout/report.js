$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("forgot.feature");
formatter.feature({
  "line": 1,
  "name": "Forgot Password",
  "description": "In order to gain access to  a system\r\nAs any user\r\nI would like to be able to get a new password if I forget my password",
  "id": "forgot-password",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify Forgot Password functionality",
  "description": "",
  "id": "forgot-password;verify-forgot-password-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I navigate to url \"https://d3iwznaj5nmwfk.cloudfront.net/#/audit/last\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be navigate to login page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I Click on ForgotPassword link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be navigate to ForgotPassword page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter username or email \"\u003cuserNameOrEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click on Submit button",
  "keyword": "When "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "forgot-password;verify-forgot-password-functionality;",
  "rows": [
    {
      "cells": [
        "userNameOrEmail"
      ],
      "line": 16,
      "id": "forgot-password;verify-forgot-password-functionality;;1"
    },
    {
      "cells": [
        "swapna.padigala@gmail.com"
      ],
      "line": 17,
      "id": "forgot-password;verify-forgot-password-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Forgot Password functionality",
  "description": "",
  "id": "forgot-password;verify-forgot-password-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I navigate to url \"https://d3iwznaj5nmwfk.cloudfront.net/#/audit/last\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be navigate to login page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I Click on ForgotPassword link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be navigate to ForgotPassword page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter username or email \"swapna.padigala@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Click on Submit button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "https://d3iwznaj5nmwfk.cloudfront.net/#/audit/last",
      "offset": 19
    }
  ],
  "location": "LoginPageTest.i_navigate_to_url(String)"
});
formatter.result({
  "duration": 9645207600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.i_click_on_login_link()"
});
formatter.result({
  "duration": 100552800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.i_should_be_navigate_to_login_page()"
});
formatter.result({
  "duration": 32511900,
  "status": "passed"
});
formatter.match({
  "location": "ForgotPasswordTest.iClickOnForgotPasswordLink()"
});
formatter.result({
  "duration": 136556500,
  "status": "passed"
});
formatter.match({
  "location": "ForgotPasswordTest.iShouldBeNavigateToForgotPasswordPage()"
});
formatter.result({
  "duration": 24354400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swapna.padigala@gmail.com",
      "offset": 27
    }
  ],
  "location": "ForgotPasswordTest.iEnterUsernameOrEmail(String)"
});
formatter.result({
  "duration": 184795300,
  "status": "passed"
});
formatter.match({
  "location": "ForgotPasswordTest.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 127534600,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to PubAudit application",
  "description": "In order to login\r\nAs a valid user\r\nI have to provide valid user name and password",
  "id": "login-to-pubaudit-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify login functionality",
  "description": "",
  "id": "login-to-pubaudit-application;verify-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I navigate to url \"https://d3iwznaj5nmwfk.cloudfront.net/#/audit/last\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be navigate to login page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter username \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-to-pubaudit-application;verify-login-functionality;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 16,
      "id": "login-to-pubaudit-application;verify-login-functionality;;1"
    },
    {
      "cells": [
        "stephen",
        "stephen"
      ],
      "line": 17,
      "id": "login-to-pubaudit-application;verify-login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Verify login functionality",
  "description": "",
  "id": "login-to-pubaudit-application;verify-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I navigate to url \"https://d3iwznaj5nmwfk.cloudfront.net/#/audit/last\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be navigate to login page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter username \"stephen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"stephen\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://d3iwznaj5nmwfk.cloudfront.net/#/audit/last",
      "offset": 19
    }
  ],
  "location": "LoginPageTest.i_navigate_to_url(String)"
});
formatter.result({
  "duration": 8104444600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.i_click_on_login_link()"
});
formatter.result({
  "duration": 80780700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.i_should_be_navigate_to_login_page()"
});
formatter.result({
  "duration": 23514000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stephen",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.i_enter_username(String)"
});
formatter.result({
  "duration": 175992100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stephen",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.i_enter_password(String)"
});
formatter.result({
  "duration": 169125800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.i_click_on_login_button()"
});
formatter.result({
  "duration": 80070500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.i_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 95776200,
  "status": "passed"
});
});