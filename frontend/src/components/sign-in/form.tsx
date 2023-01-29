import { getAuthAPI } from "@/lib/api";
import { Spacer } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../input";
import { StyledForm, StyledFormSubmitButton } from "./styled";

export type SignInFormType = {
  emailOrUsername: string;
  password: string;
};

type Props = {
  onSubmit: (data: SignInFormType) => void;
};

export const SignInForm = ({ onSubmit }: Props) => {
  const formik = useFormik<SignInFormType>({
    initialValues: {} as SignInFormType,
    validationSchema: Yup.object({
      emailOrUsername: Yup.string().required("Email or Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (data: SignInFormType) => {
      const isUsernameUsed = await getAuthAPI().isUsernameUsed(
        data.emailOrUsername
      );
      const isEmailUsed = await getAuthAPI().isEmailUsed(data.emailOrUsername);

      if (!isUsernameUsed && !isEmailUsed) {
        formik.setErrors({
          emailOrUsername: "Email or username does not exist",
        });
      } else {
        onSubmit(data);
      }
    },
    validateOnChange: true,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Input
        id="emailOrUsername"
        placeholder="e.g. fifa or hello@fifa.com"
        error={formik.errors.emailOrUsername}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.emailOrUsername}
      />
      <Spacer y={1.5} />
      <Input
        id="password"
        placeholder="e.g. myPassword"
        type="password"
        error={formik.errors.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      <Spacer y={1.5} />
      <StyledFormSubmitButton
        type="submit"
        css={{
          w: "100%",
        }}
        shadow
        size="lg"
        disabled={
          formik.values.emailOrUsername === undefined ||
          formik.errors.emailOrUsername !== undefined ||
          formik.values.password === undefined ||
          formik.errors.password !== undefined
        }
      >
        Continue
      </StyledFormSubmitButton>
    </StyledForm>
  );
};
