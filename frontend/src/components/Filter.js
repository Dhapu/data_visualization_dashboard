import React from 'react';
import { Box, Select, FormControl, FormLabel, Grid } from "@chakra-ui/react";

const Filters = ({ filters, onFilterChange, data }) => {
  const handleSelectChange = (e) => {
    onFilterChange(e.target.name, e.target.value);
  };

  // Helper function to get unique values and exclude empty values
  const getUniqueValues = (key) => {
    return [...new Set(data.map(item => item[key]).filter(value => value))];
  };

  return (
    <Box p={4}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <FormControl>
          <FormLabel>End Year</FormLabel>
          <Select name="endYear" value={filters.endYear} onChange={handleSelectChange}>
            <option value="">All</option>
            {getUniqueValues('end_year').map((endYear) => (
              <option key={endYear} value={endYear}>
                {endYear}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Topics</FormLabel>
          <Select name="topics" value={filters.topics} onChange={handleSelectChange}>
            <option value="">All</option>
            {getUniqueValues('topic').map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Sector</FormLabel>
          <Select name="sector" value={filters.sector} onChange={handleSelectChange}>
            <option value="">All</option>
            {getUniqueValues('sector').map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Region</FormLabel>
          <Select name="region" value={filters.region} onChange={handleSelectChange}>
            <option value="">All</option>
            {getUniqueValues('region').map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>PEST</FormLabel>
          <Select name="pest" value={filters.pestle} onChange={handleSelectChange}>
            <option value="">All</option>
            {getUniqueValues('pestle').map((pestle) => (
              <option key={pestle} value={pestle}>
                {pestle}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Source</FormLabel>
          <Select name="source" value={filters.source} onChange={handleSelectChange}>
            <option value="">All</option>
            {getUniqueValues('source').map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select name="country" value={filters.country} onChange={handleSelectChange}>
            <option value="">All</option>
            {getUniqueValues('country').map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Box>
  );
};

export default Filters;
