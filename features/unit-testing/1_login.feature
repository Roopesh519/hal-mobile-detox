Feature: Halspan - Customer/Installer/Inspector - Log in using Face ID and Touch ID
As a customer/Inspector/Installer I want an option to login using FaceID and TouchID
Conditions of Satisfaction
There must be an option to log in using FaceID and TouchID

  Scenario: User logs in using fingerprint/Face ID and navigates through external webview
    Given I see the splash screen
    Then I should be prompted to authorize the app using fingerprint or face id
    When I authenticate myself using password
    Then I should see the login screen
    When I click on the login button
    Then I should be navigated to the external webview for login
    When I login with my email and password
    Then I should be navigated back to the application
    And I should be redirected to the dashboard