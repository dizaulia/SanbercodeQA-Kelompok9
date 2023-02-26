describe('Login&Logout', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('success login', () => {
      const username = cy.get("input[name='username']");
      username.type("Admin"); //input valid username
      const password = cy.get("input[name='password']");
      password.type('admin123'); //input valid password
      const button = cy.get("button");
      button.click(); //click button login
      // Check url dahsboard
      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    })
  
    it('failed login invalid username', () => {
      const username = cy.get("input[name='username']");
      username.type("Admin123"); //input invalid username
      const password = cy.get("input[name='password']");
      password.type('admin123'); //input valid password
      const button = cy.get("button");
      button.click(); //click button login
      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.contains("Invalid credentials");
    })

    it('failed login invalid password', () => {
        const username = cy.get("input[name='username']");
        username.type("Admin"); //input valid username
        const password = cy.get("input[name='password']");
        password.type('admin'); //input invalid password
        const button = cy.get("button");
        button.click(); //click button login
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.contains("Invalid credentials");
    })

    it('failed login empty username', () => {
        const password = cy.get("input[name='password']");
        password.type('admin123'); //input valid password
        const button = cy.get("button");
        button.click(); //click button login
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); //cek url
        cy.contains("Required"); //validasi error message
    })

    it('failed login empty password', () => {
        const username = cy.get("input[name='username']");
        username.type('Admin'); //input valid username
        const button = cy.get("button");
        button.click(); //click button login
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); //cek url
        cy.contains("Required"); //validasi error message
    })

    it('failed login blank all fields', () => {
        const button = cy.get("button");
        button.click(); //click button login
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); //cek url
        cy.contains("Required"); //validasi error message
    })

    it('success logout', () => {
        const username = cy.get("input[name='username']");
        username.type("Admin"); //input valid username
        const password = cy.get("input[name='password']");
        password.type('admin123'); //input valid password
        const button = cy.get("button");
        button.click(); //click button login
        const userArea = cy.get("span[class='oxd-userdropdown-tab']");
        userArea.click();
        cy.contains("Logout").click(); // click button logout
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); //cek url
    })
  })