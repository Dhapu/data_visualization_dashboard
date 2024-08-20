import React from "react";
import {
  Box,
  Flex,
  Container,
  Input,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  useColorMode,
  useToast,
  Heading,
} from "@chakra-ui/react";
import { ChevronDownIcon, BellIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import AdminDashboard from "./Sidebar";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <Box
      py={2}
      bgGradient="linear(to-b, #4F3BA9, #9068BE)"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Container maxW="container.lg">
        <Flex
          justify={{ base: "center", md: "space-between" }} // Center justify on small screens, space-between on medium and larger screens
          align="center"
          flexDirection={{ base: "column", md: "row" }} // Column layout on small screens, row layout on medium and larger screens
        >
          <Heading as="h1" size="md" color="white" mb={{ base: 4, md: 0 }} mr={{ base: 0, md: 16 }}> {/* Margin bottom on small screens, margin right on medium and larger screens */}
            Data Visualization Dashboard
          </Heading>
          <Flex align="center">
            <AdminDashboard /> {/* AdminDashboard component on the left */}
            <Menu>
              <MenuButton
                as={Avatar}
                size="sm"
                name="Profile"
                color={"black"} 
                left="inherit"
                background={"white"}
                src="https://bit.ly/broken-link"
              />
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
