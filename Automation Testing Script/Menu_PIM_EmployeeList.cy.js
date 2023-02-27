describe("Menu PIM Employees List", () =>{
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        // Do Login
        const username = cy.get("input[name='username']");
        username.type("Admin");
        const password = cy.get("input[name='password']");
        password.type('admin123');
        const button = cy.get("button");
        button.click();

    })
    it("Successfully Load The Dashboard Page", () =>{
        // Check url
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    });

    it("Acces Menu Employee List", () =>{
        // Check url
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        //*Get button PIM
        const PIMbutton = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("PIM")
        PIMbutton.should("be.visible");
        PIMbutton.click();
        // Check url
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         
    });

    it("Search Employee information by name", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Input name
         const inputName = cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
         inputName.should("be.visible")
         inputName.type("Odis")
         //Click button search
         const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
         buttonSearch.should("be.visible")
         .click({force: true});
         //get notif
         cy.contains("(1) Record Found")         
    });

    it("Search Employee information by wrong name", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
        // Check url
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
        //Web contain
        cy.contains("PIM")
        cy.contains("Employee Information")
        //Input name
        const inputName = cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
        inputName.should("be.visible")
        inputName.type("WrongName")
        //Click button search
        const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
        buttonSearch.should("be.visible")
        .click({force: true});
        //get notif
        cy.on("window:alert", (t) => {
            expect(t).to.contains("No Records Found")         
        });

    })

    it("Search Employee information by Employee Id", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Input id
         const inputId = cy.get(':nth-child(2) > .oxd-input')
         inputId.should("be.visible")
         inputId.should("have.attr","class","oxd-input oxd-input--active")
         inputId.type("0002")
         //Click button search
         const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
         buttonSearch.should("be.visible")
         .click({force: true});
         //get notif
         cy.contains("(1) Record Found")         
    });

    it("Search Employee information by wrong Employee Id", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Input id
         const inputId = cy.get(':nth-child(2) > .oxd-input')
         inputId.should("be.visible")
         inputId.should("have.attr","class","oxd-input oxd-input--active")
         inputId.type("02212")
         //Click button search
         const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
         buttonSearch.should("be.visible")
         .click({force: true});
         //get notif
         cy.on("window:alert", (t) => {
            expect(t).to.contains("No Records Found")         
        });         
    });

    it("Search Employee information by Supervisor Name", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Input name superviso
         const superVisorName = cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
         superVisorName.should("be.visible")
         superVisorName.should("have.attr","placeholder","Type for hints...")
         superVisorName.type("Kevin Mathews")
         //get autocomplete
         const roleName = cy.get("div[role='listbox']").contains("Kevin Mathews")
         roleName.click()
         //Click button search
         const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
         buttonSearch.should("be.visible")
         .click({force: true});
         //get notif
         cy.contains("(4) Records Found")         
    });

    it("Search Employee information by wrong Supervisor Name", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Input name superviso
         const superVisorName = cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
         superVisorName.should("be.visible")
         superVisorName.should("have.attr","placeholder","Type for hints...")
         superVisorName.type("WrongSupervisorName")
         //get autocomplete
         //const roleName = cy.get("div[role='listbox']").contains("WrongSupervisorName")
         //roleName.click()
         //Click button search
         const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
         buttonSearch.should("be.visible")
         .click({force: true});
         //get notif
         cy.on("window:alert", (t) => {
            expect(t).to.contains("No Records Found")         
        });   
    });

    it("Search Employee information by Employeement status", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Select status
         const statusDropDown = cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
         statusDropDown.should("be.visible")
         statusDropDown.click()
        //Select job
         const selectStatus = cy.get("div[role='listbox']").contains("Full-Time Contract")
         selectStatus.click()
         //Click button search
         const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
         buttonSearch.should("be.visible")
         .click({force: true});
         //get notif
         cy.contains("(4) Records Found")         
    });

    it("Search Employee information by wrong Employeement status", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Select status
         const statusDropDown = cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
         statusDropDown.should("be.visible")
         statusDropDown.click()
        //Select job
         const selectStatus = cy.get("div[role='listbox']").contains("Part-Time Internship")
         selectStatus.click()
         //Click button search
         const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
         buttonSearch.should("be.visible")
         .click({force: true});
         //get notif
         cy.contains("No Records Found")         
    });

    it("Search Employee information by Include", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Select status
         const includeDropDown = cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
         includeDropDown.should("be.visible")
         includeDropDown.should("have.attr","class","oxd-select-text oxd-select-text--active")
         includeDropDown.click()
        //Select job
        //const selectInlcude = cy.get("div[role='listbox']").contains("Current Employess Only")
        //selectInlcude.click()
        //Click button search
         const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
         buttonSearch.should("be.visible")
         .click({force: true});
         //get notif
         cy.contains("(36) Records Found")
    });

    it("Search Employee information by wrong Include", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Select status
         const includeDropDown = cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
         includeDropDown.should("be.visible")
         includeDropDown.should("have.attr","class","oxd-select-text oxd-select-text--active")
         includeDropDown.click()
        //Select job
         const selectInlcude = cy.get("div[role='listbox']").contains("Past Employees Only")
         selectInlcude.click()
        //Click button search
         const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
         buttonSearch.should("be.visible")
         .click({force: true});
         //get notif
         cy.contains("No Records Found")
    })

    it("Search Employee information by Job Title", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Select status
         const includeDropDown = cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
         includeDropDown.should("be.visible")
         includeDropDown.should("have.attr","class","oxd-select-text oxd-select-text--active")
         includeDropDown.click()
        //Select job
         const selectInlcude = cy.get("div[role='listbox']").contains("Software Architect")
         selectInlcude.click()
        //Click button search
         const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
         buttonSearch.should("be.visible")
         .click({force: true});
         //get notif
         cy.contains("(1) Record Found")
    })

    it("Search Employee information by wrong Job Title", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Select status
         const includeDropDown = cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
         includeDropDown.should("be.visible")
         includeDropDown.should("have.attr","class","oxd-select-text oxd-select-text--active")
         includeDropDown.click()
        //Select job
         const selectInlcude = cy.get("div[role='listbox']").contains("QA Engineer")
         selectInlcude.click()
        //Click button search
         const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
         buttonSearch.should("be.visible")
         .click({force: true});
         //get notif
         cy.contains("No Records Found")
    })

    it("Search Employee information by Sub Unit", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Select status
         const subUnit = cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
         subUnit.should("be.visible")
         subUnit.should("have.attr","class","oxd-select-text oxd-select-text--active")
         subUnit.click()
        //Select job
         const selectInlcude = cy.get("div[role='listbox']").contains("OrangeHRM")
         selectInlcude.click()
        //Click button search
         const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
         buttonSearch.should("be.visible")
         .click({force: true});
         //get notif
         cy.contains("(32) Records Found")
    })

    it("Search Employee information by wrong Sub Unit", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Select status
         const subUnit = cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
         subUnit.should("be.visible")
         subUnit.should("have.attr","class","oxd-select-text oxd-select-text--active")
         subUnit.click()
        //Select job
         const selectInlcude = cy.get("div[role='listbox']").contains("Quality Assurance")
         selectInlcude.click()
        //Click button search
         const buttonSearch = cy.get('.oxd-form-actions > .oxd-button--secondary').contains("Search")
         buttonSearch.should("be.visible")
         .click({force: true});
         //get notif
         cy.contains("No Records Found")
    })
    
    
    it("Reset Button Function", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
         //Web contain
         cy.contains("PIM")
         cy.contains("Employee Information")
         //Input name
         const inputName = cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
         inputName.should("be.visible")
         inputName.type("Alice")
         //Click button search
         const resetButton = cy.get('.oxd-button--ghost').contains("Reset")
         resetButton.should("be.visible")
         .click({force: true});

    });
   
});