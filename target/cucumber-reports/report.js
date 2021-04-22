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
  "duration": 5671513997,
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
  "duration": 10571202415,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5459773909,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1574031513,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3311458160,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 752540025,
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
  "duration": 3111403109,
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
  "duration": 10518269134,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5419976874,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1522542479,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3372016533,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 675011971,
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
  "duration": 2970766929,
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
  "duration": 10501996180,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5856952101,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1693347663,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3582977972,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 795367273,
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
  "duration": 4828541094,
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
  "duration": 10519793251,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5234597752,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1547507529,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3190672369,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 724493971,
  "status": "passed"
});
});