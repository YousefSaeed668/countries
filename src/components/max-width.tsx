interface MaxWidhtProps {
  children: React.ReactNode;
  className?: string;
}

export const MaxWidth = ({ children, className }: MaxWidhtProps) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-4 ${className}`}>{children}</div>
  );
};
