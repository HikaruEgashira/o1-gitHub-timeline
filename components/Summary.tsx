import type React from 'react';

interface SummaryProps {
    summary: { [year: string]: number };
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
    const sortedYears = Object.keys(summary).sort();

    return (
        <div style={styles.summary}>
            <h2>Repository Summary by Year</h2>
            <ul style={styles.list}>
                {sortedYears.map((year) => (
                    <li key={year} style={styles.listItem}>
                        <span style={styles.year}>{year}</span>: {summary[year]} repos
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    summary: {
        margin: '2rem 0',
        padding: '1rem',
        background: '#eef6ff',
        borderRadius: '6px',
    },
    list: {
        listStyleType: 'none',
        paddingLeft: '0',
    },
    listItem: {
        padding: '0.5rem 0',
        borderBottom: '1px solid #ddd',
    },
    year: {
        fontWeight: 'bold',
        marginRight: '0.5rem',
    },
};

export default Summary;
