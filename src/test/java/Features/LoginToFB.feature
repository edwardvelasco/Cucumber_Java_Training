Feature: Login to FaceBook - Story Card
  Description user input
  Scenario Outline: Login to FB and Validate Welcome message - Scenario Outline
    Given user is on Facebook login page
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


