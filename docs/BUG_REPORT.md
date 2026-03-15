# Bug Report

## Bug 1:User registration returns a 500 error.

Description:
When submitting valid registration data, the system throws a server error instead of displaying success messages.

Steps to reproduce:
1. Open register page
2. Submit form with valid data
3. Press Submit button

Expected
Success messages should be displayed.

Observed
500 Internal Server Error, but the account is created, the data is displayed in the database.

Severity:
Hight 

---

## Bug 2: Below the password field contains a spelling error

Description:
The message displayed below the password field contains a spelling error. The word "atlaest" should be corrected to "at least".

Steps to reproduce:
1. Open register page

Expected
Should be displayed “Password must be at least 6 characters”

Observed
The word "atlaest" is displayed instead of "at least".

Severity:
Low 

## Bug 3: Admin user can create a book with invalid data (no character limit, blank spaces allowed, and invalid price values).

Description:
When logged in as an Admin user and creating a new book, several fields do not have proper validation.
The Book Title and Book Description fields do not enforce a maximum character limit and allow saving values that contain only blank spaces.
Additionally, the Book Price field does not have a character limit and allows negative numbers and a price of 0.

Steps to reproduce:
1. Log in as an Admin user.
2. Press the Add a New Book button.
3. Enter only blank spaces in Book Title.
4. Enter only blank spaces in Book Description.
5. Enter 0 or a negative number in Book Price.
6. Click Create button.

Expected
- Book Title and Book Description should:
    Enforce a maximum character limit.
    Not allow blank spaces as valid input.
- Book Price should:
    Only accept positive numeric values greater than 0.
    Have a character limit.

Observed
In the shopping catalog view, the book card with a long description appears excessively stretched.
In the Book Details view and the Admin Panel (Dashboard view), the UI layout breaks completely.

Severity:
Hight  

## Bug 4: Book cards display incorrect layout when a book has a very long description

Description:
When a book is created with a very long description, the UI expands the description column to match the full length of that text.
As a result, when other books are displayed with shorter descriptions, their cards inherit the same expanded size as the longest description. This causes the cards to appear stretched and visually inconsistent.

Steps to reproduce:
1. Log in as an Admin user.
2. Press the Add a New Book button.
3. Create a new book with a very long description.
4. Save the book.
5. Create another book with a short description.
6. Navigate to the page where the book cards are displayed.


Expected
Book cards should maintain a consistent layout and size. Long descriptions should be truncated, wrapped, or limited so they do not affect the layout of other cards.

Severity:
Low 

## Bug 5: Users cannot exit the comment creation view without submitting a comment, and the Save button is always enabled during editing and creating.


Description: When users navigate to the comment creation view, there is no option to cancel or go back without submitting a comment. The only way to exit this view is by creating and submitting the comment.
Additionally, when creating or editing a comment, the Save button remains enabled even when no changes have been made or the form fields are empty. Ideally, the Save button should remain disabled until the user enters or modifies content.

Steps to reproduce:
- Scenario 1 – Creating a comment
1. Log in.
2. Press in any book card the Book Details button.
3. Press Add a Comment button
4. Observe the Create New Comment view.

- Scenario 2 – Editing a comment
1. Log in as an Admin user.
2. Press in any book card the Book Details button.
3. Press Edit Details button
4. Do not modify Comment Title or Comment Content.
5. Observe the state of the Save button.

Expected
The comment creation view should include a Cancel or Go Back option so users can exit without submitting a comment.
The Save button should remain disabled until a change is made or all fields are completed.

Severity:
Medium 

## Bug 6: Duplicate products can be added to the catalog

Description: The system currently allows the creation of duplicate products with the same information. There is no validation preventing adding a product that already exists in the catalog.

Steps to reproduce:
1. Log in like Admin.
2. Press Add a New Book button.
3. Create a book with a specific Title and Description.
4. Save it.
5. Attempt to create another book with the same information.
6. Save again.

Expected
The system should prevent duplicate products from being created or display a validation message indicating that the product already exists.

Severity:
Medium 

## Bug 7: Order creation fails after completing the checkout process.

Description: When a user proceeds with the checkout process and attempts to place an order, the system fails to create the order and returns an error. 

Steps to reproduce:
1. Log in with a valid user account
2. Navigate to the catalog 
3. Press Book Details button
4. Press Add to Cart button
5. Press Checkout button
6. Press Go To Checkout button
7. Press Pay with Card button
8. Fill the payment form and press Pay 

Expected
The system should successfully create the order after payment processing and redirect the user to the orders page with success message

Observed
The order request fails and returns an error. The network request to:
POST /users/order
returns a failure and the order is not created.
The console shows a payment API error:
statusCode: 401
invalid_request_error
indicating that the payment request is unauthorized.

Severity:
Hight 

---

## Improvement / Suggestion 1: Review comment permissions for Admin and Regular users

Description: Currently, both Admin users and regular users have permissions to create, edit, and delete comments.
From a role-responsibility and moderation perspective, this behavior may not be appropriate. Typically, regular users should only be able to create comments, while administrative roles are responsible for moderating content.

Recommendation
Review and adjust the current comment permissions based on user roles.
A more appropriate permission structure could be:
- Regular Users
    - Create comments
- Admin Users
    - Edit comments (for moderation purposes)
    - Delete comments (inappropriate or abusive content)