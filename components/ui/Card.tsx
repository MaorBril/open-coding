import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'highlighted' | 'bordered';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
}) => {
  const baseStyles = 'rounded-3xl overflow-hidden transition-all duration-300';

  const variantStyles = {
    default: 'bg-white shadow-xl border border-gray-100/50',
    highlighted: 'bg-gradient-to-br from-primary-50 via-white to-accent-50 shadow-2xl border border-primary-100/50',
    bordered: 'bg-white/90 backdrop-blur-sm border-2 border-gray-200 shadow-lg',
  };

  const hoverStyles = hover ? 'hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 cursor-pointer' : '';

  const classes = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`;

  return <div className={classes}>{children}</div>;
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return <div className={`px-8 py-6 border-b-2 border-gray-100 bg-gradient-to-r from-gray-50/50 to-transparent ${className}`}>{children}</div>;
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return <div className={`px-8 py-6 ${className}`}>{children}</div>;
};
