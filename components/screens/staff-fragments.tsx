import type { CSSProperties } from "react";
import type { Dictionary } from "@/content/dictionaries";
import { demoScreens } from "@/content/demo";
import { Icon } from "../icon";
import { ScanLine } from "../motion/scan-line";
import { Pulse } from "../motion/system-links";
import { Avatar, Card, CardTitle, Tag } from "./parts";

/*
 * "Xodimlar nima qilyapti?" bloki uchun uchta ekran parchasi: Face ID davomat,
 * xodimlar xaritasi va vazifalar doskasi. erp-client dagi employee-attendance,
 * crm/employees-map va work-management modullari asosida chizilgan; ichidagi
 * ismlar, vaqtlar va vazifalar namuna (content/demo.ts).
 */

type FragmentProps = { screens: Dictionary["screens"] };

const attendanceStatusColors = {
  onTime: "text-brand-600",
  late: "text-rose-600",
  absent: "text-muted",
};

const summaryColors = {
  present: "text-brand-700",
  late: "text-rose-600",
  absent: "text-ink",
};

const SCAN_TRAVEL = 36;

export function AttendanceFragment({ screens }: FragmentProps) {
  const { attendance } = screens;
  const data = demoScreens.attendance;
  const summaryKeys = ["present", "late", "absent"] as const;

  return (
    <div aria-hidden="true" className="space-y-2.5 select-none">
      <Card className="flex items-center gap-3 !p-3">
        <span className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-ink text-brand-300">
          <Icon name="scanFace" className="size-8" />
          <ScanLine
            travel={SCAN_TRAVEL}
            className="absolute inset-x-2 top-2.5 h-0.5 rounded-full bg-brand-400 shadow-[0_0_8px_2px_rgb(161_132_246/0.7)]"
          />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">
            {data.check.name}
          </p>
          <Tag tone="success">
            <Icon
              name="check"
              strokeWidth={3}
              className="mr-1 inline size-2.5 align-[-1px]"
            />
            {attendance.verified}
          </Tag>
          <p className="num mt-1 truncate text-2xs text-muted">
            {data.check.time} · {attendance.sources[data.check.source]}
          </p>
        </div>
      </Card>

      <ul className="grid grid-cols-3 gap-2">
        {summaryKeys.map((key) => (
          <li
            key={key}
            className="rounded-xl bg-white px-2.5 py-2 shadow-card ring-1 ring-line/70"
          >
            <p className={`num text-lg font-semibold ${summaryColors[key]}`}>
              {data.summary[key]}
            </p>
            <p className="truncate text-2xs text-body">
              {attendance.summary[key]}
            </p>
          </li>
        ))}
      </ul>

      <Card className="!p-0">
        <div className="grid grid-cols-[1fr_2.75rem_2.75rem] gap-2 border-b border-line/70 px-3 py-2 text-2xs font-medium text-muted">
          <span>{attendance.columns.employee}</span>
          <span className="text-right">{attendance.columns.arrived}</span>
          <span className="text-right">{attendance.columns.left}</span>
        </div>
        <ul>
          {data.rows.map((row) => (
            <li
              key={row.name}
              className="grid grid-cols-[1fr_2.75rem_2.75rem] items-center gap-2 border-b border-line/50 px-3 py-2 last:border-0"
            >
              <p className="min-w-0 text-[0.8125rem] leading-tight">
                <span className="block truncate font-medium text-ink">
                  {row.name}
                </span>
                <span
                  className={`text-2xs font-medium ${attendanceStatusColors[row.status]}`}
                >
                  {attendance.statuses[row.status]}
                </span>
              </p>
              <span
                className={`num text-right text-[0.8125rem] font-medium ${
                  row.status === "late" ? "text-rose-600" : "text-ink"
                }`}
              >
                {row.arrived}
              </span>
              <span className="num text-right text-[0.8125rem] text-body">
                {row.left}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

const at = (x: number, y: number): CSSProperties => ({
  left: `${x}%`,
  top: `${y}%`,
});

export function LocationFragment({ screens }: FragmentProps) {
  const { location } = screens;
  const data = demoScreens.location;
  const { selected } = data;

  return (
    <div aria-hidden="true" className="space-y-2.5 select-none">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-line/70">
        <MapBackdrop />

        {/* Ruxsat etilgan hudud: tashkilot atrofidagi doira. */}
        <span
          className="absolute aspect-square w-[46%] -translate-1/2 rounded-full border-2 border-dashed border-brand-500 bg-brand-500/12"
          style={at(selected.x, selected.y)}
        />

        {data.pins.map((pin) => (
          <span
            key={pin.initials}
            className="absolute -translate-1/2"
            style={at(pin.x, pin.y)}
          >
            <Avatar
              initials={pin.initials}
              className="size-7 text-[0.625rem] ring-2 ring-white"
            />
          </span>
        ))}

        <span
          className="absolute grid -translate-1/2 place-items-center"
          style={at(selected.x, selected.y)}
        >
          <Pulse
            spread={2.2}
            className="absolute inset-0 rounded-full bg-brand-500"
          />
          <Avatar
            initials={selected.initials}
            className="relative size-9 text-2xs ring-[3px] ring-white"
          />
        </span>

        <p className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-2xs font-medium text-ink shadow-card">
          <Icon name="mapPin" className="size-3 text-brand-600" />
          <span className="num">{data.onMap}</span> {location.onMap}
        </p>
        <p className="absolute right-2.5 bottom-2.5 rounded-full bg-brand-600 px-2.5 py-1 text-2xs font-medium text-white">
          {location.zone}
        </p>
      </div>

      <Card className="flex items-center gap-3 !p-3">
        <Avatar initials={selected.initials} className="size-9 text-xs" />
        <div className="min-w-0 flex-1">
          <p className="flex items-center justify-between gap-2">
            <span className="truncate text-sm font-semibold text-ink">
              {selected.name}
            </span>
            <Tag tone="success">{location.atSite}</Tag>
          </p>
          {/* Menejer obyektga borganini surat bilan tasdiqlaydi. */}
          <p className="mt-1 flex items-center justify-between gap-2 text-2xs text-muted">
            <span className="flex min-w-0 items-center gap-1.5">
              <Icon name="camera" className="size-3 shrink-0 text-brand-600" />
              <span className="truncate">{location.visit}</span>
            </span>
            <span className="num shrink-0 font-medium text-ink">
              {selected.time}
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
}

// Shartli shahar xaritasi: mahallalar, ko'chalar va bog'.
function MapBackdrop() {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 size-full"
    >
      <rect width="400" height="300" fill="#e9e2fd" />
      <g fill="#f6f3ff">
        <rect x="-10" y="-10" width="108" height="88" rx="10" />
        <rect x="124" y="-10" width="140" height="88" rx="10" />
        <rect x="296" y="-10" width="120" height="88" rx="10" />
        <rect x="-10" y="104" width="108" height="92" rx="10" />
        <rect x="124" y="104" width="140" height="92" rx="10" />
        <rect x="300" y="104" width="116" height="84" rx="10" />
        <rect x="-10" y="224" width="108" height="90" rx="10" />
        <rect x="124" y="226" width="150" height="90" rx="10" />
        <rect x="304" y="216" width="112" height="100" rx="10" />
      </g>
      <path
        d="M300 104 h116 v84 h-116 z"
        fill="#dacffd"
        opacity="0.75"
        transform="translate(4 0)"
      />
      <g fill="none" stroke="#fff" strokeLinecap="round">
        <path d="M-10 91 H410" strokeWidth="13" />
        <path d="M-10 210 C 120 204, 270 216, 410 202" strokeWidth="13" />
        <path d="M111 -10 V310" strokeWidth="13" />
        <path d="M282 -10 C 276 100, 296 200, 289 310" strokeWidth="13" />
        <path d="M194 104 V196" strokeWidth="5" />
        <path d="M-10 150 H98" strokeWidth="5" />
        <path d="M124 262 H274" strokeWidth="5" />
      </g>
    </svg>
  );
}

const DUE_TODAY = "today";

export function TasksFragment({ screens }: FragmentProps) {
  const { tasks } = screens;
  const data = demoScreens.tasks;

  return (
    <div aria-hidden="true" className="select-none">
      <Card className="!p-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{tasks.title}</CardTitle>
          <Tag tone="accent">
            <Icon name="kanban" className="mr-1 inline size-3 align-[-2px]" />
            {tasks.board}
          </Tag>
        </div>

        {/* Ustunlar torayib ketmaydi: sig'magani haqiqiy doskadagi kabi o'ng
            chetda kesilib, xiralashib ko'rinadi. */}
        <div className="mt-3 grid grid-cols-[repeat(3,minmax(6.5rem,1fr))] gap-1.5 overflow-hidden [mask-image:linear-gradient(90deg,#000_86%,transparent)]">
          {data.columns.map((column) => (
            <div
              key={column.id}
              className="min-w-0 rounded-xl bg-brand-50 p-1.5"
            >
              <p className="flex items-center justify-between gap-1 px-1 text-2xs font-semibold text-body">
                <span className="truncate">{tasks.columns[column.id]}</span>
                <span className="num text-muted">{column.cards.length}</span>
              </p>
              <ul className="mt-1.5 space-y-1.5">
                {column.cards.map((card) => (
                  <li
                    key={card.title}
                    className="rounded-lg bg-white p-2 shadow-card ring-1 ring-line/60"
                  >
                    <p
                      className={`text-2xs leading-snug font-medium [overflow-wrap:anywhere] ${
                        column.id === "done" ? "text-muted" : "text-ink"
                      }`}
                    >
                      {tasks.items[card.title]}
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-1">
                      <Avatar
                        initials={card.assignee}
                        className="size-5 text-[0.5rem]"
                      />
                      <DueChip
                        done={column.id === "done"}
                        label={card.due === DUE_TODAY ? tasks.today : card.due}
                        urgent={card.due === DUE_TODAY}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

type DueChipProps = {
  label: string;
  done: boolean;
  urgent: boolean;
};

function DueChip({ label, done, urgent }: DueChipProps) {
  const tone = done
    ? "bg-brand-600 text-white"
    : urgent
      ? "bg-rose-50 text-rose-700"
      : "bg-brand-50 text-brand-700";

  return (
    <span
      className={`num flex items-center gap-0.5 rounded px-1 py-0.5 text-[0.625rem] leading-none font-medium whitespace-nowrap ${tone}`}
    >
      <Icon name={done ? "check" : "clock"} className="size-2.5" />
      {label}
    </span>
  );
}
