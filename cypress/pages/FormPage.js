class FormPage {
    // Fill in the form
    //First name
    enterFirstName() {
        cy.get('#firstName').type('John');
    }
    //Last name
    enterLastName() {
        cy.get('#lastName').type('Doe');
    }
    //Email
    enterEmail() {
        cy.get('#userEmail').type('name@example.com');
    }
    enterGender() {
        cy.get('label[for="gender-radio-1"]').click();
    }
    enterPhoneNumber() {
        cy.get('#userNumber').type('0123456789');
    }
    enterDateOfBirth() {
       // cy.get('#dateOfBirthInput').clear().type('28 Feb 1930');
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select('1930');
        cy.get('.react-datepicker__month-select').select('1');
        cy.get(`[aria-label='Choose Friday, February 28th, 1930']`).click();
    }
    enterSubject() {
        cy.get('#subjectsInput').type('Economics{enter}');
    }
    enterHobby() {
        cy.get('label[for="hobbies-checkbox-3"]').click();
    }
    uploadFile() {
        cy.get('input#uploadPicture').attachFile('../files/cat.jpeg');
    }
    selectState() {
        cy.get('#react-select-3-input').type('NCR', { force: true }).type('{enter}');
    }
    selectCity() {
        cy.get('#react-select-4-input').type('Delhi', { force: true }).type('{enter}');
    }
    clickSubmit() {
        cy.get('#submit').click({ force: true });
    }

    validateEnteredInfo() {
        cy.get('table').within(() => {
            cy.get('td').contains('John Doe')
            cy.get('td').contains('name@example.com')
            cy.get('td').contains('Male')
            cy.get('td').contains('0123456789')
            cy.get('td').contains('28 February,1930')
            cy.get('td').contains('Economics')
            cy.get('td').contains('Music')
            cy.get('td').contains('cat.jpeg')
            cy.get('td').contains('NCR Delhi')
        })
    }
}

export default FormPage;