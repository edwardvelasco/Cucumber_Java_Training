Feature: Login to Face Book - Story Card
  Description user input
  Background: this will be used for all repeated steps
    Given user is on Facebook login page

  @All @Prod
  Scenario Outline: Login to FB and Validate Welcome message - Scenario Outline
    When user enters "<username>" and "<password>"
    And user clicks login button
    Then user validate welcome message
    * user logout to FB
    * close browser

    Examples:
      | username                          | password        |
      | edward.velasco.ph+Matt1@gmail.com | TestingTeam1234 |
      | edward.velasco.ph+Matt2@gmail.com | TestingTeam1234 |
      | edward.velasco.ph+Matt3@gmail.com | TestingTeam1234 |
      | edward.velasco.ph+Matt4@gmail.com | TestingTeam1234 |
  @All @Regression
  Scenario: Login to FB and Validate Welcome message - Data Table
    When user enters userName and passWord
      | username                          | password        |
      | edward.velasco.ph+Matt1@gmail.com | TestingTeam1234 |
      | edward.velasco.ph+Matt2@gmail.com | TestingTeam1234 |
      | edward.velasco.ph+Matt3@gmail.com | TestingTeam1234 |
      | edward.velasco.ph+Matt4@gmail.com | TestingTeam1234 |
    And user clicks login button
    Then user validate welcome message
    * user logout to FB
    * close browser

  @All @Smoke
  Scenario: Login to FB and Validate Welcome message - String Parameter
    When user enters "edward.velasco.ph+Matt1@gmail.com" and "TestingTeam1234"
    And user clicks login button
    Then user validate welcome message
    * user logout to FB
    * close browser
