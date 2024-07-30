Feature: Halspan- Customer/Installer/Inspector - Logout
    As a customer/Inspector/Installer I want an option to log out from the Application
    Condition of Satisfaction
    I must be able to see the log in screen when i clicked on Log out screen

    Scenario: Cancel logout from the application
        Given I am on dahboard screen
        When I click on hamburger icon
        Then I should see the options
        When I click the "Logout" button
        Then I should see a confirmation prompt
        And I click on the cancel button
        Then I should see the options
        When I click the "Logout" button
        Then I should see a confirmation prompt
        And I click on the close button
        Then I should see the options
        When I click the "Logout" button
        Then I should see a confirmation prompt
        And I click outside the confirmation prompt
        Then I should see the options

    Scenario: Successful logout from the application
        Given I am logged into the application
        When I click the "Logout" button
        Then I should see a confirmation prompt
        And I confirm the logout action
        Then I should be logged out successfully
        And I should be redirected to the login screen
        And I should see the login form
        And I should not be able to access any authenticated pages without logging back in