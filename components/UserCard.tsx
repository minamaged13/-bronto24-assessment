"use client";
import Image from "next/image";
import { MdEditSquare } from "react-icons/md";
import React, { useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModel";
import { LuCalendarClock } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { PiDotsThreeOutline } from "react-icons/pi";
import { user } from "@/types/user";
import { Button } from "./ui/button";
import deleteUser from "@/actions/deleteUser";
import { useCounter } from "@/context/CounterContext";
import EditUserFormModal from "./EditUserFormModal";
type props = {
  userData: user;
  onDelete: () => void;
};
function UserCard({ userData, onDelete }: props) {
  const data = userData;
  const { increment } = useCounter();
  const [toggle, setToggle] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleDropMenu = () => {
    setToggle(!toggle);
  };

  const handleDeleteClick = () => {
    setToggle(false);
    increment();
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
  };

  const handleDelete = async () => {
    console.log(`User with ID ${userData.id} deleted`);
    // Perform delete action here
    await deleteUser(userData.id);
    onDelete();
    setShowDeleteModal(false);
    increment();
  };
  const handleEditClick = () => {
    setToggle(false);
    setShowEditModal(true);
  };

  return (
    <div className=" text-white relative flex w-[322px] h-[340px] rounded-2xl bg-[url('/images/card-background.png')] bg-cover bg-no-repeat">
      <div className="absolute top-8 right-3 ">
        <button onClick={handleDropMenu}>
          <PiDotsThreeOutline />
        </button>
      </div>
      {toggle && (
        <div className="w-[175px] rounded-xl  h-[88px] bg-white absolute top-14 right-3 ">
          <div className=" drop-shadow-lg border-b-2 text-blue-800  flex items-center justify-start  ">
            <MdEditSquare className="ml-5" />
            <Button onClick={handleEditClick}>Edit</Button>
          </div>

          <div className="text-red-600 flex items-center justify-start ">
            <MdDeleteForever className="ml-5" />
            <Button onClick={handleDeleteClick}>Delete</Button>
          </div>
        </div>
      )}
      <div className=" text-[10px] w-[290px] h-[90px]  absolute bottom-5 mt-4 mx-4">
        <div className=" text-sm text-black rounded-2xl px-4 items-center flex justify-center w-fit p-2 text-sm bg-white">
          <p> {data.job_title} </p>
        </div>
        <div className="text-sm pl-1  pt-1">{data.name}</div>
        <div className="flex flex-row pl-1 pt-3  justify-start">
          <div className="flex flex-row items-center  ">
            <Image
              className="rounded-full"
              alt="user"
              width={20}
              height={20}
              src="/images/user.jpg"
            />
            <p className="pl-2">{data.user_name}</p>
          </div>
          <div className="flex flex-row items-center pl-3">
            <LuCalendarClock className="" />
            <p className="pl-1 "> {data.created_at.slice(0, 10)}</p>
          </div>
          <div className="flex flex-row items-center pl-3">
            <FaRegClock className="" />
            <p className="ml-2 ">{data.age}</p>
          </div>
        </div>
      </div>
      <DeleteConfirmationModal
        show={showDeleteModal}
        onClose={handleCloseModal}
        onDelete={handleDelete}
      />
      <EditUserFormModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        userId={data.id}
      />
    </div>
  );
}

export default UserCard;
