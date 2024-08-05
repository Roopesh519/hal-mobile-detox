Feature: Halspan- Customer/Installer/Inspector - Logout
    As a customer/Inspector/Installer I want an option to log out from the Application
    Condition of Satisfaction
    I must be able to see the log in screen when i clicked on Log out screen

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