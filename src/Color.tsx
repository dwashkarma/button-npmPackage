export const colorVariant = (color: string | undefined) => {
  switch (color) {
    case "primary":
      return { backgroundColor: "#3B71CA", color: "white" };

    case "secondary":
      return { backgroundColor: "#9FA6B2", color: "white" };
    case "success":
      return { backgroundColor: "green", color: "white" };
    case "danger":
      return { backgroundColor: "#e74c3c", color: "white" };

    default:
      return { backgroundColor: "transparent", color: "white" };
  }
};
