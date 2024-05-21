import { Colors } from "../assets/colors/colors";
import {
  dashboardIcon,
  nativeLanguageIcon,
  learningLanguageIcon,
  wordsIcon,
  categoryIcon,
  userIcon,
  feedbackIcon,
  notificationIcon,
  filesIcon,
} from "./svgs-data";

export const customSideBarData = [
  {
    id: 1,
    icon: dashboardIcon,
    title: "DASHBOARD",
    color: Colors.BLUE,
    path: "/dashboard",
  },
  {
    id: 2,
    icon: nativeLanguageIcon,
    title: "NATIVE_LANGUAGE",
    color: Colors.PURPLE,
    path: "/native-language",
  },
  {
    id: 3,
    icon: learningLanguageIcon,
    title: "LEARNING_LANGUAGE",
    color: Colors.ORANGE,
    path: "/learning-language",
  },
  {
    id: 4,
    icon: wordsIcon,
    title: "WORDS",
    color: Colors.BLUE,
    path: "/words",
  },
  {
    id: 5,
    icon: categoryIcon,
    title: "CATEGORY",
    color: Colors.GREEN,
    path: "/category",
  },
  {
    id: 6,
    icon: userIcon,
    title: "USER",
    color: Colors.YELLOW,
    path: "/user",
  },
  {
    id: 7,
    icon: feedbackIcon,
    title: "FEEDBACK",
    color: Colors.PURPLE,
    path: "/feedback",
  },
  {
    id: 8,
    icon: notificationIcon,
    title: "NOTIFICATION",
    color: Colors.ORANGE,
    path: "/notification",
  },
  {
    id: 9,
    icon: filesIcon,
    title: "FILES",
    color: Colors.GREEN,
    path: "/files",
  },
];
