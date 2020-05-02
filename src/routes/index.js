import { Signup, Signin } from "pages";

export const Routes = [
  {
    name: "Sign-ip",
    component: Signin,
    exact: true,
    path: "/sign-in",
  },
  {
    name: "Sign-up",
    component: Signup,
    exact: true,
    path: "/sign-up",
  },
];
