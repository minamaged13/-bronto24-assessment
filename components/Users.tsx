"use client";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

import { user } from "@/types/user";
import AddUserButton from "./AddUserButton";
function Users() {
  const [userProfiles, setUserProfiles] = useState<user[]>([]);
  const [deleted, setDeleted] = useState<number>(1);
  const onDelete = () => {
    setDeleted((prevState) => prevState + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://dv2.brontosolutions.com:8000/assignment/userprofiles/"
      );
      const data = await res.json();
      setUserProfiles(data.results);
      console.log(userProfiles);
    };

    fetchData();
  }, [deleted]);
  return (
    <>
      <div className=" p-6 grid  sm:grid-cols-1 sm:pl-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
        {userProfiles.map((user) => (
          <div key={user.id}>
            <UserCard userData={user} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;
