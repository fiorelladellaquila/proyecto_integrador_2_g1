import * as yup from "yup";

export const schemaAddress = yup.object({
    address1: yup.string().required("Este campo es requerido"),
    address2: yup.string().required("Este campo es requerido"),
    city: yup.string().required("Este campo es requerido"),
    state: yup.string().required("Este campo es requerido"),
    zipCode: yup.string().required("Este campo es requerido"),
})

export const schemaCustomer = yup.object({
    name: yup.string().required("Este campo es requerido").min(2, "Mínimo 2 caracteres"),
    lastname: yup.string().required("Este campo es requerido").min(2, "Mínimo 2 caracteres"),
    email: yup.string().email("El correo no es válido").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido").required("Este campo es requerido")
})

export const schemaCard = yup.object({
    number: yup.string().required("Este campo es requerido"),
    cvc: yup.string().required("Este campo es requerido"),
    expDate: yup.string().required("Este campo es requerido"),
    nameOnCard: yup.string().required("Este campo es requerido"),
})