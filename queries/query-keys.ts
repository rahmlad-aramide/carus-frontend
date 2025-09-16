export const authKeys = {
  all: ["auth"] as const,
  user: () => [...authKeys.all, "user"] as const,
  login: () => [...authKeys.all, "login"] as const,
  register: () => [...authKeys.all, "register"] as const,
  forgotPassword: () => [...authKeys.all, "forgotPassword"] as const,
  verifyOtp: () => [...authKeys.all, "verifyOtp"] as const,
  confirmForgotPassword: () =>
    [...authKeys.all, "confirmForgotPassword"] as const,
  changePassword: () => [...authKeys.all, "changePassword"] as const,
  resendOtp: () => [...authKeys.all, "resendOtp"] as const,
  completeGoogleSignup: () =>
    [...authKeys.all, "completeGoogleSignup"] as const,
};

export const transactionKeys = {
  all: ["transaction"] as const,
};

export const profileKeys = {
  all: ["profile"] as const,
  edit: () => [...profileKeys.all, "edit"] as const,
};

export const scheduleKeys = {
  all: ["schedule"] as const,
  pickup: () => [...scheduleKeys.all, "pickup"] as const,
};
