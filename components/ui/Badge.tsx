import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-bold rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 border border-primary-300',
    secondary: 'bg-gradient-to-r from-accent-100 to-accent-200 text-accent-800 border border-accent-300',
    success: 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300',
    warning: 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border border-yellow-300',
    neutral: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border border-gray-300',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return <span className={classes}>{children}</span>;
};
