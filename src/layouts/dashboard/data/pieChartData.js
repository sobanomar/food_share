const pieData = {
  labels: ["New york", "California", "Texas"],
  datasets: [
    {
      label: "Sales Distribution",
      data: [45, 25, 30], // Values corresponding to the labels
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
      ],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
      borderWidth: 0,
    },
  ],
};

export default pieData;
