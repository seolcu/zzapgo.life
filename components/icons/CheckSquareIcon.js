const CheckSquareIcon = ({ size, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ stroke: "var(--innerTextColor)" }}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check-square"
    >
      <polyline points="9 11 12 14 22 4"></polyline>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>
  );
};
export default CheckSquareIcon;
