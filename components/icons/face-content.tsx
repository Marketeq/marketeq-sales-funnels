import { cn } from "@/lib/utils"

export const FaceContent = ({
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
        d="M9.66699 16.9165C9.66699 16.9165 11.4795 19.3332 14.5003 19.3332C17.5212 19.3332 19.3337 16.9165 19.3337 16.9165M20.542 11.1648C20.0647 11.7509 19.4122 12.0832 18.7295 12.0832C18.0468 12.0832 17.4124 11.7509 16.917 11.1648M12.0837 11.1648C11.6064 11.7509 10.9539 12.0832 10.2712 12.0832C9.58845 12.0832 8.95408 11.7509 8.45866 11.1648M26.5837 14.4998C26.5837 21.1733 21.1738 26.5832 14.5003 26.5832C7.82688 26.5832 2.41699 21.1733 2.41699 14.4998C2.41699 7.8264 7.82688 2.4165 14.5003 2.4165C21.1738 2.4165 26.5837 7.8264 26.5837 14.4998Z"
        stroke="url(#paint0_linear_13276_1200)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_13276_1200"
          x1={2.25273}
          y1={14.3356}
          x2={26.5001}
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
