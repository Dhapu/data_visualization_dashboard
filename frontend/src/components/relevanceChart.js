import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const RelevanceBubbleChart = ({ data }) => {
  // Create a Map to ensure unique topics
  const topicRelevanceMap = new Map();

  data.forEach((entry) => {
    if (!topicRelevanceMap.has(entry.topic)) {
      topicRelevanceMap.set(entry.topic, entry.relevance);
    }
  });

  const uniqueTopics = Array.from(topicRelevanceMap.keys());
  const relevances = Array.from(topicRelevanceMap.values());

  // Define color ranges
  const getColor = (relevance) => {
    if (relevance >= 4) {
      return 'rgba(255, 99, 132, 0.6)'; 
    } else if (relevance >= 2) {
      return 'rgba(255, 205, 86, 0.6)'; 
    } else {
      return 'rgba(75, 192, 192, 0.6)'; 
    }
  };

  const getBorderColor = (relevance) => {
    if (relevance >= 4) {
      return 'rgba(255, 99, 132, 1)'; // High relevance - Red
    } else if (relevance >= 2) {
      return 'rgba(255, 205, 86, 1)'; // Mid relevance - Yellow
    } else {
      return 'rgba(75, 192, 192, 1)'; // Low relevance - Green
    }
  };

  const chartData = {
    datasets: [
      {
        label: 'Relevance',
        data: uniqueTopics.map((topic, index) => ({
          x: index, // Use index as x-coordinate to represent the topics
          y: relevances[index],
          r: relevances[index] * 5,
        })),
        backgroundColor: relevances.map(getColor),
        borderColor: relevances.map(getBorderColor),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        labels: uniqueTopics,
        title: {
          display: true,
          text: 'Topics',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Relevance',
        },
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 5, // Adjust the max value as per your data
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <Box margin={50} p={4} mt={8} borderRadius={18} boxShadow='0px 0px 10px rgba(0, 0, 0, 0.1)'>
      <Heading as="h2" mb={4}>Relevance Chart</Heading>
      <Bubble data={chartData} options={chartOptions} />
    </Box>
  );
};

export default RelevanceBubbleChart;
