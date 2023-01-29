import { Spacer, Text } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/input";
import { StyledForm, StyledFormSubmitButton } from "../styled";
import { SignUpSubtitle } from "../utils";

type EmailFormType = {
  password: string;
  confirmPassword?: string;
};

type Props = {
  initialValues: EmailFormType;
  onSubmit: (data: EmailFormType) => void;
  onBack: () => void;
};

const SignUpPasswordStep = ({ initialValues, onSubmit, onBack }: Props) => {
  const formik = useFormik<EmailFormType>({
    initialValues,
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
      confirmPassword: Yup.string()
        .required("Confirm your password")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: onSubmit,
    validateOnChange: true,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <SignUpSubtitle
        subtitle="Keep it secret"
        onBackButtonPress={() => onBack()}
      />
      <Spacer />
      <Input
        id="password"
        placeholder="e.g. myPassword"
        error={formik.errors.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        type="password"
      />
      <Spacer y={1.5} />
      <Input
        id="confirmPassword"
        placeholder="Confirm Password"
        error={formik.errors.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        type="password"
      />
      <Spacer y={1.5} />
      <StyledFormSubmitButton
        type="submit"
        css={{
          w: "100%",
        }}
        shadow
        size="lg"
      >
        Continue
      </StyledFormSubmitButton>
    </StyledForm>
  );
};

export default SignUpPasswordStep;
