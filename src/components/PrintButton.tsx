import { Printer } from 'lucide-react';

interface PrintButtonProps {
  label?: string;
  className?: string;
}

export default function PrintButton({ label = "Print CV", className = "" }: PrintButtonProps) {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      const isPrintPage = window.location.pathname.replace(/\/$/, '') === '/print';
      if (isPrintPage) {
        window.print();
      } else {
        const newWindow = window.open('/print?auto=true', '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          window.location.href = '/print?auto=true';
        }
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className={`no-print inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 shadow-xs transition-colors cursor-pointer ${className}`}
    >
      <Printer className="w-4 h-4 text-indigo-500" />
      <span>{label}</span>
    </button>
  );
}
