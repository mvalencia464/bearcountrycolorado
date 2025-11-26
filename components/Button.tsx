import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  asLink?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  asLink = false,
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-bear-accent hover:bg-orange-700 focus:ring-bear-accent",
    secondary: "border-transparent text-bear-900 bg-white hover:bg-gray-50 focus:ring-gray-500",
    outline: "border-white text-white bg-transparent hover:bg-white/10 focus:ring-white"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};