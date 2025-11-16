import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gray' | 'primary' | 'gradient';
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  variant = 'default',
}) => {
  const variantStyles = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
    gradient: 'bg-gradient-to-b from-white to-gray-50',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${variantStyles[variant]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  const alignment = centered ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};
