import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import useUser from "../../common/context/useUser";
import { Blues, neutral } from "../../common/config/colors";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { userDetail } = useUser();
  return (
    <Box
      display="flex"
      flexDirection="column"
      borderRadius="8px"
      rowGap={4}
      maxWidth="514px"
      width="100%"
      sx={{
        bgcolor: Blues["A300"],
        px: 6,
        py: 4,
        border: "1px solid #3C3E42",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h3"
          sx={{
            color: neutral["A500"],
            fontWeight: 600,
            fontSize: { xs: 18, lg: 22 },
          }}
        >
          Posted Projects
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: neutral["A500"],
            fontWeight: 500,
            cursor: "pointer",
            textDecoration: "underline",
            fontSize: { xs: 12, lg: 14 },
          }}
        >
          See All
        </Typography>
      </Box>
      <Divider
        sx={{
          bgcolor: "#475467",
        }}
      />

      <Box display="flex" flexDirection="column" alignItems="center" rowGap={2}>
        {userDetail?.Posted_projects?.map((project, index) => (
          <ProjectCard
            key={index}
            name={project?.name}
            status={project?.status}
            colour={project?.colour}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
