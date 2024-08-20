import { Table, Thead, Tbody, Tr, Th, Td, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

const DataTable = ({ data }) => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const filteredData = data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th borderWidth="1px">ID</Th>
            <Th borderWidth="1px">End Year</Th>
            <Th borderWidth="1px">Topics</Th>
            <Th borderWidth="1px">Sector</Th>
            <Th borderWidth="1px">Region</Th>
            <Th borderWidth="1px">PEST</Th>
            <Th borderWidth="1px">Source</Th>
            <Th borderWidth="1px">SWOT</Th>
            <Th borderWidth="1px">Country</Th>
            <Th borderWidth="1px">City</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((item) => (
            <Tr key={item.id}>
              <Td borderWidth="1px">{item.id}</Td>
              <Td borderWidth="1px">{item.end_year}</Td>
              <Td borderWidth="1px">{item.topic}</Td>
              <Td borderWidth="1px">{item.sector}</Td>
              <Td borderWidth="1px">{item.region}</Td>
              <Td borderWidth="1px">{item.pest}</Td>
              <Td borderWidth="1px">{item.source}</Td>
              <Td borderWidth="1px">{item.swot}</Td>
              <Td borderWidth="1px">{item.country}</Td>
              <Td borderWidth="1px">{item.city}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box textAlign="center" mt={4}>
        <Button onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </Button>
        <Button onClick={handleNextPage} ml={2} disabled={(currentPage + 1) * pageSize >= data.length}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default DataTable;
