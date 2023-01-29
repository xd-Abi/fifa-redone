import { Key } from "react";
import { Col, Dropdown, Row, Spacer, Text } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../input";
import { StyledForm, StyledFormSubmitButton } from "./styled";
import { Gender } from "@/lib/models";
import { useUser } from "@/hooks";
import { UserUpdateInterface } from "@/lib/api/endpoints/me/types";

type Props = {
  onSubmit: (data: UserUpdateInterface) => void;
};

export const ProfileForm = ({ onSubmit }: Props) => {
  const { user } = useUser();

  const formik = useFormik<UserUpdateInterface>({
    initialValues: {
      ...user,
    } as UserUpdateInterface,
    validationSchema: Yup.object({
      firstname: Yup.string().required("Firstname is required"),
      lastname: Yup.string().required("Lastname is required"),
      birthdate: Yup.date()
        .required("Birthdate is required")
        .max(
          new Date(Date.now() - 567648000000),
          "You must be at least 18 years"
        ),
      gender: Yup.mixed<Gender>()
        .oneOf(Object.values(Gender))
        .required("Gender is required"),
    }),
    onSubmit: onSubmit,
    validateOnChange: true,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Input
        id="firstname"
        placeholder="e.g. David"
        error={formik.errors.firstname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstname}
      />
      <Spacer y={1.5} />
      <Input
        id="lastname"
        placeholder="e.g. Beckham"
        error={formik.errors.lastname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
      />
      <Spacer y={1.5} />
      <Row>
        <Col css={{ w: "fit-content" }}>
          <Dropdown>
            <Dropdown.Button size="lg" flat>
              {formik.values.gender ?? "Gender"}
            </Dropdown.Button>
            <Dropdown.Menu
              id="gender"
              aria-label="Single selection actions"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={formik.values.gender}
              onSelectionChange={(e: "all" | Set<Key>) => {
                (e as Set<string>).forEach((value) =>
                  formik.setFieldValue("gender", value)
                );
              }}
            >
              <Dropdown.Item key={Gender.Male}>Male</Dropdown.Item>
              <Dropdown.Item key={Gender.Female}>Female</Dropdown.Item>
              <Dropdown.Item key={Gender.Other}>Other</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Spacer y={0.5} />
          <Text color="error">{formik.errors?.gender}</Text>
        </Col>
        <Col
          css={{
            pl: "$10",
          }}
        >
          <Input
            id="birthdate"
            placeholder="e.g. 20-01-2000"
            error={formik.errors.birthdate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthdate}
            type="date"
          />
        </Col>
      </Row>
      <Spacer y={1.5} />
      <StyledFormSubmitButton
        type="submit"
        css={{
          w: "100%",
        }}
        shadow
        size="lg"
      >
        Save Changes
      </StyledFormSubmitButton>
    </StyledForm>
  );
};

export default ProfileForm;
