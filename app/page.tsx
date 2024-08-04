"use client";
import AddUserButton from "@/components/AddUserButton";
import NewUserFormModal from "@/components/NewUserFormModal";
import { Button } from "@/components/ui/button";
import Users from "@/components/Users";
import { CounterProvider } from "@/context/CounterContext";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };
  return (
    <CounterProvider>
      <div>
        <div className="flex flex-row-reverse mr-9">
          <AddUserButton handleModal={handleOpenModal} />
        </div>
        <NewUserFormModal show={showModal} onClose={handleCloseModal} />
        <Users />
      </div>
    </CounterProvider>
  );
}
