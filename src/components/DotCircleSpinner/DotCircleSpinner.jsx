import React from 'react';

const DotCircleSpinner = ({ isLoading, onClick }) => {
    const bounceKeyframes = `
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  `;

    const generateDotsCircle = (n, radius, offset, i) => {
        if (i <= n) {
            const angle = (i * 360) / n;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            const blur = 0;
            const multiplier = ((i + offset * n) % n) / n / 2;

            return {
                boxShadow: `${x}em ${y}em ${blur} ${multiplier * -1}em`,
            };
        }
        return {};
    };

    const generateDotsCircleKeyframes = (n, radius, i) => {
        let keyframes = '';

        if (i <= n) {
            keyframes += generateDotsCircleKeyframes(n, radius, i + 1);

            const percentage = (i / n) * 100;

            keyframes += `
        ${percentage}% {
          ${generateDotsCircle(n, radius, i / n, i).boxShadow}
        }
      `;
        }

        return keyframes;
    };

    const dotsCircleRotationKeyframes = generateDotsCircleKeyframes(8, 2, 0);

    const wrapperStyle = {
        display: 'inline-block',
        height: '1em',
        width: '1em',
        lineHeight: '1',
        verticalAlign: 'middle',
        borderRadius: '1em',
        transition: 'all 150ms linear 0s',
        transform: 'scale(0)',
        opacity: '0',
    };

    const loadingStyle = {
        transform: 'scale(0.25)',
        opacity: '1',
        animation: `1.5s linear 150ms normal infinite forwards running ${bounceKeyframes}`,
    };

    return (
        <div style={{ ...wrapperStyle, ...(isLoading ? loadingStyle : {}) }} className={isLoading ? 'loading' : ''} onClick={onClick}>
            <h1>Inline spinner</h1>
            <span className="dots-circle-spinner"></span>
            <style>
                {`
          .dots-circle-spinner {
            ${dotsCircleRotationKeyframes}
          }
        `}
            </style>
        </div>
    );
};

export default DotCircleSpinner;
