Feature: Halspan - Customer/Installer/Inspector -Dashboard
  As a customer/Inspector/Installer I want an option to view the Dashboard once i complete the Login
  Condition of Satisfaction
  There must be an option to view the Home screen once the user has finished his Login
  The items that are displayed in the Homescreen depend upon the permissions that the user has.
  The items are controlled by the Role/Permissions set in the Portal/Admin area.

  Scenario: Admin is able to see the Dashboard
    Given I am on the dashboard screen
    Then I should see the halspan logo
    And I should see my name prominently displayed
    And I should see options to "Scan an asset", "My Jobs", "Report a fault", "Site / Buildings", "Assign / edit smart tag", "Technical documents"