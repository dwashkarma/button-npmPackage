export const colorVariant = (bgColor: string | undefined) => {
  switch (bgColor) {
    case "primary":
      return { backgroundColor: "#3B71CA", color: "black" };

    case "secondary":
      return { backgroundColor: "#9FA6B2", color: "black" };
    case "success":
      return { backgroundColor: "green", color: "white" };
    case "danger":
      return { backgroundColor: "#e74c3c", color: "white" };

    default:
      return { backgroundColor: "transparent", color: "black" };
  }
};
