import React from 'react'
import { HiPlus } from "react-icons/hi";
import { Button } from "./ui/button";
 type addUserButtonProps={
  handleModal:()=>void
 }
function AddUserButton({handleModal}: addUserButtonProps) {
  return (
      <div  className=" mt-14 mb-1 w-[140px] flex justify-center  items-center  bg-sidebarBlue rounded-xl text-white">
      <HiPlus  onClick={handleModal} />
      <Button onClick={handleModal}>New User</Button>
  </div>
  )
}

export default AddUserButton