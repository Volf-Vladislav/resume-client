import { SVGProps } from "react"
const Phone = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.width}
    fill="none"
    viewBox="2 2 20 20"
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.232-8.639 1.544 1.548c.307.309.297.82-.02 1.14l-.442.432-.01-.009a2.606 2.606 0 0 1-1.274.52c-.1.011-2.435.23-5.333-2.674-2.097-2.101-2.87-3.65-2.665-5.344.023-.212.075-.422.16-.643.09-.232.212-.448.358-.634l-.012-.012.435-.439c.319-.32.829-.329 1.135-.021l1.545 1.548c.307.308.298.818-.02 1.138l-.258.257-.522.523a10.386 10.386 0 0 1 .084.15l.001.003c.273.493.647 1.167 1.355 1.876.708.71 1.38 1.084 1.872 1.357l.153.086.778-.78c.319-.32.828-.329 1.136-.021Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Phone