$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Cucumber_Java_Training/src/test/java/Features/LoginToFB.feature");
formatter.feature({
  "line": 1,
  "name": "Login to FaceBook - Story Card",
  "description": "Description user input",
  "id": "login-to-facebook---story-card",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login to FB and Validate Welcome message - Scenario Outline",
  "description": "",
  "id": "login-to-facebook---story-card;login-to-fb-and-validate-welcome-message---scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "* "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-to-facebook---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "login-to-facebook---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;1"
    },
    {
      "cells": [
        "edward.velasco.ph+Matt1@gmail.com",
        "TestingTeam1234"
      ],
      "line": 13,
      "id": "login-to-facebook---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;2"
    },
    {
      "cells": [
        "edward.velasco.ph+Matt2@gmail.com",
        "TestingTeam1234"
      ],
      "line": 14,
      "id": "login-to-facebook---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;3"
    },
    {
      "cells": [
        "edward.velasco.ph+Matt3@gmail.com",
        "TestingTeam1234"
      ],
      "line": 15,
      "id": "login-to-facebook---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;4"
    },
    {
      "cells": [
        "edward.velasco.ph+Matt4@gmail.com",
        "TestingTeam1234"
      ],
      "line": 16,
      "id": "login-to-facebook---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login to FB and Validate Welcome message - Scenario Outline",
  "description": "",
  "id": "login-to-facebook---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"edward.velasco.ph+Matt1@gmail.com\" and \"TestingTeam1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "* "
});
formatter.match({
  "location": "LoginToFBSteps.user_is_on_Facebook_login_page()"
});
formatter.result({
  "duration": 5981108891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edward.velasco.ph+Matt1@gmail.com",
      "offset": 13
    },
    {
      "val": "TestingTeam1234",
      "offset": 53
    }
  ],
  "location": "LoginToFBSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 10597429439,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5469458875,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1571397384,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3281799515,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 698421365,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to FB and Validate Welcome message - Scenario Outline",
  "description": "",
  "id": "login-to-facebook---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"edward.velasco.ph+Matt2@gmail.com\" and \"TestingTeam1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "* "
});
formatter.match({
  "location": "LoginToFBSteps.user_is_on_Facebook_login_page()"
});
formatter.result({
  "duration": 4826763845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edward.velasco.ph+Matt2@gmail.com",
      "offset": 13
    },
    {
      "val": "TestingTeam1234",
      "offset": 53
    }
  ],
  "location": "LoginToFBSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 10665567440,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5265982036,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1561340093,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3314254081,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 716653021,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login to FB and Validate Welcome message - Scenario Outline",
  "description": "",
  "id": "login-to-facebook---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"edward.velasco.ph+Matt3@gmail.com\" and \"TestingTeam1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "* "
});
formatter.match({
  "location": "LoginToFBSteps.user_is_on_Facebook_login_page()"
});
formatter.result({
  "duration": 3026773840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edward.velasco.ph+Matt3@gmail.com",
      "offset": 13
    },
    {
      "val": "TestingTeam1234",
      "offset": 53
    }
  ],
  "location": "LoginToFBSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 10538879329,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5303225632,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1570874326,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3322503403,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 679961563,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login to FB and Validate Welcome message - Scenario Outline",
  "description": "",
  "id": "login-to-facebook---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"edward.velasco.ph+Matt4@gmail.com\" and \"TestingTeam1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "* "
});
formatter.match({
  "location": "LoginToFBSteps.user_is_on_Facebook_login_page()"
});
formatter.result({
  "duration": 3156033821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edward.velasco.ph+Matt4@gmail.com",
      "offset": 13
    },
    {
      "val": "TestingTeam1234",
      "offset": 53
    }
  ],
  "location": "LoginToFBSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 10548977170,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5353713198,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1564832742,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3666989158,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 762510480,
  "status": "passed"
});
});