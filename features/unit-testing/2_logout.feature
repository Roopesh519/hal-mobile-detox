Feature: Halspan- Customer/Installer/Inspector - Logout
    As a customer/Inspector/Installer I want an option to log out from the Application
    Condition of Satisfaction
    I must be able to see the log in screen when i clicked on Log out screen

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

    Scenario: Cancel logout from the application
        Given I am on the dashboard screen
        When I click on the hamburger icon
        Then I should see the options
        When I click the logout button
        Then I should see a confirmation prompt
        And I click the cancel button
        Then I should see the options
        When I click the logout button
        Then I should see a confirmation prompt
        And I click the close button
        Then I should see the options
        When I click the logout button
        Then I should see a confirmation prompt
        And I click outside the confirmation prompt
        Then I should see the options

    Scenario: Successful logout from the application
        Given I am on the dashboard screen
        When I click on the hamburger icon
        Then I should see the options
        When I click the logout button
        Then I should see a confirmation prompt
        And I confirm the logout action
        Then I should be logged out successfully
        And I should be redirected to the login screen
        And I should see the login form