import React from 'react'

export const Skeleton = () => (
    <div className="skeleton">
        <div className="skeleton__image"></div>
        <div className="skeleton__content">
            <div className="skeleton__line"></div>
            <div className="skeleton__line skeleton__line--md"></div>
            <div className="skeleton__line skeleton__line--sm"></div>
        </div>
    </div>
)
