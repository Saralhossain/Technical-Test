import { FormikProps, useFormik } from "formik";
import { validationSchema } from "./validationSchema";
import { Subscription } from "../../utils/types";
import useFiltersConsumer from "../../hooks/useFiltersConsumer";
const useForm = () => {
  const { filters } = useFiltersConsumer();

  const formik: FormikProps<Subscription> = useFormik<Subscription>({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: filters.gender,
      dob: null,
      profession: filters.profession,
      shoesize: filters.shoesize,
      hairColor: filters.hairColor,
      hairLength: filters.hairLength,
      waist: filters.waist,
      height: filters.height,
      weight: filters.weight,
      castings: filters.castings,
      picture: undefined,
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {

    },
  });
  return formik;
};

export default useForm;
