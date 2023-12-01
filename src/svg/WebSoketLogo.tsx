import { SVGProps } from "react"
const WebSoketLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.width}
    preserveAspectRatio="xMidYMid"
    viewBox="0 -31.5 256 256"
  >
    <path
      fill={props.color}
      d="M192.44 144.645h31.78V68.339l-35.805-35.804-22.472 22.472 26.497 26.497v63.14Zm31.864 15.931H113.452L86.954 134.08l11.237-11.236 21.885 21.885h45.028l-44.357-44.441 11.32-11.32 44.357 44.358V88.296l-21.801-21.801 11.152-11.153L110.685 0H0l31.696 31.696v.084H97.436l23.227 23.227-33.96 33.96L63.476 65.74V47.712h-31.78v31.193l55.007 55.007L64.314 156.3l35.805 35.805H256l-31.696-31.529Z"
    />
  </svg>
)
export default WebSoketLogo