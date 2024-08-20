import React, { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "./intensitychart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Navbar from "./Navbar";
import RegionChart from "./regionChart";
import AdminDashboard from "./Sidebar";
import { ChakraProvider, Flex, Box, Grid } from "@chakra-ui/react";
import RelevanceBubbleChart from "./relevanceChart";
import TopicsPolarAreaChart from "./polarAreaChart";
import PieChart from "./sectortChart";
import CountryChart from "./countrychart";
import LikelihoodRadarChart from "./likelihoodchart";
import DataTable from "./DataGridTable";
import Footer from "./footer";
import Filters from "./Filter";

Chart.register(CategoryScale);

const Home = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    end_year: "",
    topic: "",
    sector: "",
    region: "",
    pest: "",
    source: "",
    swot: "",
    country: "",
    city: "",
  });
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "http://127.0.0.1:8000";
      try {
        const response = await axios.get(`${API_URL}/api/data/`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  useEffect(() => {
    const filtered = data.filter(item => {
      return (
        (!filters.end_year || item.end_year === filters.end_year) &&
        (!filters.topic || item.topic === filters.topic) &&
        (!filters.sector || item.sector === filters.sector) &&
        (!filters.region || item.region === filters.region) &&
        (!filters.pest || item.pest === filters.pest) &&
        (!filters.source || item.source === filters.source) &&
        (!filters.swot || item.swot === filters.swot) &&
        (!filters.country || item.country === filters.country) &&
        (!filters.city || item.city === filters.city)
      );
    });
    setFilteredData(filtered);
  }, [filters, data]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <ChakraProvider>
      <Navbar />
      <AdminDashboard />
      <Filters filters={filters} onFilterChange={handleFilterChange} data={data} />
      <DataTable data={filteredData} />
      <IntensityChart data={data} />
      <Flex direction={{ base: "column", md: "row" }} m={50}>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="50%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <RegionChart data={data} />
        </Box>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="50%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <TopicsPolarAreaChart data={data} />
        </Box>
      </Flex>
      <RelevanceBubbleChart data={data} />
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <Box>
          <PieChart data={data} />
        </Box>
        <Box>
          <LikelihoodRadarChart data={data} />
        </Box>
      </Grid>
      <CountryChart data={data} />
      {/* <Footer/> */}
    </ChakraProvider>
  );
};

export default Home;
