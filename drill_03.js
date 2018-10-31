// Self-reference
// Modify personMaker.fullName to be a function that uses self-reference (via this) in order to return the firstName and lastName properties separated by a space.

// So, for instance, if firstName was 'Jane' and lastName was 'Doe', fullName() should return 'Jane Doe'.



function personMaker() {
      var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function(){console.log( this.firstName + " " + this.lastName)}

    };
     
    return person;
    
  }

  personMaker();

  
 