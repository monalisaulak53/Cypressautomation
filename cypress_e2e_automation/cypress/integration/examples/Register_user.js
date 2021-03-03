
describe('Launch registeruser', () => {
    
    it('enter user details', function() {
        cy.visit('https://demo.nopcommerce.com/register?returnUrl=%2F')
        
        cy.fixture('registeruser').then((user) => {
console.log(user)
            user.forEach((obj) =>
            {
                cy.get('[type="radio"]').check(obj.Gender);
                cy.get('[name="FirstName"]').type(obj.Firstname);
                cy.get('[name="LastName"]').type(obj.Lastname);
       //        // cy.get('.date-picker-wrapper').type(user.Dateofbirth);
                cy.get('[name="Email"]').type(obj.Email);
               cy.get('[name="Company"]').type(obj.Companyname);
                cy.get('[name="Password"]').type(obj.Password);
                cy.get('[name="ConfirmPassword"]').type(obj.Confirmpassword);
                cy.get('#register-button').click();
            });
        });
    });
});
          