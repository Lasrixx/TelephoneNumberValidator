function telephoneCheck(str) {
    let rgx = /^(?:1\s?)?(?:\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;
    if(rgx.test(str)){
      return true;
    }
    else{
      return false;
    }
  
  }
  
  console.log(telephoneCheck("1 (555) 555-5555"));