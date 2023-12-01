import { SVGProps } from "react"
const Image = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={props.width}
        height={props.width}
        viewBox="0 0 48 48"
    >
        <g fill={props.color}>
            <path d="M0 4v40h48V4H0zm44 36H4V8h40v32z" />
            <circle cx={32.704} cy={15.172} r={4} />
            <path d="m36.704 37-9.621-16.083L24 23.903l-5.938-9.163L7.042 37h27.494z" />
        </g>
    </svg>
)
export default Image