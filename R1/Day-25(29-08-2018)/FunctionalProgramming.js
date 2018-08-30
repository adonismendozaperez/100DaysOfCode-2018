let {log} = console;
// Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); // :(
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :(

log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// Understand the Hazards of Using Imperative Code
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
    this.tabs = tabs; // we keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function (index) {
    var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
    var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together 
    return this;
   };
  
  // Let's create three browser windows
  var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  var finalTabs = socialWindow
                      .tabOpen() // Open a new tab for cat memes
                      .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                      .join(workWindow.tabClose(1).tabOpen());
  
  alert(finalTabs.tabs);
