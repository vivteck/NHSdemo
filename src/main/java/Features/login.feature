Feature: Login to PubAudit application
  In order to login
  As a valid user
  I have to provide valid user name and password

  Scenario Outline: Verify login functionality
    Given I navigate to url "https://d3iwznaj5nmwfk.cloudfront.net/#/audit/last"
    When  I click on login link
    Then  I should be navigate to login page
    When  I enter username "<email>"
    And   I enter password "<password>"
    And   I click on login button
    Then  I should be logged in successfully

    Examples:
      | email   | password |
      | stephen | stephen  |