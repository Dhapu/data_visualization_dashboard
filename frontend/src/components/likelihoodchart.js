import React from "react";
import { Radar } from "react-chartjs-2";
import { Box, useColorModeValue, Heading } from "@chakra-ui/react";

const LikelihoodRadarChart = ({ data }) => {
  // Create a Map to ensure unique country-likelihood pairs
  const countryLikelihoodMap = new Map();

  data.forEach((entry) => {
    if (!countryLikelihoodMap.has(entry.country)) {
      countryLikelihoodMap.set(entry.country, entry.likelihood);
    } else if (countryLikelihoodMap.get(entry.country) !== entry.likelihood) {
      countryLikelihoodMap.set(entry.country, entry.likelihood);
    }
  });

  const uniqueCountries = Array.from(countryLikelihoodMap.keys());
  const likelihoodValues = Array.from(countryLikelihoodMap.values());

  const chartData = {
    labels: uniqueCountries,
    datasets: [
      {
        label: "Likelihood",
        data: likelihoodValues,
        backgroundColor: useColorModeValue(
          "rgba(79, 59, 169, 0.7)",
          "rgba(144, 104, 190, 0.7)"
        ),
        borderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
        borderWidth: 2,
        pointBackgroundColor: useColorModeValue("white", "black"),
        pointBorderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1,
      },
    },
  };

  return (
    <Box
      borderRadius={20}
      pt={6}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      shadow="md"
      pb={100}
      bg={useColorModeValue("white", "gray.800")}
      maxHeight={700}
      overflow="hidden"
    >
      <Heading as="h2" mb={4} ml={6}>
        Likelihood Chart
      </Heading>

      <Radar data={chartData} options={chartOptions} />
    </Box>
  );
};

export default LikelihoodRadarChart;
