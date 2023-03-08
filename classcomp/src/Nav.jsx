import React from 'react';



const Nav = (props) => {
  return (
    <>
   <h1>{props.data}</h1>
   <h1>{props.prg1}</h1>
   <h1>{props.prg2}</h1>
   <h1>{props.prg3}</h1>
   <h1>{props.prg4}</h1>
   </>
  );
}

export default Nav;
