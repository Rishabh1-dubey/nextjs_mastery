"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "../../constants/route";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 cursor-pointer";

  const handleSignIN = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: true,
      });
    } catch (error) {
      console.log(error);

      toast("Sign-In failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-IN",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        type="button"
        variant="destructive"
        onClick={() => handleSignIN("github")}
        className={buttonClass}
      >
        <Image
          src="/icons/github.svg"
          alt="devfloe-github"
          height={20}
          width={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with GitHub</span>
      </Button>
      {/* google button */}
      <Button
        type="button"
        variant="destructive"
        onClick={() => handleSignIN("google")}
        className={buttonClass}
      >
        <Image
          src="/icons/google.svg"
          alt="devfloe-google"
          height={20}
          width={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
