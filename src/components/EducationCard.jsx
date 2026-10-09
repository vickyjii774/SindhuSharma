
import { GraduationCap } from "lucide-react";

export default function EducationCard({ item }) {
  return (
    <div className="group mb-4 cursor-default rounded-2xl border border-[#D9DED9] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#AFC4B5] hover:shadow-lg sm:p-5 lg:p-6">

      {/* Degree, Institution, and Year */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start sm:gap-4">

        {/* Education Information */}
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F0EA] text-[#214E34] sm:h-9 sm:w-9">
            <GraduationCap className="h-4 w-4" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="break-words text-sm font-semibold leading-5 text-[#17251D] sm:text-base sm:leading-6">
              {item?.degree ||
                item?.qualification ||
                "Degree "}
            </h3>

            <p className="mt-1 break-words text-[11px] font-medium leading-5 text-[#6C746F] sm:text-xs">
              {item?.institution || "Institution"}
            </p>
          </div>
        </div>

        {/* Year Badge */}
        {(item?.year || item?.period) && (
          <span className="w-fit max-w-full shrink-0 rounded-md bg-[#EEF3EF] px-2.5 py-1 font-mono text-[11px] font-bold text-[#214E34] sm:px-3 sm:text-[10px]">
            {item.year || item.period}
          </span>
        )}
      </div>

      {/* Education Details */}
      {(item?.details || item?.description) && (
        <p className="mt-3 break-words pl-11 text-[11px] leading-5 text-[#6C746F] sm:mt-4 sm:pl-12 sm:text-xs sm:leading-6">
          {item.details || item.description}
        </p>
      )}
    </div>
  );
}
