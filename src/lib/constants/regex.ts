export const emailRegex = new RegExp(
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}$/,
);

export const passwordRegex = new RegExp(
  /^(?=.*[a-zA-Z])(?=.*[~`!@#$%^&*()-])(?=.*[0-9]).{8,}$/,
);

export const numberRegex = new RegExp(/\D/g);

export const phoneRegex = new RegExp(/^010\d{8}$/);
