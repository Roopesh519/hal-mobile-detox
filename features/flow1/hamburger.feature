Feature: Viewing options in the Burger Menu

  Scenario: Viewing the options in the Burger Menu
    Given I am logged in
    When I click the "Burger Menu" button
    Then I should see the following options:
      | Dashboard              |
      | Scan an Asset(TAG)     |
      | My Jobs                |
      | Assign / Edit a Tag    |
      | Technical Documentation|
      | Report fault           |
      | Sites / Buildings      |
      | Find products          |
      | Recall a submission    |
      | Go online (x)          |
      | Recall draft answers   |
      | My profile             |
      | Support                |
      | Logout                 |
