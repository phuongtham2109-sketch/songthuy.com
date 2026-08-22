import React from 'react';
import logoImg from '../assets/images/song_thuy_logo_1787387177995.jpg';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'symbol' | 'compact';
  inverted?: boolean;
}

export const SongThuyLogo: React.FC<LogoProps> = ({
  className = 'h-10 sm:h-12 w-auto',
  variant = 'compact',
  inverted = false,
}) => {
  if (variant === 'symbol') {
    return (
      <div className={`relative overflow-hidden rounded-xs shrink-0 flex items-center justify-center ${className}`}>
        <img
          src={logoImg}
          alt="Song Thủy Logo"
          className="w-full h-full object-contain mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img
          src={logoImg}
          alt="Song Thủy Webbing Tape & Draw Cord"
          className={`h-12 sm:h-14 w-auto object-contain rounded-xs ${inverted ? 'brightness-110 contrast-125' : 'mix-blend-multiply'}`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Default compact header view
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoImg}
        alt="Song Thủy Logo"
        className="h-10 sm:h-12 w-10 sm:w-12 object-contain rounded-xs shrink-0 bg-white p-0.5 border border-[#e2e2e5] shadow-xs"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
