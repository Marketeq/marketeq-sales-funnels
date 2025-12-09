import { cn } from "@/lib/utils"
import { Star } from "@blend-metrics/icons"
import Image from "next/image"

const Referrizer = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 170 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-[34px] w-[170px]", className)}
      {...props}
    >
      <g clipPath="url(#a)">
        <mask
          id="b"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={170}
          height={34}
        >
          <path d="M170 0H0v34h170z" fill="#fff" />
        </mask>
        <g mask="url(#b)" fillRule="evenodd" clipRule="evenodd">
          <path
            d="M1.805 12.123C12.275 8.313 22.746 4.55 33.217.74c3.445-1.285 6.029.642 5.031 4.314l-8.113 26.297c-.59 2.525-3.128 3.121-5.44 1.056l-3.173-2.433-5.892-4.497-5.122 3.58s-2.085 1.01-2.085-1.331v-8.215l19.264-9.271-11.83 10.51L26.1 28.369l7.57-23.865-28.013 9.684 4.215 2.203-4.034 1.927-4.714-2.57c-1.95-1.101-1.133-2.937.68-3.625"
            fill="#4c70f0"
          />
          <path d="m15.587 25.478-2.267 1.606-2.946-5.645z" fill="#2b3c89" />
          <path
            d="M79.803 19.746c0 .242 0 .532-.048.918h-10.41c.192.967.67 1.79 1.433 2.37q1.147.87 2.865.87 2.22 0 3.581-1.45l1.671 1.933c-.573.725-1.337 1.257-2.244 1.644s-1.957.532-3.103.532c-1.48 0-2.722-.29-3.868-.87a6.37 6.37 0 0 1-2.579-2.466c-.62-1.064-.907-2.224-.907-3.578 0-1.305.287-2.465.86-3.529a6 6 0 0 1 2.435-2.466c1.05-.58 2.244-.87 3.533-.87 1.29 0 2.435.29 3.486.87a6.4 6.4 0 0 1 2.387 2.418c.621 1.112.908 2.32.908 3.674m-6.685-4.4c-1.003 0-1.815.29-2.53.87-.67.58-1.099 1.403-1.242 2.37h7.544c-.143-.967-.525-1.74-1.242-2.37-.668-.58-1.527-.87-2.53-.87m28.98 4.4c0 .242 0 .532-.048.918H91.64c.192.967.67 1.79 1.433 2.37q1.147.87 2.865.87 2.22 0 3.581-1.45l1.671 1.933c-.573.725-1.337 1.257-2.244 1.644s-1.958.532-3.103.532c-1.48 0-2.722-.29-3.868-.87a6.37 6.37 0 0 1-2.578-2.466c-.621-1.064-.908-2.224-.908-3.578 0-1.305.287-2.465.86-3.529a6 6 0 0 1 2.435-2.466c1.05-.58 2.196-.87 3.533-.87 1.29 0 2.436.29 3.486.87a6.4 6.4 0 0 1 2.387 2.418c.621 1.112.908 2.32.908 3.674m-6.685-4.4c-1.003 0-1.815.29-2.53.87-.67.58-1.1 1.403-1.242 2.37h7.544c-.143-.967-.525-1.74-1.194-2.37q-1.075-.87-2.578-.87m11.174-.386c.908-1.403 2.483-2.128 4.728-2.128v2.9h-.717c-1.193 0-2.148.34-2.817 1.064-.668.726-1.003 1.74-1.003 3.094v6.527h-3.151v-13.44h2.96zm17.33-4.013q-.859 0-1.432-.58a1.95 1.95 0 0 1-.573-1.402c0-.58.191-1.016.573-1.402q.573-.58 1.432-.58a2.1 2.1 0 0 1 1.433.531c.382.339.573.822.573 1.354q0 .87-.573 1.45c-.382.435-.86.629-1.433.629m-1.572 2.031h3.103v13.44h-3.103zm30.079 6.768c0 .242 0 .532-.047.918h-10.41c.191.967.668 1.79 1.432 2.37q1.146.87 2.865.87 2.221 0 3.581-1.45l1.672 1.933c-.573.725-1.338 1.257-2.244 1.644-.908.387-1.959.532-3.105.532-1.479 0-2.721-.29-3.867-.87a6.37 6.37 0 0 1-2.578-2.466c-.621-1.064-.908-2.224-.908-3.578 0-1.305.287-2.465.86-3.529a6 6 0 0 1 2.435-2.466c1.051-.58 2.197-.87 3.534-.87 1.288 0 2.434.29 3.485.87a6.4 6.4 0 0 1 2.388 2.418c.62 1.112.907 2.32.907 3.674m-6.733-4.4c-1.002 0-1.814.29-2.53.87-.669.58-1.099 1.403-1.242 2.37h7.545c-.144-.967-.526-1.74-1.195-2.37q-1.073-.87-2.578-.87m11.363-.386c.907-1.403 2.482-2.128 4.727-2.128v2.997c-.286-.048-.526-.096-.717-.096-1.193 0-2.148.338-2.816 1.063-.669.726-1.003 1.74-1.003 3.094v6.527h-3.103v-13.44h2.96v1.982zM89.35 10.125h-3.2c-1.145.097-1.766.774-1.766 2.176v.822h3.581v2.514h-3.437v10.829h-3.104V12.252c0-1.45.43-2.562 1.241-3.432.812-.822 2.006-1.257 3.486-1.257h3.199zM61.177 20.76c.238-.096.477-.096.668-.193q1.647-.724 2.578-2.175a6.45 6.45 0 0 0 .908-3.336c0-1.305-.287-2.417-.908-3.336-.62-.918-1.432-1.644-2.578-2.175-1.098-.484-2.435-.774-3.963-.774H50.72v17.598h3.247V11.527h3.772c1.432 0 2.483.29 3.199.918.716.58 1.098 1.45 1.098 2.61 0 1.113-.382 1.983-1.098 2.611-.716.58-1.815.92-3.2.92h-2.196l6.303 7.83h3.868zm54.766-5.8c.907-1.403 2.483-2.128 4.727-2.128v2.9h-.716c-1.194 0-2.149.34-2.817 1.064-.669.726-1.003 1.74-1.003 3.094v6.527h-3.104v-13.44h2.961v1.982zm47.036-6.865h-1.146v-.532h2.912v.532h-1.146v2.949h-.62zm5.68 2.949-.048-2.32-1.098 1.933h-.286l-1.146-1.885v2.272h-.573V7.563h.525l1.336 2.32 1.337-2.32h.526v3.48zm-30.081 12.86v2.514h-11.459v-1.982l7.305-8.944h-7.162v-2.514h11.125v1.982l-7.305 8.944z"
            fill="#22283b"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h170v34H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Review = () => {
  return (
    <div className="5xl:px-[300px] 3xl:px-[150px] 3xl:py-[100px] bg-[linear-gradient(211.42deg,rgba(255,255,255,.2)_36.54%,rgba(255,255,255,.04)_47.76%,rgba(255,255,255,.2)_66.25%,rgba(225,234,250,.2)_82%)] px-5 py-10 md:p-10 lg:px-[100px] lg:py-[50px]">
      <div className="3xl:max-w-[630px] mx-auto">
        <h1 className="text-dark-blue-400 3xl:text-[54px] text-center text-[22px] leading-none font-bold">
          What our clients have to say about us
        </h1>
      </div>

      <div className="3xl:mt-[50px] 3xl:gap-x-[75px] mt-[30px] grid gap-9 md:grid-cols-2">
        <div className="relative max-md:h-[151px]">
          <div className="3xl:rounded-[28px] relative size-full overflow-hidden rounded-[18px]">
            <Image
              className="object-cover"
              src="/reading-on-ipad.png"
              alt="Reading on iPad"
              sizes="50vw"
              fill
            />
          </div>
          <div className="border-primary-500 3xl:h-[264.93px] 3xl:w-[261px] 3xl:-bottom-[30px] 3xl:-left-[30px] absolute -bottom-[11.51px] -left-3 h-[88.99px] w-[88px] rounded-tl-[28px] rounded-tr-[200px] rounded-br-[28px] rounded-bl-[48px] border-2" />
        </div>
        <div className="3xl:px-6 3xl:py-[100px] px-6">
          <div className="3xl:gap-x-1 flex items-center gap-x-[2.79px]">
            <Star className="text-warning-500 3xl:size-[26px] size-[18.16px] shrink-0" />
            <Star className="text-warning-500 3xl:size-[26px] size-[18.16px] shrink-0" />
            <Star className="text-warning-500 3xl:size-[26px] size-[18.16px] shrink-0" />
            <Star className="text-warning-500 3xl:size-[26px] size-[18.16px] shrink-0" />
            <Star className="text-warning-500 3xl:size-[26px] size-[18.16px] shrink-0" />
          </div>

          <div className="3xl:mt-5 mt-3">
            <span className="3xl:text-lg 3xl:leading-[1.6] text-sm text-gray-500">
              Mauris sapien eget sem est facilisi suspendisse nisl mauris proin.
              Vulputate at non pharetra lobortis etiam auctor dui. Eget
              consequat viverra massa tellus. Nec rhoncus nunc lacus lobortis
              vulputate consequat sed euismod id. Amet fringilla id feugiat in
              hendrerit pellentesque nibh faucibus arcu. Nunc scelerisque
              sagittis rhoncus pellentesque.
            </span>
          </div>

          <div className="mt-5">
            <div className="3xl:flex-row 3xl:justify-between flex flex-col items-center gap-3">
              <div className="max-3xl:self-stretch inline-flex items-center gap-x-3">
                <div className="3xl:size-[76px] relative size-[52px] shrink-0 overflow-hidden rounded-full">
                  <Image
                    className="object-cover"
                    src="/avatar-01.jpg"
                    alt="Andre Cvijovic"
                    sizes="15vw"
                    fill
                  />
                </div>

                <div className="3xl:space-y-1">
                  <h2 className="text-dark-blue-400 3xl:text-[22px] text-base leading-none font-bold">
                    Andre Cvijovic
                  </h2>
                  <p className="3xl:text-base text-sm leading-[1.6] text-gray-500">
                    Andre Cvijovic
                  </p>
                </div>
              </div>

              <Referrizer className="max-3xl:h-[19px] max-3xl:w-[95px] shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
