import React from "react";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";

function Child({ name, remove }) {
  return <Chip label={name} onDelete={() => remove(name)} color="secondary" />;
}

Child.propTypes = {
  name: PropTypes.string.isRequired,
  remove: PropTypes.func
};

export default Child;
