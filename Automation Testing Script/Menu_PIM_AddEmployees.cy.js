describe("Menu PIM Add Employees", () =>{
    it("Successfully Load The Dashboard Page", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Do Login
        // Type Username
        const username = cy.get("input[name='username']");
        username.type("Admin");
        // Type password
        const password = cy.get("input[name='password']");
        password.type('admin123');
        const button = cy.get("button");
        button.click();
        // Check url
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    });

    it("Acces Menu Add Employee", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

        // Do Login
        const username = cy.get("input[name='username']");
        username.type("Admin");
        const password = cy.get("input[name='password']");
        password.type('admin123');
        const button = cy.get("button");
        button.eq(0).click();
        
        //*Get button PIM
        const PIMbutton = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']")
        PIMbutton.should("be.visible");
        PIMbutton.eq(1).click();

         // Check url
         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

         //Get button add employee
         const addEmployeeButton = cy.get("a[class='oxd-topbar-body-nav-tab-item']").contains("Add Employee")
         addEmployeeButton.should("be.visible").click()

    });

    it("Contains Employee Full Name, Employee Id,Create Login Detail,  Username, Status, Password, Confirm Password, Save Button, Cancel Button", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

        // Do Login
        const username = cy.get("input[name='username']");
        username.type("Admin");
        const password = cy.get("input[name='password']");
        password.type('admin123');
        const button = cy.get("button");
        button.eq(0).click();
        
        // Get button PIM
        const PIMbutton = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']")
        PIMbutton.should("be.visible");
        PIMbutton.eq(1).click();

        // Check url
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

        //Get button add employee
        const addEmployeeButton = cy.get("a[class='oxd-topbar-body-nav-tab-item']").contains("Add Employee")
         addEmployeeButton.should("be.visible").click()

         //*Input first name
         const firstName = cy.get("input[name='firstName']")
         firstName.should("be.visible")
         firstName.should("have.attr","placeholder","First Name")
         
         //Input middle name
         const middleName = cy.get("input[name='middleName']")
         middleName.should("be.visible")
         middleName.should("have.attr", "placeholder","Middle Name")

         //Input last name
         const lastName = cy.get("input[name='lastName']")
         lastName.should("be.visible")
         lastName.should("have.attr", "placeholder", "Last Name")

         //Input employee id
         const employeeId = cy.get("input[class='oxd-input oxd-input--active']").as("Employee Id")
         employeeId.should("be.visible")
         employeeId.should("have.attr", "class", "oxd-input oxd-input--active")

         //Click login detail button
         const loginDetailButton = cy.get("span[class='oxd-switch-input oxd-switch-input--active --label-right']")
         loginDetailButton.should("be.visible")
         loginDetailButton.should("have.attr", "class", "oxd-switch-input oxd-switch-input--active --label-right")
         .click()

         // Input username
         const usernameAddEmployee = cy.get("input[class='oxd-input oxd-input--active']").as("Username")
         usernameAddEmployee.should("be.visible")
         

         // Input status radio button
         const statusRadioButton = cy.get("input[type='radio']")
         
         statusRadioButton.should("have.attr", "value","1")

         //input password
         const passwordAddEmployee = cy.get("input[class='oxd-input oxd-input--active']").as("Password")
         passwordAddEmployee.should("be.visible")

         //confirm password
         const confirmPassword = cy.get("input[class='oxd-input oxd-input--active']").as("Confirm Password")
         confirmPassword.should("be.visible")

         //Get save button
         const saveButton = cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']")
         saveButton.should("be.visible")
         saveButton.should("have.attr", "type", "submit")
         saveButton.contains("Save")

         //Get cancel button
         const cancelButton = cy.get("button[class='oxd-button oxd-button--medium oxd-button--ghost']")
         cancelButton.should("be.visible")
         cancelButton.should("have.attr", "type", "button")
         cancelButton.contains("Cancel")
    })      
    
    it("Add Employees", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

        // Do Login
        const username = cy.get("input[name='username']");
        username.type("Admin");
        const password = cy.get("input[name='password']");
        password.type('admin123');
        const button = cy.get("button");
        button.eq(0).click();
        
        // Get button PIM
        const PIMbutton = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']")
        PIMbutton.should("be.visible");
        PIMbutton.eq(1).click();

        // Check url
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

        //*Get button add employee
        const addEmployeeButton = cy.get("a[class='oxd-topbar-body-nav-tab-item']").contains("Add Employee")
        .click();

         //input first name
         const firstName = cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input')
         firstName.type("John")
         //input middle name
         const middleName = cy.get(':nth-child(2) > :nth-child(2) > .oxd-input')
         middleName.type("Mr")
         //input last name
         const lastName = cy.get(':nth-child(3) > :nth-child(2) > .oxd-input')
         lastName.type("Doe")
         //input employee id
         const employeeId = cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
         employeeId.type("30000")
         //Click Login detail button
         const loginDetailButton = cy.get("span[class='oxd-switch-input oxd-switch-input--active --label-right']").click()
         //Input username
         const usernameAddEmployee = cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
         usernameAddEmployee.type("johndoe2")
         // Input status radio button
         const statusRadioButton = cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input')
         .click()
         //input password
         const passwordAddEmployee = cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
         passwordAddEmployee.type("Johndoe123!")
         //confirm password
         const confirmPassword = cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
         confirmPassword.type("Johndoe123!")
         //Get save button
         const saveButton = cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']")
         .click()
         cy.on("window:alert", (t) => {
            expect(t).to.contains("Succesfully Saved");
          });
         
    })

    it("Add Employee with null credentials", ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

        // Do Login
        const username = cy.get("input[name='username']");
        username.type("Admin");
        const password = cy.get("input[name='password']");
        password.type('admin123');
        const button = cy.get("button");
        button.eq(0).click();
        
        // Get button PIM
        const PIMbutton = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']")
        PIMbutton.should("be.visible");
        PIMbutton.eq(1).click();

        // Check url
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

        //*Get button add employee
        const addEmployeeButton = cy.get("a[class='oxd-topbar-body-nav-tab-item']").contains("Add Employee")
        .click();

         //input first name
         const firstName = cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input')
         firstName.type(" ")
         //input middle name
         const middleName = cy.get(':nth-child(2) > :nth-child(2) > .oxd-input')
         middleName.type(" ")
         //input last name
         const lastName = cy.get(':nth-child(3) > :nth-child(2) > .oxd-input')
         lastName.type(" ")
         //input employee id
         const employeeId = cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
         employeeId.type(" ")
         //Click Login detail button
         const loginDetailButton = cy.get("span[class='oxd-switch-input oxd-switch-input--active --label-right']").click()
         //Input username
         const usernameAddEmployee = cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
         usernameAddEmployee.type(" ")
         // Input status radio button
         const statusRadioButton = cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input')
         .click()
         //input password
         const passwordAddEmployee = cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
         passwordAddEmployee.type(" ")
         //confirm password
         const confirmPassword = cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
         confirmPassword.type(" ")
         //Get save button
         const saveButton = cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']")
         .click()
         cy.on("window:alert", (t) => {
            expect(t).to.contains("Required");   
        })
    })
})