// Enums

// Errors items
// - server error
// - client error
// - Wrong credentials
// - Page not found
// Unauthorized

// Make an enum with defined variables
enum LoginError {
  Unauthorized = "Unauthorized",
  NoUser = "User not found",
  WrongCred = "Wrong Cred",
}

const printError = (error: LoginError) => {
  // This function gets an error with type of LoginError out enum

  // Conditions on error
  if (error == LoginError.Unauthorized) {
    console.log("You don't have access");
  } else if (error == LoginError.NoUser) {
    console.log("User is not found");
  } else if (error == LoginError.WrongCred) {
    console.log("Username or password is wrong");
  } else {
    console.log("No match cases");
  }
};

// Test
printError(LoginError.Unauthorized);
printError(LoginError.NoUser);
printError(LoginError.WrongCred);
