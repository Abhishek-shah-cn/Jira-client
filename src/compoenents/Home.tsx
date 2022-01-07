import React, { useEffect, useState } from "react";

const Home = (props:{user:string}) => {
  //   const [user, setUser] = useState("");

  //   useEffect(() => {
  //     (async () => {
  //       const response = await fetch("http://localhost:5000/api/user", {
  //         headers: { "Content-Type": "application/json" },
  //         credentials: "include",
  //       });
  //       const data = await response.json();
  //       console.log(data, "check 4 home");
  //       setUser(data.name);
  //     })();
  //   });
  return <div>{props.user ? "hii " + props.user : "Not logged in"}</div>;
};

export default Home;
