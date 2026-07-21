import type { ContentBlock } from "@/data/types";
import type { SystemTheme } from "@/data/systems";

export function DayContent({
  content,
  theme,
}: {
  content: ContentBlock[];
  theme: SystemTheme;
}) {
  return (
    <>
      {content.map((c) => (
        <div key={c.heading} className="mb-3.5">
          <div
            className="font-baloo mb-1.5 text-[14.5px] font-bold"
            style={{ color: theme.color }}
          >
            {c.heading}
          </div>
          <ul className="m-0 list-disc pl-[18px]">
            {c.points.map((p, i) => (
              <li
                key={i}
                className="mb-[5px] text-[13.5px] leading-[1.5] text-[#e7ecf6]"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
