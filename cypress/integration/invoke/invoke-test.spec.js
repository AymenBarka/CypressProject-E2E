

describe('descripe test scripts', function() {
    beforeEach(function(){
        cy.visit('')
      });

    it('invoke te remove target attribute', function() {
        cy.get('#simpleLink').invoke('removeAttr', 'target')
        cy.get('#simpleLink').click()
        cy.location().then(yieldedObject => cy.log(yieldedObject.href))

    })
    
})