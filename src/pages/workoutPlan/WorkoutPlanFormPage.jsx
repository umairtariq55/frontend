import React, { useEffect, useState } from "react";
import WorkoutPlanForm from "../../components/workoutplan-section/WorkoutPlanForm";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const WorkoutPlanFormPage = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Box sx={{ position: "absolute", top: 0, left: 5 }}>
        <NavLink to={"/workout-plans"}>
          <Typography
            color={"white"}
            fontFamily={"Comme, sans-serif"}
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize:
                windowWidth < 1100 && windowHeight > 1000
                  ? "2vh"
                  : windowWidth < 1000
                  ? "1.2rem"
                  : "1.7vw",
            }}
          >
            <KeyboardDoubleArrowLeftIcon /> Back
          </Typography>
        </NavLink>
      </Box>
      <WorkoutPlanForm />
    </>
  );
};

export default WorkoutPlanFormPage;
