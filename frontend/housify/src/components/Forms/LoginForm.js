import { React, useState } from "react";

const Form = (props) => {
  // implementing state and hooks

  const [inputs, setInputs] = useState({
    password: "",
    email: "",
  });

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();

      alert(`Welcome ${inputs.email}!
         `);
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div className="w-full  mx-auto py-20 px-10  justify-between text-center  bg-zinc-800 my-10">
      {/* testing form */}
      {/* <h4>
          Hello {inputs.email} {inputs.password}
        </h4>
       */}

      <form onSubmit={handleSubmit}>
        <div className=" md:mx-[100px] md:grid grid-cols-2 gap-10  text-xl text-left pb-10 items-center">
          <div>
            <h2 className="font-thin text-left pb-4 text-5xl">Login</h2>

            <div>
              <label>Email Address</label>
              <input
                className="formInput"
                type="email"
                name="email"
                onChange={handleInputChange}
                value={inputs.email}
                placeholder="email@email.com"
                required
              />
            </div>

            <div>
              <label>Password</label>
              <input
                className="formInput"
                type="password"
                name="password"
                onChange={handleInputChange}
                placeholder="Enter Password"
                value={inputs.password}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto text-center text-2xl">
          <button type="submit button" className="px-14 py-6">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
