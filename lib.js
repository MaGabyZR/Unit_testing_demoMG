const db = require('./db');
const mail = require('./mail');

// Testing numbers 
module.exports.absolute = function(number) {
  return (number >= 0) ? number : -number; 
/*   if (number >= 0) return number; 
  //if (number < 0) return -number; 
    return -number; */
}

// Testing strings 
module.exports.greet = function(name) { 
  return 'Welcome ' + name; 
}

// Testing arrays 
module.exports.getCurrencies = function() { 
  return ['USD', 'AUD', 'EUR'];
}

// Testing objects 
module.exports.getProduct = function(productId) { 
  return { id: productId, price: 10 };
}

// Testing exceptions 
module.exports.registerUser = function(username) { 
  if (!username) throw new Error('Username is required.');

  return { id: new Date().getTime(), username: username }
}

// Mock functions 
module.exports.applyDiscount = function(order) { 
  const customer = db.getCustomerSync(order.customerId);

  if (customer.points > 10) 
    order.totalPrice *= 0.9; 
}

// Mock functions, this is replaced with a mock function in lib.test.js So you do not call any db.
module.exports.notifyCustomer = function(order) { 
  const customer = db.getCustomerSync(order.customerId);

  mail.send(customer.email, 'Your order was placed successfully.');
}