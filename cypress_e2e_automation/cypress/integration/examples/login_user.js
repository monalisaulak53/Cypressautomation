describe('Loginuser', () => {
    
    it('enter user details', function() {
        cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F')
        
        cy.fixture('login').then((user) => {


            user.forEach((obj) =>{
            cy.get('[name="Email"]').type(obj.Email);
            cy.get('[name="Password"]').type(obj.Password);
            cy.get('.login-button').click();
        });
                
            
        });
    });
});
          