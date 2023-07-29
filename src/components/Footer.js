import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";
import { Icon } from '@iconify/react';

const FooterContainer = styled("footer")({
  backgroundColor: "#212121",
  color: "#ffffff",
  padding: "16px",
  textAlign: "center",
});

const FooterText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const Footer = () => {
  return (
    <> 
    <footer class="footer">
  <div class="footer-content">
    <div className="footer-flex"> 
    <div class="footer-logo">Flex Fit</div>
    <nav class="footer-nav">
      <a href="#">Home</a>
      <a href="#">Exercises</a>
      <a href="#">Recipes</a>
      <a href="#">Nutrition</a>
    </nav>
    </div>
    <div className="footer-flex-two"> 
    <p class="footer-text">Stay fit and healthy with Flex Fit. Find the best exercises, recipes, and nutritional information for your fitness journey.</p>
    <div class="footer-social">
      <a href="#"><Icon icon="mdi:instagram" /></a>
      <a href="#"><Icon icon="ic:baseline-facebook" /></a>
      <a href="#"><Icon icon="mdi:twitter" /></a>
    </div>
    </div>

  </div>
</footer>

    </>
  );
};

export default Footer;
