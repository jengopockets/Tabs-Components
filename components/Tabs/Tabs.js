
class TabLink {
  constructor(element) {
    
    //Assign this.element to the passed in DOM element
    //this.element;
    this.element = element;
    // Get the custom data attribute on the Link
    // this.data;
    this.data = this.element.dataset.tab;
    console.log(this.data)
   // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    console.log(this.itemElement)
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    console.log(this.tabItem)
    
    //Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () =>
    this.select());
    
  };
// Get all of the elements with the tabs-link class
// Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
// Add a class named "tabs-link-selected" to this link
// Call the select method on the item associated with this link
  select() {
    
    const links = document.querySelectorAll('.tabs-link');

    
    links.forEach(link => link.classList.remove('tabs-link-selected'));

    
    this.element.classList.add('tabs-link-selected');
    
    
    this.tabItem.select();
    console.log(this.tabItem)
  }
}
// Assign this.element to the passed in element
// Select all ".tabs-item" elements from the DOM
// Remove the class "tabs-item-selected" from each element
// Add a class named "tabs-item-selected" to this element
class TabItem {
  constructor(element) {
    
    this.element = element;
   
  }

  select() {
    
    const items = document.querySelectorAll('.tabs-item');
  

    
   items.forEach(item =>  item.classList.remove('tabs-item-selected'));
    
    
  
    this.element.classList.add('tabs-item-selected');
    
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method
 onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink 
and pass in each link as a parameter

*/

let links = document.querySelectorAll('.tabs-link');
links.forEach(link => new TabLink(link));

