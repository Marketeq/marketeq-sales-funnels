import * as React from "react"

export const Ellipse = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={1306}
      height={750}
      viewBox="0 0 1306 750"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.15} filter="url(#filter0_d_13682_28754)">
        <circle cx={653} cy={176} r={176} fill="#306CFE" />
      </g>
      <defs>
        <filter
          id="filter0_d_13682_28754"
          x={0}
          y={-477}
          width={1306}
          height={1306}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={227}
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_13682_28754"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={125} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.186719 0 0 0 0 0.42188 0 0 0 0 0.995833 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_13682_28754"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_13682_28754"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
