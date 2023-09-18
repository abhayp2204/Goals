import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { firestore } from '../firebase';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Timeline() {
    const [timelineData, setTimelineData] = useState([]);

    useEffect(() => {
        // Fetch timeline data from Firestore and format it
        const fetchData = async () => {
            const timelineRef = firestore.collection('timeline');
            const snapshot = await timelineRef.get();

            const data = snapshot.docs.map(doc => ({
                timestamp: doc.data().completedAt.toDate(), // Convert timestamp to Date object
                cardName: doc.data().cardName,
            }));

            setTimelineData(data);
        };

        fetchData();
    }, []);

    // Prepare data for the line chart
    const chartData = {
        labels: timelineData.map(item => item.timestamp.toLocaleDateString()), // X-axis labels as dates
        datasets: [
            {
                label: 'Completed Cards',
                data: timelineData.map((item, index) => ({
                    x: index, // X-axis position
                    y: index + 1, // Y-axis position (assuming each card is counted once)
                })),
                borderColor: 'rgb(0, 128, 255)', // Line color
                backgroundColor: 'rgba(0, 128, 255, 0.2)', // Fill color
            },
        ],
    };

    const chartOptions = {
        scales: {
            x: {
                // type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Time', // X-axis label
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Completed Cards', // Y-axis label
                },
            },
        },
    };

    return (
        <div className='timeline'>
            <div className='timeline-chart'>
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
}

export default Timeline;
