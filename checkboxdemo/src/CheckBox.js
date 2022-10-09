import React, { useState } from 'react'

const CheckBox = () => {

    const [check, setCheck] = useState({
        firstname : "",
        hobby : []
    });

    console.log("checkkkk",check);

    const checkHandler = (e) => {
        const {name , value} = e.target;

        let newArray = [...check.hobby , value];
        if (check.hobby.includes(value)) {
            newArray = newArray.filter(day => day !== value);
          }
        setCheck({...check , hobby : newArray})

    }

    const inputHandler = (e) => {
        const {name , value} = e.target;
        console.log("valueeeeeeeee",value);
        setCheck({...check , [name] : value})
    }

  return (
    <>
    <h1>Hello</h1>
    <div>
        <h1>Show Checkboxes</h1>

            <input type="text" name='firstname' onChange={(e) => inputHandler(e)} placeholder="please enter firstname"/>
            <br /><br />
            <input type="checkbox" id="vehicle1" name="hobby" value="Bike" onChange={(e) => checkHandler(e)} />
            <label for="vehicle1"> I have a bike</label><br />

            <input type="checkbox" id="vehicle2" name="hobby" value="Car" onChange={(e) => checkHandler(e)} />
            <label for="vehicle2"> I have a car</label><br />

            <input type="checkbox" id="vehicle3" name="hobby" value="Boat" onChange={(e) => checkHandler(e)} />
            <label for="vehicle3"> I have a boat</label><br /><br />

            <button type='submit'>Submit</button>
    </div>
</>
  )
}

export default CheckBox