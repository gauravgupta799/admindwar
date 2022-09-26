import React from "react";
import { Box } from "@material-ui/core";
import { PageHeader } from "../Common/CommonComponent";
import { Typography } from "@material-ui/core";
import { useStyles } from "./BodyStyles";

export default function Link() {
  const classes = useStyles();
  return (
    <Box className={classes.section} >
      <PageHeader label='Link1' pageTitle='Link Post' />
      <Typography color='textSecondary'>

      </Typography>
    </Box>
  );
}
