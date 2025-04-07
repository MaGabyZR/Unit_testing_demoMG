//This is the real db implementation. We replaced it with the mock implementation in the unit test, so we don´t talk to an external resource.
module.exports.getCustomerSync = function(id) { 
  console.log('Reading a customer from MongoDB...');
  return { id: id, points: 11 };
}

module.exports.getCustomer = async function(id) { 
  return new Promise((resolve, reject) => {
    console.log('Reading a customer from MongoDB...');
    resolve({ id: id, points: 11 });
  });
}