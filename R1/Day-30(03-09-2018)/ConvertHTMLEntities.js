function convertHTML(str) {
    let characters = [/&/g, /</g, />/g, /\"/g, /\'/g];
    let entities = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
    
    for(let i = 0; i < characters.length; i++) {
      str = str.replace(characters[i], entities[i]);
    }
    
    return str;
  }
  
  convertHTML("Dolce & Gabbana");