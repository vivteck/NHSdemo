Feature: Forgot Password
  In order to gain access to  a system
  As any user
  I would like to be able to get a new password if I forget my password

  Scenario Outline: Verify Forgot Password functionality
    Given I navigate to url "https://d3iwznaj5nmwfk.cloudfront.net/#/audit/last"
    When  I click on login link
    Then  I should be navigate to login page
    And I Click on ForgotPassword link
    Then I should be navigate to ForgotPassword page
    And I enter username or email "<userNameOrEmail>"
    When I Click on Submit button

    Examples:
      |userNameOrEmail|
      |swapna.padigala@gmail.com|