import React from 'react'

export const Skeleton = () => (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
        <div className="aspect-square w-full animate-pulse bg-slate-200 dark:bg-slate-700"></div>
        <div className="p-4">
            <div className="mb-3 h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700"></div>
            <div className="mb-3 h-4 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-700"></div>
            <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200 dark:bg-slate-700"></div>
        </div>
    </div>
)
