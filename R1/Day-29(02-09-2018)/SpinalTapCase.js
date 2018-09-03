let spinalCase = (str) => 
    str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();

spinalCase('This Is Spinal Tap');