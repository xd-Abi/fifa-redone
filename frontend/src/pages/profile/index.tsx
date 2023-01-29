import React from "react";
import { Container, Spacer } from "@nextui-org/react";
import {
  AppFooter,
  AppNavbar,
  Head,
  ProfileForm,
  ProfileHero,
  ProtectedRoute,
  showErrorToast,
  Toast,
} from "@/components";
import { UserUpdateInterface } from "@/lib/api/endpoints/me/types";
import { getMeAPI } from "@/lib/api";
import { useDispatch } from "react-redux";
import { userChange } from "@/lib/store/auth";
import { showSuccessToast } from "@/components/toast";

const Profile = () => {
  const dispatch = useDispatch();

  const onSubmit = async (data: UserUpdateInterface) => {
    const isProfileUpdated = await getMeAPI().putMe(data);

    if (isProfileUpdated) {
      const me = await getMeAPI().getMe();
      dispatch(userChange({ user: me }));
      showSuccessToast("Updated profile!");
    } else {
      showErrorToast("Failed to update profile!");
    }
  };

  return (
    <ProtectedRoute>
      <Head title="My Profile - FIFA" description="Edit your profile" />
      <AppNavbar />
      <main>
        <Toast />
        <Container lg css={{ minHeight: "70vh" }}>
          <Spacer y={3} />
          <ProfileHero>
            <ProfileForm onSubmit={onSubmit} />
          </ProfileHero>
        </Container>
      </main>
      <AppFooter />
    </ProtectedRoute>
  );
};

export default Profile;
