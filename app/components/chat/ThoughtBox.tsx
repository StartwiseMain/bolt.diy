import { useState, type PropsWithChildren } from 'react';

const ThoughtBox = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={`
        bg-wl-elements-background-depth-2
        shadow-md 
        rounded-lg 
        cursor-pointer 
        transition-all 
        duration-300
        ${isExpanded ? 'max-h-96' : 'max-h-13'}
        overflow-auto
        border border-wl-elements-borderColor
      `}
    >
      <div className="p-4 flex items-center gap-4 rounded-lg  text-wl-elements-textSecondary font-medium leading-5 text-sm  border border-wl-elements-borderColor">
        <div className="i-ph:brain-thin text-2xl" />
        <div className="div">
          <span> {title}</span>{' '}
          {!isExpanded && <span className="text-wl-elements-textTertiary"> - Click to expand</span>}
        </div>
      </div>
      <div
        className={`
        transition-opacity 
        duration-300
        p-4 
        rounded-lg 
        ${isExpanded ? 'opacity-100' : 'opacity-0'}
      `}
      >
        {children}
      </div>
    </div>
  );
};

export default ThoughtBox;
