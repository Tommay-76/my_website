import React from "react";
import Chip from "@mui/material/Chip";

function Child({ name, remove }) {
  return <Chip label={name} onDelete={() => remove(name)} color="secondary" />;
}

export default Child;
