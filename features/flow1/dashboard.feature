Feature: View Dashboard after Login

  Scenario: User logs in using fingerprint/Face ID and navigates through external webview
    Given the app is launched
    When I see the splash screen
    Then I should be prompted to authorize the app using fingerprint or face id
    When I authenticate myself using fingerprint or face id
    Then I should see the login screen
    When I click on the login button
    Then I should be navigated to the external webview for login
    When I login with my email and password
    Then I should be navigated back to the application
    And I should be redirected to the dashboard

  Scenario: Successful login as a user
    Given I am on the dashboard
    Then I should see the Halspan Logo
    And I should see my name prominently displayed
    And I should see options to "Scan an asset", "My Jobs", "Report a fault", "Site / Buildings", "Assign / edit smart tag", "Technical documents"
    And the displayed options should be based on my role and permissions