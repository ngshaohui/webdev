function createNavbar(targetId) {
  // create navbar element
  const navEl = document.createElement("nav");

  // create nav item for home
  const homeNavItem = document.createElement("a");
  homeNavItem.href = "index.html";
  const homeNavItemText = document.createTextNode("Home");
  homeNavItem.appendChild(homeNavItemText);

  // create nav item for about
  const aboutNavItem = document.createElement("a");
  aboutNavItem.href = "about.html";
  const aboutNavItemText = document.createTextNode("About us");
  aboutNavItem.appendChild(aboutNavItemText);

  // create nav item for contact
  const contactNavItem = document.createElement("a");
  contactNavItem.href = "contact.html";
  const contactNavItemText = document.createTextNode("Contact");
  contactNavItem.appendChild(contactNavItemText);

  navEl.appendChild(homeNavItem);
  navEl.appendChild(aboutNavItem);
  navEl.appendChild(contactNavItem);
  document.querySelector(targetId).appendChild(navEl);
}

createNavbar("#nav-container");
