import { cn } from "@/lib/utils"

export const ChartBreakoutCircle = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("size-[29px]", className)}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.7295 4.229V2.4165M23.4895 5.51063L24.7712 4.229M24.7836 10.2707H26.5961M26.524 15.7082C25.9178 21.8143 20.766 26.5832 14.5003 26.5832C7.82689 26.5832 2.41699 21.1733 2.41699 14.4998C2.41699 8.23421 7.18589 3.08242 13.292 2.47617M14.5003 9.6665H19.3337V14.4998M18.8741 9.6665C16.0293 13.6873 11.3422 16.3123 6.04199 16.3123C4.83015 16.3123 3.65036 16.1751 2.51731 15.9153"
        stroke="url(#paint0_linear_13276_366)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_13276_366"
          x1={2.25264}
          y1={14.3356}
          x2={26.5125}
          y2={14.3356}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1C4098" />
          <stop offset={1} stopColor="#306CFE" />
        </linearGradient>
      </defs>
    </svg>
  )
}
