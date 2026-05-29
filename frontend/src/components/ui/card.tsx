import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-md ${className}`}>
      {children}
    </div>
  );
};

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};