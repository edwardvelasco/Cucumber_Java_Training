$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Cucumber_Java_Training/src/test/java/Features/LoginToFB.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Face Book - Story Card",
  "description": "Description user input",
  "id": "login-to-face-book---story-card",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login to FB and Validate Welcome message - Scenario Outline",
  "description": "",
  "id": "login-to-face-book---story-card;login-to-fb-and-validate-welcome-message---scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@All"
    },
    {
      "line": 6,
      "name": "@Prod"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "* "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-to-face-book---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "login-to-face-book---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;1"
    },
    {
      "cells": [
        "edward.velasco.ph+Matt1@gmail.com",
        "TestingTeam1234"
      ],
      "line": 16,
      "id": "login-to-face-book---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;2"
    },
    {
      "cells": [
        "edward.velasco.ph+Matt2@gmail.com",
        "TestingTeam1234"
      ],
      "line": 17,
      "id": "login-to-face-book---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;3"
    },
    {
      "cells": [
        "edward.velasco.ph+Matt3@gmail.com",
        "TestingTeam1234"
      ],
      "line": 18,
      "id": "login-to-face-book---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;4"
    },
    {
      "cells": [
        "edward.velasco.ph+Matt4@gmail.com",
        "TestingTeam1234"
      ],
      "line": 19,
      "id": "login-to-face-book---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "this will be used for all repeated steps",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_is_on_Facebook_login_page()"
});
formatter.result({
  "duration": 3273016897,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: exited normally.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027EC2AMAZ-HQ04LKU\u0027, ip: \u0027172.30.10.101\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00A6E7D3+124883]\n\tOrdinal0 [0x00A6E7B1+124849]\n\tGetHandleVerifier [0x00CB8688+193832]\n\tGetHandleVerifier [0x00CD07AC+292428]\n\tGetHandleVerifier [0x00CCE0AC+282444]\n\tGetHandleVerifier [0x00CF4A90+440624]\n\tGetHandleVerifier [0x00CF47FC+439964]\n\tGetHandleVerifier [0x00CF154B+426987]\n\tGetHandleVerifier [0x00CD4FFD+310941]\n\tGetHandleVerifier [0x00CD5D8E+314414]\n\tGetHandleVerifier [0x00CD5D19+314297]\n\tGetHandleVerifier [0x00D931EC+1089676]\n\tGetHandleVerifier [0x00D917C9+1082985]\n\tGetHandleVerifier [0x00D913A3+1081923]\n\tGetHandleVerifier [0x00E8D9FD+2115741]\n\tOrdinal0 [0x00BBB82E+1488942]\n\tOrdinal0 [0x00B55A7D+1071741]\n\tOrdinal0 [0x00B5559B+1070491]\n\tOrdinal0 [0x00B554B1+1070257]\n\tOrdinal0 [0x00B8FF53+1310547]\n\tBaseThreadInitThunk [0x74A762C4+36]\n\tRtlSubscribeWnfStateChangeNotification [0x77C61B69+1081]\n\tRtlSubscribeWnfStateChangeNotification [0x77C61B34+1028]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat StepDefinitions.LoginToFBSteps_POM.user_is_on_Facebook_login_page(LoginToFBSteps_POM.java:29)\r\n\tat ✽.Given user is on Facebook login page(D:/Cucumber_Java_Training/src/test/java/Features/LoginToFB.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Login to FB and Validate Welcome message - Scenario Outline",
  "description": "",
  "id": "login-to-face-book---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Prod"
    },
    {
      "line": 6,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"edward.velasco.ph+Matt1@gmail.com\" and \"TestingTeam1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "* "
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
  "location": "LoginToFBSteps_POM.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_clicks_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_validate_welcome_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_logout_to_FB()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginToFBSteps_POM.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "this will be used for all repeated steps",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_is_on_Facebook_login_page()"
});
formatter.result({
  "duration": 4714163888,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login to FB and Validate Welcome message - Scenario Outline",
  "description": "",
  "id": "login-to-face-book---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Prod"
    },
    {
      "line": 6,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"edward.velasco.ph+Matt2@gmail.com\" and \"TestingTeam1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "* "
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
  "location": "LoginToFBSteps_POM.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 10892861634,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_clicks_login_button()"
});
formatter.result({
  "duration": 5475126904,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1556673124,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_logout_to_FB()"
});
formatter.result({
  "duration": 51073565185,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"i.hu5pjgll.lzf7d6o1.sp_ynHRILwKcJ5.sx_aba290\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027EC2AMAZ-HQ04LKU\u0027, ip: \u0027172.30.10.101\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: D:\\Users\\evelasco\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:64179}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5e0471d3d0301721c390cb674ae6d326\n*** Element info: {Using\u003dxpath, value\u003di.hu5pjgll.lzf7d6o1.sp_ynHRILwKcJ5.sx_aba290}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat FB_Screens.LoginPage.clickLogoutButton(LoginPage.java:34)\r\n\tat StepDefinitions.LoginToFBSteps_POM.user_logout_to_FB(LoginToFBSteps_POM.java:105)\r\n\tat ✽.* user logout to FB(D:/Cucumber_Java_Training/src/test/java/Features/LoginToFB.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "this will be used for all repeated steps",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_is_on_Facebook_login_page()"
});
formatter.result({
  "duration": 3080790919,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login to FB and Validate Welcome message - Scenario Outline",
  "description": "",
  "id": "login-to-face-book---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Prod"
    },
    {
      "line": 6,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"edward.velasco.ph+Matt3@gmail.com\" and \"TestingTeam1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "* "
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
  "location": "LoginToFBSteps_POM.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 10468370571,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_clicks_login_button()"
});
formatter.result({
  "duration": 5288998625,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1302422818,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_logout_to_FB()"
});
formatter.result({
  "duration": 51028673150,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"i.hu5pjgll.lzf7d6o1.sp_ynHRILwKcJ5.sx_aba290\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027EC2AMAZ-HQ04LKU\u0027, ip: \u0027172.30.10.101\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: D:\\Users\\evelasco\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:64245}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1bdbe1e6deb5b0971e3d566f46d3dcb7\n*** Element info: {Using\u003dxpath, value\u003di.hu5pjgll.lzf7d6o1.sp_ynHRILwKcJ5.sx_aba290}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat FB_Screens.LoginPage.clickLogoutButton(LoginPage.java:34)\r\n\tat StepDefinitions.LoginToFBSteps_POM.user_logout_to_FB(LoginToFBSteps_POM.java:105)\r\n\tat ✽.* user logout to FB(D:/Cucumber_Java_Training/src/test/java/Features/LoginToFB.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "this will be used for all repeated steps",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_is_on_Facebook_login_page()"
});
formatter.result({
  "duration": 2767555101,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login to FB and Validate Welcome message - Scenario Outline",
  "description": "",
  "id": "login-to-face-book---story-card;login-to-fb-and-validate-welcome-message---scenario-outline;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Prod"
    },
    {
      "line": 6,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"edward.velasco.ph+Matt4@gmail.com\" and \"TestingTeam1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "* "
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
  "location": "LoginToFBSteps_POM.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 10494990811,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_clicks_login_button()"
});
formatter.result({
  "duration": 5219702279,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1299178386,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_logout_to_FB()"
});
formatter.result({
  "duration": 51010863382,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"i.hu5pjgll.lzf7d6o1.sp_ynHRILwKcJ5.sx_aba290\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027EC2AMAZ-HQ04LKU\u0027, ip: \u0027172.30.10.101\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: D:\\Users\\evelasco\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:64285}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c64e0aa8cc0d35b136cb14e22ff25acd\n*** Element info: {Using\u003dxpath, value\u003di.hu5pjgll.lzf7d6o1.sp_ynHRILwKcJ5.sx_aba290}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat FB_Screens.LoginPage.clickLogoutButton(LoginPage.java:34)\r\n\tat StepDefinitions.LoginToFBSteps_POM.user_logout_to_FB(LoginToFBSteps_POM.java:105)\r\n\tat ✽.* user logout to FB(D:/Cucumber_Java_Training/src/test/java/Features/LoginToFB.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "this will be used for all repeated steps",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_is_on_Facebook_login_page()"
});
formatter.result({
  "duration": 3021814826,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login to FB and Validate Welcome message - Data Table",
  "description": "",
  "id": "login-to-face-book---story-card;login-to-fb-and-validate-welcome-message---data-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@All"
    },
    {
      "line": 20,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user enters userName and passWord",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23
    },
    {
      "cells": [
        "edward.velasco.ph+Matt1@gmail.com",
        "TestingTeam1234"
      ],
      "line": 24
    },
    {
      "cells": [
        "edward.velasco.ph+Matt2@gmail.com",
        "TestingTeam1234"
      ],
      "line": 25
    },
    {
      "cells": [
        "edward.velasco.ph+Matt3@gmail.com",
        "TestingTeam1234"
      ],
      "line": 26
    },
    {
      "cells": [
        "edward.velasco.ph+Matt4@gmail.com",
        "TestingTeam1234"
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 31,
  "name": "close browser",
  "keyword": "* "
});
formatter.match({
  "location": "LoginToFBSteps_POM.userEntersUserNameAndPassWord(DataTable)"
});
formatter.result({
  "duration": 1843195,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.LoginToFBSteps_POM.userEntersUserNameAndPassWord(LoginToFBSteps_POM.java:140)\r\n\tat ✽.When user enters userName and passWord(D:/Cucumber_Java_Training/src/test/java/Features/LoginToFB.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_clicks_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_validate_welcome_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_logout_to_FB()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginToFBSteps_POM.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "this will be used for all repeated steps",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_is_on_Facebook_login_page()"
});
formatter.result({
  "duration": 3632929373,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Login to FB and Validate Welcome message - String Parameter",
  "description": "",
  "id": "login-to-face-book---story-card;login-to-fb-and-validate-welcome-message---string-parameter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@All"
    },
    {
      "line": 33,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user enters \"edward.velasco.ph+Matt1@gmail.com\" and \"TestingTeam1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user validate welcome message",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user logout to FB",
  "keyword": "* "
});
formatter.step({
  "line": 39,
  "name": "close browser",
  "keyword": "* "
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
  "location": "LoginToFBSteps_POM.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 10487749103,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_clicks_login_button()"
});
formatter.result({
  "duration": 5222320435,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_validate_welcome_message()"
});
formatter.result({
  "duration": 1301012979,
  "status": "passed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.user_logout_to_FB()"
});
formatter.result({
  "duration": 51049259179,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"i.hu5pjgll.lzf7d6o1.sp_ynHRILwKcJ5.sx_aba290\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027EC2AMAZ-HQ04LKU\u0027, ip: \u0027172.30.10.101\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: D:\\Users\\evelasco\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:64341}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c4684c200a8837756521f4292f7858d8\n*** Element info: {Using\u003dxpath, value\u003di.hu5pjgll.lzf7d6o1.sp_ynHRILwKcJ5.sx_aba290}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat FB_Screens.LoginPage.clickLogoutButton(LoginPage.java:34)\r\n\tat StepDefinitions.LoginToFBSteps_POM.user_logout_to_FB(LoginToFBSteps_POM.java:105)\r\n\tat ✽.* user logout to FB(D:/Cucumber_Java_Training/src/test/java/Features/LoginToFB.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginToFBSteps_POM.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
});