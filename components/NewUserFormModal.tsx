import React, { useEffect, useState } from "react";
import Backdrop from "./BackDrop";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoMdClose } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userSchema, UserSchema } from "@/schemas/userSchema";
import { Button } from "./ui/button";
import { useCounter } from "@/context/CounterContext";

interface NewUserFormModalProps {
  show: boolean;
  onClose: () => void;
}

const NewUserFormModal: React.FC<NewUserFormModalProps> = ({
  show,
  onClose,
}) => {
  const [countries, setCountries] = useState<{ id: number; name: string }[]>(
    []
  );
  const { increment } = useCounter();
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://dv2.brontosolutions.com:8000/assignment/countries/"
        );
        const data = await response.json();
        setCountries(data.results);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserSchema> = async (data) => {
    const formattedData = {
      ...data,
      country: parseInt(data.country),
      gender: "Male",
    };

    try {
      const response = await fetch(
        "https://dv2.brontosolutions.com:8000/assignment/userprofiles/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const result = await response.json();
      console.log(result);
      onClose();
      increment();
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to create user");
    }
  };

  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative rounded-xl bg-white w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 sm:p-6 lg:p-8"
          >
            <div className="text-black font-bold text-lg sm:text-xl md:text-2xl">
              Add a new employee
            </div>
            <div className="text-gray-500 text-sm sm:text-base md:text-lg mt-2">
              It will take a couple of minutes.
              <br />
              Change profile settings and confirm with SMS code
            </div>
            <div className="absolute top-4 right-5">
              <button onClick={onClose}>
                <IoMdClose />
              </button>
            </div>
            <div className="text-black py-2 font-bold text-base sm:text-lg md:text-xl">
              Your personal data
            </div>
            <div className="mt-1 flex flex-col gap-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                className="rounded-xl"
                required
                type="text"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <Label htmlFor="user_name">Username</Label>
              <Input
                className="rounded-xl"
                required
                type="text"
                {...register("user_name")}
              />
              {errors.user_name && (
                <p className="text-red-500">{errors.user_name.message}</p>
              )}

              <Label htmlFor="email">E-mail</Label>
              <Input
                className="rounded-xl"
                required
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <Label htmlFor="age">Age</Label>
              <Input
                className="rounded-xl"
                required
                type="number"
                min={0}
                {...register("age", { valueAsNumber: true })}
              />
              {errors.age && (
                <p className="text-red-500">{errors.age.message}</p>
              )}

              <Label htmlFor="country">Country</Label>
              <select
                className="rounded-xl h-7   border border-solid border-black"
                required
                {...register("country")}
              >
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-red-500">{errors.country.message}</p>
              )}

              <Label htmlFor="job_title">Job Title</Label>
              <Input
                className="rounded-xl"
                required
                type="text"
                {...register("job_title")}
              />
              {errors.job_title && (
                <p className="text-red-500">{errors.job_title.message}</p>
              )}
            </div>
            <div className="flex flex-row-reverse gap-x-3 mt-4 mb-1">
              <Button
                className="p-2 hover:bg-blue-600 px-4 border shadow-lg text-white bg-blue-900 rounded-xl"
                type="submit"
              >
                Add user
              </Button>
              <Button
                className="p-2 px-4 border hover:bg-gray-100 shadow-lg border-blue-900 text-blue-900 bg-white rounded-xl"
                onClick={onClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default NewUserFormModal;
