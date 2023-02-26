require('@cypress/xpath');
describe('Admin', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const username = cy.get("input[name='username']");
    username.type("Admin"); //input valid username
    const password = cy.get("input[name='password']");
    password.type('admin123'); //input valid password
    const button = cy.get("button");
    button.click(); //click button login
  })

  it('Verify Admin-Organization-Locations', () => {
    //click Menu Admin
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']");
    adminMenu.contains("Admin").click();
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');//validasi
    
    //click Navbar Organizations
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization");
    organization.should("be.visible").click();

    //Click Locations
    const locations = cy.get("a[role='menuitem']").contains("Locations");
    locations.click();
    //validasi
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewLocations');
    cy.get("h5[class='oxd-text oxd-text--h5 oxd-table-filter-title']").contains("Locations");
    cy.get("span[class='oxd-text oxd-text--span']").contains("Records Found");
  })

  it('Search Location with Name on the list', () => {
    //click Menu Admin
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();

    //input nama locations yang akan dicari
    const name = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input');
    name.type("Canadian");
    //Clik button search
    const btn = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');
    btn.click({force: true});
    //validasi data
    cy.get("span[class='oxd-text oxd-text--span']").contains("Record Found");
    const data = cy.get("div[class='oxd-table-row oxd-table-row--with-border']");
    data.contains("Canadian");
  })

  it('Search Location with Name not on the list', () => {
    //click Menu Admin
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();

    //input nama locations yang akan dicari
    const name = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input');
    name.type("Keputih");
    //Clik button search
    const btn = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');
    btn.click({force: true});
    //validasi data
    cy.get("span[class='oxd-text oxd-text--span']").contains("No Records Found");
    cy.on("window:alert", (t) => {
      expect(t).to.contains("No Records Found");
    });
  })

  it('Search Location with City on the list', () => {
    //click Menu Admin
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();

    //input city of locations yang akan dicari
    const city = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/input');
    city.type("New York");
    //Clik button search
    const btn = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');
    btn.click({force: true});
    //validasi data
    cy.get("span[class='oxd-text oxd-text--span']").contains("Record Found");
    const data = cy.get("div[class='oxd-table-row oxd-table-row--with-border']");
    data.contains("New York");
  })

  it('Search Location with City not on the list', () => {
    //click Menu Admin
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();

    //input city of locations yang akan dicari
    const city = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/input');
    city.type("Surabaya");
    //Clik button search
    const btn = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');
    btn.click({force: true});
    //validasi data
    cy.get("span[class='oxd-text oxd-text--span']").contains("No Records Found");
    cy.on("window:alert", (t) => {
      expect(t).to.contains("No Records Found");
    });
  })

  it('Search Location with Name on the list but invalid City', () => {
    //click Menu Admin
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();
  
    //input name dan city of locations yang akan dicari
    const name = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input');
    name.type("Canadian");
    const city = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/input');
    city.type("Canada");
    //Clik button search
    const btn = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');
    btn.click({force: true});
    //validasi data
    cy.on("window:alert", (t) => {
      expect(t).to.contains("No Records Found");
    });
    cy.get("span[class='oxd-text oxd-text--span']").contains("No Records Found");
  })
})