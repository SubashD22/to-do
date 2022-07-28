import React, { useState } from "react";

const useToggle= (initialVal = false) => {
    const[state,toggleState]=useState(initialVal);
    const toggle =()=> toggleState(!state);
    return[state,toggle]
}
export default useToggle