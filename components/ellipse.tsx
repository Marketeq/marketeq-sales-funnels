import { SVGProps } from "react"

export const Ellipse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1306}
    height={829}
    fill="none"
    {...props}
  >
    <g filter="url(#a)" opacity={0.15}>
      <circle cx={653} cy={176} r={176} fill="#306CFE" />
    </g>
    <defs>
      <filter
        id="a"
        width={1306}
        height={1306}
        x={0}
        y={-477}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={227}
          result="effect1_dropShadow_15218_10775"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={125} />
        <feColorMatrix values="0 0 0 0 0.186719 0 0 0 0 0.42188 0 0 0 0 0.995833 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_15218_10775"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_15218_10775"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
