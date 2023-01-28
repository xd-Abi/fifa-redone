import { Spacer, Text } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/input";
import { StyledForm, StyledFormSubmitButton } from "../styled";
import { SignUpSubtitle } from "../utils";

type EmailFormType = {
  email: string;
};

type Props = {
  initialValues: EmailFormType;
  onSubmit: (data: EmailFormType) => void;
  onBack: (data: EmailFormType) => void;
};

const SignUpEmailStep = ({ initialValues, onSubmit, onBack }: Props) => {
  const formik = useFormik<EmailFormType>({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Email is not valid"),
    }),
    onSubmit: onSubmit,
    validateOnChange: true,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <SignUpSubtitle
        subtitle="Enter Email"
        onBackButtonPress={() => onBack(formik.values)}
      />
      <Spacer />
      <Input
        id="email"
        placeholder="e.g. hello@fifa.com"
        error={formik.errors.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
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
          formik.values.email === undefined || formik.errors.email !== undefined
        }
      >
        Continue
      </StyledFormSubmitButton>
    </StyledForm>
  );
};

export default SignUpEmailStep;
