import { useState } from "react";
import { ErrorMessage, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "service/API/axios";
import { getColor } from "utils/formikColors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authSelectors from "redux/auth/authSelectors";
import sprite from "../../../images/sprite.svg";
import * as Yup from "yup";
import * as authOperation from "../../../redux/auth/authOperation";

import {
  UserForm,
  FlagInput,
  InputWrapper,
  NameInput,
  NameLabel,
  UserAvatarWrapper,
  UserIcon,
  UserSvgWrapper,
  BtnWrapper,
  SaveChangesBtn,
} from "./HeaderUserForm.styled.js";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const EditNameSchema = Yup.object().shape({
  picture: Yup.mixed().test("type", "Only PNG, JPEG and JPG formats are supported", (value) => {
    if (!value || (value && SUPPORTED_FORMATS.includes(value?.type))) {
      return;
    } else {
      toast.error("Wrong file type. Please, choose different image type", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }),

  name: Yup.string()
    .min(1, "Name must contain at least 2 letters")
    .max(16, "Name must contain maximum 16 letters")
    .matches(
      /^[ыЫа-яА-Я1-9a-zA-ZіІєЄґҐїЇ]+(([' -][ыЫа-яА-Я1-9a-zA-ZіІєЄґҐїЇ])?[ыЫа-яА-Я1-9a-zA-ZіІєЄґҐїЇ]*)*$/,
      "Name must contain only letters"
    )

    .required("Name is required"),
});

export const UserFormAssembly = ({ avatarUrl, closeModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUserData);
  const [path, setPath] = useState(avatarUrl);
  const [name, setName] = useState(user.name);
  const [url, setUrl] = useState(user.avatarUrl);

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name.trim());
    formData.append("picture", values.picture);
    formData.append("upload_preset", "alex_preset");
    try {
      const response = await axiosInstance.patch("/auth/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(authOperation.fetchCurrentUser());
      const newData = response.data;
      const newAvatarUrl = response.updatedAvatarUrl;
      const newName = newData.name;
      setName(newName);
      setUrl(response.updatedAvatarUrl);
      setPath(newAvatarUrl);
    } catch (error) {
      console.error("Error:", error.message);
      console.log("Error Response:", error.response);
    }

    closeModal();
  };

  return (
    <Formik
      initialValues={{
        picture: url,
        name: name,
      }}
      validationSchema={EditNameSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {(props) => (
        <UserForm onSubmit={props.handleSubmit}>
          <UserAvatarWrapper>
            <label htmlFor="picture" id="labelFile">
              {path ? (
                <UserSvgWrapper>
                  <img src={path} alt="user_picture" />
                </UserSvgWrapper>
              ) : (
                <UserSvgWrapper>
                  <svg>
                    <use href={sprite + `#user`} />
                  </svg>
                </UserSvgWrapper>
              )}
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              onBlur={() => {
                props.setTouched({
                  picture: true,
                });
              }}
              onChange={(event) => {
                if (event.target.files[0]) {
                  if (SUPPORTED_FORMATS.includes(event.target.files[0].type)) {
                    setPath(window.URL.createObjectURL(event.target.files[0]));
                    props.setFieldValue("picture", event.target.files[0]);
                  }
                  props.setFieldValue("picture", event.target.files[0]);
                }
              }}
            />
            <ToastContainer />
          </UserAvatarWrapper>
          {props.errors.picture && props.touched.picture ? (
            <ErrorMessage location="file">{props.errors.picture}</ErrorMessage>
          ) : null}

          <InputWrapper>
            <NameLabel htmlFor="name" id="labelName">
              <NameInput
                type="text"
                name="name"
                id="name"
                onBlur={() => {
                  props.setTouched({
                    name: true,
                  });
                }}
                onChange={(event) => {
                  props.setTouched({
                    name: true,
                  });
                  props.setFieldValue("name", event.target.value);
                }}
                color={getColor(props.errors.name, props.values.name, "#C4C4C4")}
              />
              <UserIcon stroke={getColor(props.errors.name, props.values.name, "#C4C4C4")}>
                <use href={sprite + `#user`} />
              </UserIcon>
              {props.touched.name && props.values.name ? (
                <FlagInput>
                  <use href={`${sprite}${getColor(props.errors.name, props.values.name)}`}></use>
                </FlagInput>
              ) : (
                props.values.name && (
                  <BtnWrapper type="button" onClick={() => props.setFieldValue("name", "")}>
                    <svg>
                      <use href={sprite + `#edit`} />
                    </svg>
                  </BtnWrapper>
                )
              )}
            </NameLabel>
            {props.errors.name && props.touched.name ? <ErrorMessage>{props.errors.name}</ErrorMessage> : null}
            <SaveChangesBtn
              type="submit"
              disabled={
                !(
                  (props.touched.name && props.values.name && !props.errors.name) ||
                  (props.touched.picture && props.values.picture && !props.errors.picture)
                )
              }
            >
              Save changes
            </SaveChangesBtn>
          </InputWrapper>
        </UserForm>
      )}
    </Formik>
  );
};
