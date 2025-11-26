import { cn } from "@/lib/utils"

export const RefreshCw = ({
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
      <g clipPath="url(#clip0_13276_306)">
        <path
          d="M27.7913 4.8334V12.0834M27.7913 12.0834H20.5413M27.7913 12.0834L22.1847 6.81507C20.886 5.51577 19.2794 4.56661 17.5147 4.05617C15.75 3.54573 13.8848 3.49065 12.093 3.89605C10.3013 4.30145 8.64143 5.15414 7.26836 6.37454C5.89529 7.59493 4.85375 9.14327 4.24092 10.8751M1.20801 24.1667V16.9167M1.20801 16.9167H8.45801M1.20801 16.9167L6.81468 22.1851C8.11333 23.4844 9.71996 24.4335 11.4847 24.944C13.2493 25.4544 15.1146 25.5095 16.9063 25.1041C18.6981 24.6987 20.3579 23.846 21.731 22.6256C23.1041 21.4052 24.1456 19.8569 24.7584 18.1251"
          stroke="url(#paint0_linear_13276_306)"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_13276_306"
          x1={1.02731}
          y1={14.3523}
          x2={27.6995}
          y2={14.3523}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1C4098" />
          <stop offset={1} stopColor="#306CFE" />
        </linearGradient>
        <clipPath id="clip0_13276_306">
          <rect width={29} height={29} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
