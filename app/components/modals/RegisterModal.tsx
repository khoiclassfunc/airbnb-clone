"use client";
import { useLoginModal, useRegisterModal } from "@/app/hooks";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Modal from "./Modal";

type Props = {};

const RegisterModal = (props: Props) => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        errors={errors}
        disabled={isLoading}
        register={register}
        required
      />
      <Input
        id="name"
        label="Name"
        errors={errors}
        disabled={isLoading}
        register={register}
        required
      />
      <Input
        id="password"
        label="Password"
        errors={errors}
        disabled={isLoading}
        register={register}
        required
        type="password"
      />
    </div>
  );

  const footerContent = (
    <div className={" flex flex-col gap-4 mt-3"}>
      <hr />
      <Button
        outline
        label="Continue with Google"
        onClick={() => signIn("google")}
        icon={FcGoogle}
      />
      <Button
        outline
        label="Continue with Github"
        onClick={() => signIn("github")}
        icon={AiFillGithub}
      />
      <div className={"text-neutral-500 text-center mt-4 font-light"}>
        <div className={"flex flex-row items-center justify-center gap-2"}>
          <div>Already have an account?</div>
          <div
            className={"text-neutral-800 cursor-pointer hover:underline"}
            onClick={() => {
              loginModal.onOpen();
              registerModal.onClose();
            }}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
