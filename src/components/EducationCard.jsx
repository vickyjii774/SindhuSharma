
import { GraduationCap } from "lucide-react";

export default function EducationCard({ item }) {
  const degree =
    item?.degree || item?.qualification || "Degree";

  const institution = item?.institution || "Institution";
  const year = item?.year || item?.period;
  const details = item?.details || item?.description;

  return (
    <div className="group mb-4 cursor-default rounded-2xl border border-[#D9DED9] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#AFC4B5] hover:shadow-lg sm:p-5 lg:p-6">
      {/* Degree, Institution, and Year */}
      <div className="flex flex-row items-start justify-between gap-2 sm:gap-4">
        {/* Education Information */}
        <div className="flex min-w-0 flex-1 items-start gap-2.5 sm:gap-3">
          {/* Icon */}
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F0EA] text-[#214E34] transition-colors duration-300 group-hover:bg-[#214E34] group-hover:text-white sm:h-9 sm:w-9">
            <GraduationCap className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          </div>

          {/* Degree and Institution */}
          <div className="min-w-0 flex-1">
            <h3 className="break-words text-sm font-semibold leading-5 text-[#17251D] sm:text-base sm:leading-6">
              {degree}
            </h3>

            <p className="mt-1 break-words text-[13px] font-medium leading-5 text-[#202321] sm:text-xs">
              {institution}
            </p>
          </div>
        </div>

        {/* Year Badge — Always on the Right */}
        {year && (
          <span className="ml-1 inline-flex w-fit max-w-[42%] shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-[#EEF3EF] px-2 py-1 font-mono text-[10px] font-bold leading-4 text-[#214E34] transition-colors duration-300 group-hover:bg-[#E0EAE2] sm:ml-0 sm:max-w-none sm:px-3 sm:text-[11px]">
            {year}
          </span>
        )}
      </div>

      {/* Education Details */}
      {details && (
        <p className="mt-3 break-words pl-[42px] text-[11px] leading-5 text-[#6C746F] sm:mt-4 sm:pl-12 sm:text-xs sm:leading-6">
          {details}
        </p>
      )}
    </div>
  );
}
