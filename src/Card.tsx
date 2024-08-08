import { Box } from "@mui/material";

function Card() {
  return (
    <>
      <Box sx={{ height: 150 }}>
        <Box
          component="img"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="The house from the offer."
          src="https://full.life/media/magefan_blog/Assassin_s_Creed_Shadows.jpg"
        />
      </Box>
    </>
  );
}

export default Card;
