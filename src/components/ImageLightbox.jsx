import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const ImageLightbox = ({ isOpen, onClose, imageUrl, altText }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px',
        backdropFilter: 'blur(5px)',
        cursor: 'zoom-out'
      }}
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '30px',
          right: '30px',
          background: 'rgba(255, 255, 255, 0.1)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 10000
        }}
        onMouseOver={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
        onMouseOut={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
      >
        <X size={30} />
      </button>

      <div 
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        <img 
          src={imageUrl} 
          alt={altText || 'Expanded view'} 
          style={{
            maxWidth: '95vw',
            maxHeight: '85vh',
            objectFit: 'contain',
            borderRadius: '8px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            cursor: 'default'
          }}
        />
        {altText && (
          <div style={{
            position: 'absolute',
            bottom: '-40px',
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 500,
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}>
            {altText}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;
