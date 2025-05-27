'use client';

import React from 'react';
import Navigation from '../components/Navigation-bar';
import shared from '../styles/project.module.css';
import styles from '../styles/shaf.module.css';
import { useEffect } from 'react';

const ReelnotesPage: React.FC = () => {
    return (
        <div>

            <Navigation />
            <div className={`${shared.background} ${styles.background}`}>
            </div>


        </div>
    );
};

export default ReelnotesPage;
