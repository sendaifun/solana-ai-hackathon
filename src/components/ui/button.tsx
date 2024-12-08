import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export const Button = ({
  href,
  onClick,
  children,
  className = '',
  target,
  rel,
}: ButtonProps) => {
  const baseStyles =
    'relative rounded-md inline-flex items-center gap-3 px-3 py-1.5 md:px-6 md:py-3 bg-white border border-white/50 transition-all duration-200 group';

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, target, rel } : { onClick };

  return (
    <Component
      {...props}
      className={`${baseStyles} ${className}`}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </Component>
  );
};
