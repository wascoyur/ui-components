import React, {ReactNode} from 'react';
import './container.scss'
export const Container = ({ children }: { children: ReactNode }) => {
    return (
        <span className='container'>
      {children}
    </span>
    );
};

