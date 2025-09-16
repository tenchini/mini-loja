const sharedTokens = {
    spacing: {
        4: '1rem',
        6: '1.5rem',
    },
    radius: '8px',
}

export const lightTheme = {
    ...sharedTokens,
    colors: {
        text: '#1a202c',
        background: '#f7fafc',
        cardBg: '#ffffff',
        primary: '#3182ce',
        primaryHover: '#2b6cb0',
        border: '#e2e8f0',
    },
    shadows: {
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
}

export const darkTheme = {
    ...sharedTokens,
    colors: {
        text: '#e2e8f0',
        background: '#1a202c',
        cardBg: '#2d3748',
        primary: '#63b3ed',
        primaryHover: '#4299e1',
        border: '#4a5568',
    },
    shadows: {
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
    },
}
