const doctorsData = [
  {
    id: "1",
    name: "Dr. John Smith",
    age: 45,
    specialtyId: 1,
    hospitalId: 1,
    status: "Available",
    address: "123 Main St, New York, NY, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "2",
    name: "Dr. Emily Johnson",
    age: 38,
    specialtyId: 2,
    hospitalId: 2,
    status: "Unavailable",
    address: "45 High St, London, UK",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "3",
    name: "Dr. Michael Brown",
    age: 50,
    specialtyId: 1,
    hospitalId: 3,
    status: "Available",
    address: "75 Ocean Ave, Sydney, Australia",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "4",
    name: "Dr. Sarah Davis",
    age: 40,
    specialtyId: 12,
    hospitalId: 4,
    status: "Unavailable",
    address: "89 Sakura St, Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "5",
    name: "Dr. David Wilson",
    age: 55,
    specialtyId: 4,
    hospitalId: 5,
    status: "Available",
    address: "67 Rue de Paris, Paris, France",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "6",
    name: "Dr. Jessica Moore",
    age: 36,
    specialtyId: 3,
    hospitalId: 6,
    status: "Available",
    address: "34 Hauptstrasse, Berlin, Germany",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "7",
    name: "Dr. Christopher Taylor",
    age: 47,
    specialtyId: 8,
    hospitalId: 7,
    status: "Unavailable",
    address: "123 Queen St, Toronto, Canada",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "8",
    name: "Dr. Angela Anderson",
    age: 42,
    specialtyId: 6,
    hospitalId: 8,
    status: "Available",
    address: "101 Gwanak-ro, Seoul, South Korea",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "9",
    name: "Dr. Robert Martinez",
    age: 44,
    specialtyId: 9,
    hospitalId: 9,
    status: "Available",
    address: "200 Hollywood Blvd, Los Angeles, CA, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "10",
    name: "Dr. Mary Clark",
    age: 39,
    specialtyId: 10,
    hospitalId: 10,
    status: "Unavailable",
    address: "500 Bourke St, Melbourne, Australia",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "11",
    name: "Dr. James Thomas",
    age: 51,
    specialtyId: 19,
    hospitalId: 11,
    status: "Available",
    address: "77 Market St, San Francisco, CA, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "12",
    name: "Dr. Barbara Jackson",
    age: 46,
    specialtyId: 12,
    hospitalId: 12,
    status: "Unavailable",
    address: "456 Michigan Ave, Chicago, IL, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "13",
    name: "Dr. Daniel White",
    age: 52,
    specialtyId: 18,
    hospitalId: 13,
    status: "Available",
    address: "321 Commonwealth Ave, Boston, MA, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "14",
    name: "Dr. Patricia Harris",
    age: 43,
    specialtyId: 6,
    hospitalId: 14,
    status: "Unavailable",
    address: "1500 Main St, Houston, TX, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "15",
    name: "Dr. Anthony Martin",
    age: 37,
    specialtyId: 20,
    hospitalId: 15,
    status: "Available",
    address: "250 Biscayne Blvd, Miami, FL, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "16",
    name: "Dr. Linda Thompson",
    age: 48,
    specialtyId: 16,
    hospitalId: 16,
    status: "Available",
    address: "50 Chestnut St, Philadelphia, PA, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "17",
    name: "Dr. Richard Garcia",
    age: 49,
    specialtyId: 7,
    hospitalId: 17,
    status: "Unavailable",
    address: "123 Desert Rd, Phoenix, AZ, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "18",
    name: "Dr. Elizabeth Martinez",
    age: 35,
    specialtyId: 18,
    hospitalId: 18,
    status: "Available",
    address: "987 Main St, Dallas, TX, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "19",
    name: "Dr. Steven Rodriguez",
    age: 41,
    specialtyId: 23,
    hospitalId: 19,
    status: "Available",
    address: "400 Capitol St, Washington, DC, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: "20",
    name: "Dr. Susan Lewis",
    age: 39,
    specialtyId: 17,
    hospitalId: 20,
    status: "Unavailable",
    address: "555 Peachtree St, Atlanta, GA, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
];

export default doctorsData;
