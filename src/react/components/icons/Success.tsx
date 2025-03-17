type Props = React.SVGProps<SVGSVGElement>;

export default function Icon(props: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" {...props}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <path
          fill="green"
          stroke="green"
          d="M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z"
        />
        <path stroke="#fff" d="M17 24L22 29L32 19" />
      </g>
    </svg>
  );
}
