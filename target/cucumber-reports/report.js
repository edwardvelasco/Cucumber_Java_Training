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
  "duration": 4649586530,
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
  "duration": 10588515749,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5591835957,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1658509232,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3167487435,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 697448978,
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
  "duration": 3051283417,
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
  "duration": 10547753289,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5552413705,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1654284629,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3510173412,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 709019326,
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
  "duration": 4931608458,
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
  "duration": 10495204621,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5269296919,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1660100524,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3293167112,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 715968171,
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
  "duration": 4753707791,
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
  "duration": 10523343244,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5261212257,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1638319285,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3211272734,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 658942178,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login to FB and Validate Welcome message - Data Table",
  "description": "",
  "id": "login-to-facebook---story-card;login-to-fb-and-validate-welcome-message---data-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user is on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user enters userName and passWord",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21
    },
    {
      "cells": [
        "edward.velasco.ph+Matt1@gmail.com",
        "TestingTeam1234"
      ],
      "line": 22
    },
    {
      "cells": [
        "edward.velasco.ph+Matt2@gmail.com",
        "TestingTeam1234"
      ],
      "line": 23
    },
    {
      "cells": [
        "edward.velasco.ph+Matt3@gmail.com",
        "TestingTeam1234"
      ],
      "line": 24
    },
    {
      "cells": [
        "edward.velasco.ph+Matt4@gmail.com",
        "TestingTeam1234"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 29,
  "name": "close browser",
  "keyword": "* "
});
formatter.match({
  "location": "LoginToFBSteps.user_is_on_Facebook_login_page()"
});
formatter.result({
  "duration": 2951614496,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.userEntersUserNameAndPassWord(DataTable)"
});
formatter.result({
  "duration": 204350104,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5369067011,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1654862983,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3286429621,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 724196193,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Login to FB and Validate Welcome message - String Parameter",
  "description": "",
  "id": "login-to-facebook---story-card;login-to-fb-and-validate-welcome-message---string-parameter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "user is on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user enters \"edward.velasco.ph+Matt1@gmail.com\" and \"TestingTeam1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 37,
  "name": "close browser",
  "keyword": "* "
});
formatter.match({
  "location": "LoginToFBSteps.user_is_on_Facebook_login_page()"
});
formatter.result({
  "duration": 3009960625,
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
  "duration": 10489739343,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_clicks_login_button()"
});
formatter.result({
  "duration": 5410974710,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1628435255,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.user_logout_to_FB()"
});
formatter.result({
  "duration": 3332500073,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps.closeBrowser()"
});
formatter.result({
  "duration": 686198116,
  "status": "passed"
});
});