import { useState } from "react";
import { useMediaRules } from "hooks/MediaRules";
import { nanoid } from "@reduxjs/toolkit";
import store from "store";

import { axiosInstance } from "service/API/axios";
import { scrollToTop } from "utils/scrollUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Title } from "components/Title/Title";
import { Loader } from "components/Loader/Loader";
import { AddRecipePopular } from "components/AddRecipePopular/AddRecipePopular";
import { AddRecipeMeta } from "components/AddRecipeMeta/AddRecipeMeta";
import { AddRecipeIngredients } from "components/AddRecipeIngredients/AddRecipeIngredients";
import { AddRecipeSubmit } from "components/AddRecipeSubmit/AddRecipeSubmit";

import { AddRecipeToastifyError } from "components/AddRecipeToastifyError/AddRecipeToastifyError";
import { FollowUs } from "components/FollowUs/FollowUs";

import { RecipeForm, MainWrapper, StyledSocialWrepper } from "./addRecipe.styled";
import { MainConteiner } from "./AddrecipeContainer/Container.styled";

const init = {
  instructions: "",
  title: "",
  description: "",
  category: "Breakfast",
  time: "30",
  unitValue: 100,
  qty: "g",
  path: "",
  thumb: "",
  preview: null,
  area: "",
};

const AddRecipe = () => {
  const { isDesktop, isMobile, isTablet } = useMediaRules();

  const [inputs, setInputs] = useState(() => {
    const inputs = store.get("userInputs");
    return inputs ? inputs : init;
  });

  const [file, setFile] = useState(null);

  const [userIngredients, setUserIngredients] = useState([]);

  const [path, setPath] = useState("");

  const [isLoading, setisLoading] = useState(false);

  const [ingrId, setIngrId] = useState([]);

  console.log(ingrId);
  console.log(userIngredients);

  const handleDecrement = () => {
    if (userIngredients.length < 0) return;
    setUserIngredients((prev) => [...prev.slice(0, prev.length - 1)]);
  };

  const handleIncrement = () => {
    setUserIngredients((prev) => [...prev, { id: nanoid(), unitValue: 100, qty: "g" }]);
  };

  const handleRemove = ({ currentTarget }) => {
    const newList = userIngredients.filter((el) => el.id !== currentTarget.id);
    setUserIngredients(newList);
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFile = ({ currentTarget }) => {
    const { files } = currentTarget;
    const [file] = files;
    if (!file || !file.type.includes("image")) {
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
      // setFile(null);
      setPath("");
      return;
    }
    setFile(file);
    setPath(URL.createObjectURL(file));
  };

  const resetForm = () => {
    setInputs(init);
    setUserIngredients([]);
    setIngrId([]);
    setFile(null);
    setPath("");
  };

  const handleSelect = (...arg) => {
    const [valueObj, nameObj] = arg;
    const { value } = valueObj;
    const { name } = nameObj;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleTtlChange = (selectedOption, { name }) => {
    const [key, id] = name.split(" ");

    setUserIngredients((prev) => {
      const index = prev.findIndex((el) => el.id === id);
      const item = { ...prev[index] };
      item[key] = selectedOption.value;
      item.ingredientId = selectedOption["data-id"];
      prev[index] = item;
      return [...prev];
    });
    setIngrId((prevIngrId) => [...prevIngrId, selectedOption["data-id"]]);
  };

  const handleQtyChange = (selectedOption, { name }) => {
    const [key, id] = name.split(" ");
    console.log(key);

    setUserIngredients((prev) => {
      const index = prev.findIndex((el) => el.id === id);
      const item = { ...prev[index] };
      item[key] = selectedOption.value;
      console.log(item[key]);
      prev[index] = item;
      return [...prev];
    });
  };
  const validateIndredients = () => {
    return userIngredients.every((i) => i.unitValue > 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    let { instructions, time, category, description, title } = inputs;
    let missingFields = [];

    if (!instructions || instructions.replace(/ +/, " ").trim().length < 50) {
      missingFields.push("Instructions");
    }

    if (!time) {
      missingFields.push("Time");
    }

    if (!category) {
      missingFields.push("Category");
    }

    if (!description.trim()) {
      missingFields.push("Description");
    }

    if (title.trim().length === 0) {
      missingFields.push("Title");
    }
    if (!file) {
      missingFields.push("File");
    }
    if (!userIngredients.length || !userIngredients.filter((i) => i.ttl).length) {
      missingFields.push("Ingredient");
    }
    if (!validateIndredients()) {
      missingFields.push("Your ingredient measurements are incorrect. Please add correct measurement ");
    }

    if (missingFields.length > 0) {
      toast.error(`Please fill out the following field(s): ${missingFields.join(", ")}`);
      return;
    }
    setisLoading(true);
    scrollToTop();
    //collect the values ​​of the ingredients in a separate array

    const ingredients = userIngredients
      .map((ing) => {
        return {
          ingredient: ing.ingredientId,
          measure: `${ing.unitValue} ${ing.qty}`,
        };
      })
      .filter((i) => i.ingredient); //remove empty selects

    formData.append("file", file);
    formData.append("upload_preset", "alex_preset");

    try {
      const response = await axiosInstance.post("/auth/picture", formData);

      const imageUrl = response.data.secure_url;
      instructions = instructions.replace(/ +/, " ").trim();

      const data = {
        instructions,
        time,
        category,
        description,
        title,
        ingredients,
        imageUrl,
        path: imageUrl,
        thumb: imageUrl,
        preview: imageUrl,
        area: "Kyiv",
      };

      const addRecipe = await axiosInstance.post("/own-recipes/add", data);
      if (addRecipe) {
        resetForm();
        toast.success("Recipe added successfully");
      }
      setisLoading(false);
    } catch (error) {
      toast.error(<AddRecipeToastifyError />);
      setisLoading(false);
    }
  };

  const handleUnitValue = ({ currentTarget }) => {
    const { id, value, name } = currentTarget;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    setUserIngredients((prev) => {
      const idx = prev.findIndex((el) => el.id === id);
      const updatedItem = { ...prev[idx], [name]: value };
      const updatedIngredients = [...prev.slice(0, idx), updatedItem, ...prev.slice(idx + 1)];
      return updatedIngredients;
    });
  };

  const theme = store.get("theme");

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <MainConteiner>
          <Title>Add recipe</Title>
          <MainWrapper isDesktop={isDesktop}>
            <RecipeForm onSubmit={handleSubmit} enctype="multipart/form-data" isMobile={isMobile} localTheme={theme}>
              <AddRecipeMeta
                path={path}
                inputs={inputs}
                file={file}
                isDesktop={isDesktop}
                isMobile={isMobile}
                handleFile={handleFile}
                handleChange={handleChange}
                handleSelect={handleSelect}
              />

              <AddRecipeIngredients
                counter={userIngredients.length}
                userIngredients={userIngredients}
                isMobile={isMobile}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                handleTtlChange={handleTtlChange}
                handleQtyChange={handleQtyChange}
                // handleUserIngredient={handleUserIngredient}
                handleUnitValue={handleUnitValue}
                handleRemove={handleRemove}
                localTheme={theme}
              />

              <AddRecipeSubmit inputs={inputs} handleChange={handleChange} localTheme={theme} />
              <ToastContainer />
            </RecipeForm>
            <div>
              <StyledSocialWrepper>
                <FollowUs text={"Folow Us"} />
              </StyledSocialWrepper>
              <AddRecipePopular isDesktop={isDesktop} isTablet={isTablet} localTheme={theme} />
            </div>
          </MainWrapper>
        </MainConteiner>
      )}
    </>
  );
};

export default AddRecipe;
