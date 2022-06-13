import React from "react";

export const RegisterScreen = () => {
  return (
    <>
      <h1>Ciao</h1>
      <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" value="John" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" value="Doe" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
