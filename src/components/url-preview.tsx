import React, { useState, useEffect } from "react";

interface UrlPreviewProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}

export const UrlPreview: React.FC<UrlPreviewProps> = ({ 
  children, 
  href, 
  className = "", 
  onClick 
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    setShowPreview(true);
    setPreviewPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (showPreview) {
      setPreviewPosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <>
      <div
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </div>
      
      {showPreview && (
        <div
          className="fixed z-[9999] bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg pointer-events-none"
          style={{
            left: `${Math.min(previewPosition.x + 10, window.innerWidth - 200)}px`,
            top: `${Math.max(previewPosition.y - 40, 10)}px`,
            maxWidth: '300px',
            wordBreak: 'break-all'
          }}
        >
          {window.location.origin}{href}
        </div>
      )}
    </>
  );
};

// Hook for managing URL preview at bottom of page
export const useUrlPreview = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const showPreview = (url: string) => setPreviewUrl(url);
  const hidePreview = () => setPreviewUrl(null);

  return { previewUrl, showPreview, hidePreview };
};

// Bottom page URL preview component
export const BottomUrlPreview: React.FC<{ url: string | null }> = ({ url }) => {
  if (!url) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white text-sm px-4 py-2 border-t border-gray-700">
      <div className="container mx-auto">
        {window.location.origin}{url}
      </div>
    </div>
  );
};
