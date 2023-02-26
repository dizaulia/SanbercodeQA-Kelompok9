require('@cypress/xpath');
describe('Automation_Script_Admin_Organization_Locations', () => {
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
    //click Menu Admin-Organization-Locations
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
    //click Menu Admin-Organization-Locations
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
    //click Menu Admin-Organization-Locations
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
    //click Menu Admin-Organization-Locations
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

  it('Search Location with Country on the list', () => {
    //click Menu Admin-Organization-Locations
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();

    //input country of locations yang akan dicari
    cy.get("div[class='oxd-select-wrapper']").click().contains("United States").click();
    //Clik button search
    const btn = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');
    btn.click({force: true});
    //validasi data
    cy.get("span[class='oxd-text oxd-text--span']").contains("Records Found");
    cy.get("div[class='oxd-table-row oxd-table-row--with-border']").contains("United States");
  })

  it('Search Location with Country not on the list', () => {
    //click Menu Admin-Organization-Locations
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();

    //input country of locations yang akan dicari
    cy.get("div[class='oxd-select-wrapper']").click().contains("Colombia").click();
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
    //click Menu Admin-Organization-Locations
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

  it('Search Location with Name on the list but invalid Country', () => {
    //click Menu Admin-Organization-Locations
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();
  
    const name = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input');
    name.type("New York"); //input name
    cy.get("div[class='oxd-select-wrapper']").click().contains("American Samoa").click(); //input invalid country
    //Clik button search
    const btn = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');
    btn.click({force: true});
    //validasi data
    cy.on("window:alert", (t) => {
      expect(t).to.contains("No Records Found");
    });
    cy.get("span[class='oxd-text oxd-text--span']").contains("No Records Found");
  })

  it('Search Location with City on the list but invalid Country', () => {
    //click Menu Admin-Organization-Locations
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();
  
    const city = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/input');
    city.type("California"); //input city
    cy.get("div[class='oxd-select-wrapper']").click().contains("Brazil").click(); //input invalid country
    //Clik button search
    const btn = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');
    btn.click({force: true});
    //validasi data
    cy.on("window:alert", (t) => {
      expect(t).to.contains("No Records Found");
    });
    cy.get("span[class='oxd-text oxd-text--span']").contains("No Records Found");
  })

  it('Success Add New Location', () => {
    //click Menu Admin-Organization-Locations
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();
    //click button add
    const btn = cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']");
    btn.click();
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveLocation'); //cek url
    const name = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/input');
    name.type("Terakota"); //input name
    const city = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input');
    city.type("Lamongan"); //input city
    cy.get("div[class='oxd-select-wrapper']").click().contains('Indonesia').click(); //click country
    const save = cy.get("button").contains("Save").click(); //click button save
    //validasi
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Successfully Saved"); //success alert
    });
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewLocations');
    cy.get("div[class='oxd-table-row oxd-table-row--with-border']").contains("Terakota");
    cy.get("div[class='oxd-table-row oxd-table-row--with-border']").contains("Lamongan");
    cy.get("div[class='oxd-table-row oxd-table-row--with-border']").contains("Indonesia");
  })

  it('Failed Add New Location Empty Required Field', () => {
    //click Menu Admin-Organization-Locations
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();
    //click button add
    const btn = cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']");
    btn.click();
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveLocation'); //cek url
    const name = cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/input');
    name.type("Tokyo"); //input name
    const save = cy.get("button").contains("Save").click(); //click button save
    cy.contains("Required"); //validasi error message
  })

  it('Edit Location', () => {
    //click Menu Admin-Organization-Locations
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();

    cy.get("i[class='oxd-icon bi-pencil-fill']").eq(3).click(); //click icon pencil to edit
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveLocation/6');
    const city = cy.get("input[class='oxd-input oxd-input--active']").eq(2).clear().type("Jakarta"); //input city
    const save = cy.get("button").contains("Save").click(); //click button save
    //validasi
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Successfully Updated"); //success alert
    });
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewLocations');
    cy.get("div[class='oxd-table-row oxd-table-row--with-border']").contains("Jakarta");
  })

  it('Cancel Delete Location', () => {
    //click Menu Admin-Organization-Locations
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();

    cy.get("i[class='oxd-icon bi-trash']").eq(3).click(); //click icon trash to delete
    cy.get("div[class='orangehrm-modal-header']").contains("Are you Sure?");
    cy.get("div[class='orangehrm-text-center-align']").contains("The selected record will be permanently deleted. Are you sure you want to continue?");
    cy.get("button").contains("No, Cancel").click();
  })

  it('Success Delete Location', () => {
    //click Menu Admin-Organization-Locations
    const adminMenu = cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").contains("Admin").click();
    const organization = cy.get("span[class='oxd-topbar-body-nav-tab-item']").contains("Organization").should("be.visible").click();
    const locations = cy.get("a[role='menuitem']").contains("Locations").click();

    cy.get("i[class='oxd-icon bi-trash']").eq(3).click(); //click icon trash to delete
    //modal show up
    cy.get("div[class='orangehrm-modal-header']").contains("Are you Sure?");
    cy.get("div[class='orangehrm-text-center-align']").contains("The selected record will be permanently deleted. Are you sure you want to continue?");
    cy.get("button").contains("Yes, Delete").click();
    // validasi
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Successfully Deleted"); //success alert
    });
  })
})