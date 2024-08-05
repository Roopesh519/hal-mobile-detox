Feature: Halspan- Customer/Installer/Inspector- Hambergur Menu
  As a customer/Inspector/Installer, I want an option to view the options available in the Burger Menu
  Condition of satisfaction
  There must be an option to view all the options available in the Burger Menu

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

  Scenario: Viewing the options in the Burger Menu
    Given I am on the dashboard screen
    When I click on the hamburger icon
    Then I should see the following options:
      | Dashboard               |
      | Scan an Asset(TAG)      |
      | My Jobs                 |
      | Assign / Edit a Tag     |
      | Technical Documentation |
      | Report fault            |
      | Sites / Buildings       |
      | Find products           |
      | Recall a submission     |
      | Go online (x)           |
      | Recall draft answers    |
      | My profile              |
      | Support                 |
      | Logout                  |
