'use client';

import React from 'react';

interface ContactTriggerButtonProps {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

export function ContactTriggerButton({
  children,
  className,
  'aria-label': ariaLabel,
}: ContactTriggerButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-contact'));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
