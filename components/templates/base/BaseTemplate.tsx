import React from 'react';
import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <h1 className={styles.container}>{sampleTextProp}</h1>;
};

export default BaseTemplate;
