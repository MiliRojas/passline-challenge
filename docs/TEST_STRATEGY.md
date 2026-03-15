# Test Strategy

## Main Modules
- Login
- Checkout
- Payment

---

## Critical Flows
- User Login
- Browse Products
- Add to Cart
- Checkout
- Payment
- Order Confirmation
- Admin creating or editing products

---

## Key Risks
- Authentication failures preventing access to the App
- Authorization issues allowing users to perform admin actions
- Issues with the catalog not displaying the products
- Problem concurrency shopping
- Cart not adding or removing products
- Payment failures during checkout
- Admin role not being able to create or edit products

---

## Initial Automation Priority 
1. Authentication endpoints
2. Product catalog API
3. Add to cart functionality
4. Basic checkout flow

These tests provide fast feedback about the system’s health.

---

## Scope Excluded From MVP
- Performance testing
- Roles and permissions
- Email delivery validation
- Regression testing

These cases will be automated after the MVP, once the system becomes more stable and requirements are better defined.