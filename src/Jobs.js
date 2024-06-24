import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://ag-temp.azurewebsites.net/jobs', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div>
            <h2>Available Jobs</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <p>Customer: {job.customerName}</p>
                        <p>Address: {job.address}</p>
                        <p>Phone: {job.phone}</p>
                        <p>Description: {job.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Jobs;
