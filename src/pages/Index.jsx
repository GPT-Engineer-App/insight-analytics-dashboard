// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image } from "@chakra-ui/react";
import { FaChartBar, FaDollarSign, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Text fontSize="2xl" fontWeight="bold">
          Business Dashboard
        </Text>
        <Image src="https://images.unsplash.com/photo-1590102426319-c7526718cd70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxvZ298ZW58MHx8fHwxNzEzNjI1NzAwfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" />
      </Flex>
      <SimpleGrid columns={3} spacing={10}>
        <StatBox icon={<FaShoppingCart />} title="Total Sales" value="1,234" percentageChange={5.6} />
        <StatBox icon={<FaDollarSign />} title="Revenue" value="$89,400" percentageChange={3.2} />
        <StatBox icon={<FaChartBar />} title="New Customers" value="78" percentageChange={1.9} />
      </SimpleGrid>
    </Box>
  );
};

const StatBox = ({ icon, title, value, percentageChange }) => {
  return (
    <Stat p={5} shadow="md" border="1px" borderColor="gray.200">
      <Flex alignItems="center">
        <Box fontSize="3xl" color="teal.500" as="span" mr={2}>
          {icon}
        </Box>
        <Box flex="1">
          <StatLabel fontWeight="medium">{title}</StatLabel>
          <StatNumber fontSize="2xl">{value}</StatNumber>
          <StatHelpText>
            <StatArrow type={percentageChange > 0 ? "increase" : "decrease"} />
            {Math.abs(percentageChange)}%
          </StatHelpText>
        </Box>
      </Flex>
    </Stat>
  );
};

export default Index;
