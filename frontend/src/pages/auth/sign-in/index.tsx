import React from "react";
import {
  AppFooter,
  AppNavbar,
  GuestRoute,
  Head,
  showErrorToast,
  SignInForm,
  SignInFormType,
  SignInHero,
  Toast,
} from "@/components";
import { Spacer, Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getAuthAPI, getMeAPI } from "@/lib/api";
import { userChange } from "@/lib/store/auth";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (data: SignInFormType) => {
    const isUserSignedIn = await getAuthAPI().signIn(data);

    if (isUserSignedIn) {
      const me = await getMeAPI().getMe();
      dispatch(userChange({ user: me }));
      router.push("/");
    } else {
      showErrorToast("Access denied!");
    }
  };

  return (
    <GuestRoute>
      <Head title="Login - FIFA" description="Welcome back!" />
      <AppNavbar />
      <main>
        <Toast />

        <Container lg css={{ minHeight: "70vh" }}>
          <Spacer y={3} />
          <SignInHero>
            <SignInForm onSubmit={onSubmit} />
          </SignInHero>
        </Container>
      </main>
      <AppFooter />
    </GuestRoute>
  );
};

export default SignUp;
