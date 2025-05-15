import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem = ({ title, children, defaultOpen = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button 
        className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown 
          className={cn("h-6 w-6 transition-transform duration-200", 
            isOpen && "transform rotate-180"
          )} 
        />
      </button>
      <div 
        className={cn(
          "px-6 pb-4 transition-all duration-300 ease-in-out",
          isOpen ? "block" : "hidden"
        )}
      >
        {children}
      </div>
    </div>
  );
};

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export const Accordion = ({ children, className }: AccordionProps) => {
  return (
    <div className={cn("max-w-3xl mx-auto", className)}>
      {children}
    </div>
  );
};
