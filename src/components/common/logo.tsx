import React from "react";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Logo: React.FC<LogoProps> = (props) => {
  return <img src="/logo.jpg" alt="Logo" {...props} />;
};

export default Logo;
