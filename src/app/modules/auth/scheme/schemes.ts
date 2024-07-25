import * as Yup from 'yup';

// Schema para el inicio de sesión
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Formato de email incorrecto')
    .min(3, 'Mínimo 3 símbolos')
    .max(50, 'Máximo 50 símbolos')
    .required('El email es requerido'),
  password: Yup.string()
    .min(3, 'Mínimo 3 símbolos')
    .max(50, 'Máximo 50 símbolos')
    .required('La contraseña es requerida'),
});

// Schema para el registro
export const registrationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(3, 'Mínimo 3 símbolos')
    .max(50, 'Máximo 50 símbolos')
    .required('El nombre completo es requerido'),

  countryCode: Yup.string()
    .matches(/^\+\d{1,3}$/, 'El indicativo debe empezar con "+" seguido de 1 a 3 dígitos')
    .required('El indicativo del país es requerido'),

  mobil: Yup.string()
    .matches(/^[0-9]+$/, 'El móvil debe ser un número')
    .min(10, 'El móvil debe tener al menos 10 dígitos')
    .max(15, 'El móvil no debe exceder los 15 dígitos')
    .required('El móvil es requerido'),

  email: Yup.string()
    .email('Formato de email incorrecto')
    .min(3, 'Mínimo 3 símbolos')
    .max(50, 'Máximo 50 símbolos')
    .required('El email es requerido'),

  lastname: Yup.string()
    .min(3, 'Mínimo 3 símbolos')
    .max(50, 'Máximo 50 símbolos')
    .required('El apellido es requerido'),

  password: Yup.string()
    .min(3, 'Mínimo 3 símbolos')
    .max(50, 'Máximo 50 símbolos')
    .required('La contraseña es requerida'),

  changepassword: Yup.string()
    .min(3, 'Mínimo 3 símbolos')
    .max(50, 'Máximo 50 símbolos')
    .required('La confirmación de la contraseña es requerida')
    .oneOf([Yup.ref('password')], 'La contraseña y la confirmación no coinciden'),

  acceptTerms: Yup.bool().oneOf([true], 'Debes aceptar los términos y condiciones'),
});
