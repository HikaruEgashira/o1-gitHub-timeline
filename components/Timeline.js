import React from 'react';

const Timeline = ({ repos }) => {
    return (
        <div style={styles.timeline}>
            {repos.map((repo) => (
                <div key={repo.id} style={styles.item}>
                    <div style={styles.content}>
                        <h3 style={styles.repoName}>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                                {repo.name}
                            </a>
                        </h3>
                        <span style={styles.date}>
                            {new Date(repo.created_at).toLocaleDateString()}
                        </span>
                        <p style={styles.description}>{repo.description || 'No description'}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles = {
    timeline: {
        position: 'relative',
        padding: '1rem 0',
        marginLeft: '20px',
        borderLeft: '2px solid #0366d6',
    },
    item: {
        position: 'relative',
        marginBottom: '1.5rem',
    },
    content: {
        padding: '0.5rem 1rem',
        background: '#f9f9f9',
        borderRadius: '6px',
        position: 'relative',
    },
    repoName: {
        margin: '0 0 0.5rem 0',
        fontSize: '1.2rem',
        color: '#0366d6',
    },
    link: {
        textDecoration: 'none',
        color: '#0366d6',
    },
    date: {
        fontSize: '0.9rem',
        color: '#555',
    },
    description: {
        marginTop: '0.5rem',
        color: '#333',
    },
};

export default Timeline;
