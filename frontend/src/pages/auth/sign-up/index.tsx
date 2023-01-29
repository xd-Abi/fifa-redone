import React from "react";
import {
  AppFooter,
  AppNavbar,
  GuestRoute,
  Head,
  SignUpForm,
  SignUpFormType,
  SignUpHero,
} from "@/components";
import { Spacer, Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import { getAuthAPI } from "@/lib/api";
import { useDispatch } from "react-redux";
import { userChange } from "@/lib/store/auth";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (data: SignUpFormType) => {
    const isUserSignedUp = await getAuthAPI().signUp(data);

    if (isUserSignedUp) {
      dispatch(
        userChange({
          user: {
            ...data,
          },
        })
      );
      router.push("/");
    } else {
      // @TODO: Show toast error message
    }
  };

  return (
    <GuestRoute>
      <Head
        title="Sign Up - FIFA"
        description="Join the community by signing up"
      />
      <AppNavbar />
      <main>
        <Container lg css={{ minHeight: "70vh" }}>
          <Spacer y={3} />
          <SignUpHero>
            <SignUpForm onSubmit={onSubmit} />
          </SignUpHero>
        </Container>
      </main>
      <AppFooter />
    </GuestRoute>
  );
};

export default SignUp;
