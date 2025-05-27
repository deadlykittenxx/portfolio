'use client';

// components/StarDivider.tsx
import React, { useEffect, useState } from 'react';
import './StarDivider.css';

const StarDivider: React.FC = () => {
    const [stars, setStars] = useState('');

    useEffect(() => {
        const star = '★ ';
        const repeatCount = Math.ceil(window.innerWidth / 16); // 대략 한 글자당 16px
        setStars(star.repeat(repeatCount));
    }, []);

    return <div className="star-divider">{stars}</div>;
};

export default StarDivider;
