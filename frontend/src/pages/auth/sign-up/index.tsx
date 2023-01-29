import React from "react";
import {
  AppFooter,
  AppNavbar,
  Head,
  SignUpForm,
  SignUpHero,
} from "@/components";
import { SignUpFormType } from "@/components/sign-up/form";
import { Spacer, Container } from "@nextui-org/react";
import { signUp } from "@/lib/api";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();

  const onSubmit = (data: SignUpFormType) => {
    signUp(data)
      .then((e) => {
        localStorage.setItem("fifa-refresh-token", e.data.refreshToken);
        router.push("/");
      })
      .catch((err) => {
        // @TODO: Show toast error message
      });
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default SignUp;
