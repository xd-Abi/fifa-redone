import Input from "@/components/input";
import { Spacer } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Subtitle } from "../../primitives";
import { StyledForm, StyledFormSubmitButton } from "../styled";

type UsernameFormType = {
  username: string;
};

type Props = {
  initialValues: UsernameFormType;
  onSubmit: (data: UsernameFormType) => void;
};

const SignUpUsernameStep = ({ initialValues, onSubmit }: Props) => {
  const formik = useFormik<UsernameFormType>({
    initialValues,
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
    }),
    onSubmit: onSubmit,
    validateOnChange: true,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Subtitle>Choose Username</Subtitle>
      <Spacer />
      <Input
        id="username"
        placeholder="e.g. fifa"
        error={formik.errors.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
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
          formik.values.username === undefined ||
          formik.errors.username !== undefined
        }
      >
        Continue
      </StyledFormSubmitButton>
    </StyledForm>
  );
};

export default SignUpUsernameStep;
