// import { Link, Switch, Route } from "react-router-dom";
// import Login from "./login";
// import { useEffect, useState } from "react";

// function ProtectedRoute(props) {
//     debugger;
//     const [hasAccess, setHasAccess] = useState(false);

//     // write code to send request to /profile in that
//     //              if message==access then return Route

//     useEffect(() => {

//         const token = sessionStorage.getItem("sessiontoken");


//         const requestforValidation = () => {
// debugger;
//             var helper = new XMLHttpRequest();
//             helper.onreadystatechange = () => {
//                 if (helper.readyState == 4 &&
//                     helper.status == 200) {
//                         debugger;
//                     var responseReceived =
//                         JSON.parse(helper.responseText);
//                     console.log(responseReceived);
//                     if (responseReceived.message === "access") {
//                        setHasAccess(true);
//                     }
                    
//                 }
//             }
//             helper.open("POST",
//                 "http://127.0.0.1:9999/profile");
//             helper.setRequestHeader('Authorization', 'Bearer ' + token)
//             helper.send(JSON.stringify());

//         }
//         requestforValidation();
//     },[]);


//     if (hasAccess==true) {
//         return <Route path={props.path} exact
//             component={props.component} />
//     }
//     else {
//         return <Login />
//     }











// //     if (sessionStorage.getItem("sessiontoken") != null &&
// //         sessionStorage.getItem("isloggedin") == 'true') {
// //         return <Route path={props.path} exact
// //             component={props.component} />
// //     }
// //     else {
// //         return <Login />
// //     }



//  }

// export default ProtectedRoute;


import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Login from "./login";

function ProtectedRoute(props) {
    debugger;
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("sessiontoken");

    const requestForValidation = async () => {
      try {
        const response = await fetch("http://127.0.0.1:9999/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.message === "access") {
            setHasAccess(true);
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    requestForValidation();
  }, []);

  if (hasAccess) {
    return (
      <Route path={props.path} exact component={props.component} />
    );
  } else {
    return <Login />;
  }
}

export default ProtectedRoute;
