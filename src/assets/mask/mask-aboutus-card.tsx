export default function MaskAboutUsCard({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_23_232"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="76"
        height="76"
      >
        <path d="M76 0H0V76H76V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_23_232)">
        <path
          d="M2 36V2H36V36H2ZM40 40H74V74H40V40Z"
          fill="#4271FF"
          stroke="black"
          stroke-width="4"
        />
      </g>
    </svg>
  );
}
