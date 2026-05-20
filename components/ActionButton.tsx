'use client';

import { useRouter } from 'next/navigation';

type ActionButtonProps = {
  children: React.ReactNode;
  message?: string;
  redirectTo?: string;
  print?: boolean;
  className?: string;
};

export function ActionButton({ children, message = '操作已完成', redirectTo, print, className = '' }: ActionButtonProps) {
  const router = useRouter();

  function handleClick() {
    if (print) {
      window.print();
      return;
    }
    window.alert(message);
    if (redirectTo) router.push(redirectTo);
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
