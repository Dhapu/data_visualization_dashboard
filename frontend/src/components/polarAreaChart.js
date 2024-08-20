import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const TopicsPolarAreaChart = ({ data }) => {
  // Create a dictionary to sum relevance values for each unique topic
  const topicRelevanceMap = data.reduce((acc, item) => {
    if (acc[item.topic]) {
      acc[item.topic] += item.relevance;
    } else {
      acc[item.topic] = item.relevance;
    }
    return acc;
  }, {});

  // Extract unique topics and their summed relevance values
  const uniqueTopics = Object.keys(topicRelevanceMap);
  const relevanceValues = Object.values(topicRelevanceMap);

  const chartData = {
    labels: uniqueTopics,
    datasets: [
      {
        data: relevanceValues,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',

          'rgba(201, 203, 207, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(205, 99, 132, 0.6)',
          'rgba(54, 18, 64, 0.6)',
          'rgba(255, 16, 132, 0.6)',

          'rgba(75, 102, 192, 0.6)',
          'rgba(115, 159, 84, 0.6)',
          'rgba(205, 205, 86, 0.6)',
          'rgba(64, 162, 235, 0.6)',
          'rgba(163, 102, 255, 0.6)',

          'rgba(240, 203, 207, 0.6)',
          'rgba(255, 89, 132, 0.6)',
          'rgba(205, 69, 132, 0.6)',
          'rgba(34, 18, 64, 0.6)',
          'rgba(55, 16, 132, 0.6)',

          'rgba(85, 192, 192, 0.6)',
          'rgba(215, 159, 64, 0.6)',
          'rgba(235, 205, 86, 0.6)',
          'rgba(50, 162, 235, 0.6)',
          'rgba(173, 102, 255, 0.6)',

          'rgba(140, 203, 207, 0.6)',
          'rgba(255, 109, 132, 0.6)',
          'rgba(105, 69, 132, 0.6)',
          'rgba(74, 18, 64, 0.6)',
          'rgba(35, 16, 132, 0.6)',

          'rgba(75, 142, 192, 0.6)',
          'rgba(255, 109, 64, 0.6)',
          'rgba(155, 205, 86, 0.6)',
          'rgba(154, 162, 235, 0.6)',
          
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',

          'rgba(201, 203, 207, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(205, 99, 132, 1)',
          'rgba(54, 18, 64, 1)',
          'rgba(255, 16, 132, 1)',

          'rgba(75, 102, 192, 1)',
          'rgba(115, 159, 84, 1)',
          'rgba(205, 205, 86, 1)',
          'rgba(64, 162, 235, 1)',
          'rgba(163, 102, 255, 1)',

          'rgba(240, 203, 207, 1)',
          'rgba(255, 89, 132, 1)',
          'rgba(205, 69, 132, 1)',
          'rgba(34, 18, 64, 1)',
          'rgba(55, 16, 132, 1)',

          'rgba(85, 192, 192, 1)',
          'rgba(215, 159, 64, 1)',
          'rgba(235, 205, 86, 1)',
          'rgba(50, 162, 235, 1)',
          'rgba(173, 102, 255, 1)',

          'rgba(140, 203, 207, 1)',
          'rgba(255, 109, 132, 1)',
          'rgba(105, 69, 132, 1)',
          'rgba(74, 18, 64, 1)',
          'rgba(35, 16, 132, 1)',

          'rgba(75, 142, 192, 1)',
          'rgba(255, 109, 64, 1)',
          'rgba(155, 205, 86, 1)',
          'rgba(154, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        max: 5,
      },
    },
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Topics Chart
      </Heading>
      <PolarArea data={chartData} options={chartOptions} />
    </Box>
  );
};

export default TopicsPolarAreaChart;
