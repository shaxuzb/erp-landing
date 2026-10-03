import type { ReactNode } from "react";
import type { Dictionary } from "@/content/dictionaries";
import { demoScreens } from "@/content/demo";
import { Icon } from "../icon";
import { GrowBar } from "../motion/reveal";
import { Card, CardTitle, Panel, Tag } from "./parts";

/*
 * Pul, ombor va seriya raqami bloklari uchun mahsulot ekranlaridan parchalar —
 * erp-client dagi haqiqiy ekranlar tuzilishi va yozuvlari asosida chizilgan.
 * Haqiqiy skrinshotlar kelganda almashtiriladi (brif, 6-band).
 */

type FragmentProps = { screens: Dictionary["screens"] };

const accountColors = {
  card: "bg-brand-700",
  bank: "bg-brand-500",
  cash: "bg-brand-400",
  terminal: "bg-brand-300",
};

const bucketColors = {
  overdue: "bg-rose-500",
  today: "bg-brand-600",
  week: "bg-brand-300",
};

export function MoneyFragment({ screens }: FragmentProps) {
  const { finance, currency } = screens;
  const data = demoScreens.finance;

  return (
    <Panel>
      <Card className="sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle>{finance.whereIsMoney}</CardTitle>
            <p className="mt-2 flex items-baseline gap-1.5">
              <span className="num text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {data.total}
              </span>
              <span className="text-xs text-muted">{currency}</span>
            </p>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-600">
            <Icon name="wallet" className="size-5" />
          </span>
        </div>
        <ul className="mt-4 space-y-3">
          {data.accounts.map((account) => (
            <li key={account.id}>
              <p className="flex items-baseline justify-between gap-3 text-[0.8125rem]">
                <span className="truncate text-body">
                  {finance.accounts[account.id]}
                </span>
                <span className="num shrink-0 font-medium text-ink">
                  {account.value}
                  <span className="ml-2 text-2xs font-normal text-muted">
                    {account.share}%
                  </span>
                </span>
              </p>
              <span className="mt-1.5 block h-1.5 rounded-full bg-brand-100/70">
                <GrowBar
                  className={`block h-full rounded-full ${accountColors[account.id]}`}
                  style={{ width: `${account.share}%` }}
                />
              </span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="relative mt-3 sm:-mt-3 sm:ml-auto sm:w-[86%] sm:p-5 sm:shadow-float">
        <CardTitle>{finance.receivableTitle}</CardTitle>
        <ul className="mt-3 grid gap-2 min-[26rem]:grid-cols-3">
          {data.buckets.map((bucket) => (
            <li
              key={bucket.id}
              className="rounded-xl bg-brand-50 px-2.5 py-2 sm:px-3"
            >
              <p className="flex items-center gap-1.5 text-2xs text-body">
                <span
                  className={`size-1.5 shrink-0 rounded-full ${bucketColors[bucket.id]}`}
                />
                <span className="truncate">{finance.buckets[bucket.id]}</span>
              </p>
              <p
                className={`num mt-1 truncate text-[0.8125rem] font-semibold ${
                  bucket.id === "overdue" ? "text-rose-600" : "text-ink"
                }`}
              >
                {bucket.value}
              </p>
              <p className="num text-2xs text-muted">
                {bucket.count} {finance.pieces}
              </p>
            </li>
          ))}
        </ul>
      </Card>

      <div className="mt-3 flex items-center gap-3 rounded-2xl border border-rose-200 bg-linear-to-r from-rose-50 to-brand-50 px-4 py-3">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-rose-600 ring-1 ring-rose-200">
          <Icon name="alert" className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="text-2xs font-semibold tracking-wide text-rose-700 uppercase">
            {finance.attention}
          </p>
          <p className="truncate text-[0.8125rem] font-medium text-ink">
            {finance.alerts.overdue.title}
          </p>
        </div>
      </div>
    </Panel>
  );
}

const stockStatusTones = {
  out: "danger",
  low: "warning",
  noSales: "info",
  ok: "success",
} as const;

export function StockFragment({ screens }: FragmentProps) {
  const { stock, currency } = screens;
  const data = demoScreens.stock;

  return (
    <Panel>
      <Card className="sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle>{stock.title}</CardTitle>
            <p className="mt-2 flex items-baseline gap-1.5">
              <span className="num text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {data.total}
              </span>
              <span className="text-xs text-muted">{currency}</span>
            </p>
            <p className="mt-0.5 text-2xs text-muted">{stock.caption}</p>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-600">
            <Icon name="package" className="size-5" />
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Tile label={stock.low} value={data.low} valueClass="text-rose-600">
            {data.lowDays} {stock.lowHelper}
          </Tile>
          <Tile
            label={`${stock.stale} · ${data.staleDays} ${stock.days}`}
            value={data.stale}
            valueClass="text-brand-600"
          >
            {stock.frozen}: {data.frozen}
          </Tile>
          <div className="col-span-2 rounded-xl bg-rose-50 px-3 py-2.5">
            <p className="text-2xs text-rose-800">{stock.lost}</p>
            <p className="num mt-0.5 text-lg font-semibold text-rose-600">
              ~{data.lost}
              <span className="ml-1.5 text-2xs font-normal text-rose-700/70">
                {currency}
              </span>
            </p>
            <p className="text-2xs text-rose-800/70">
              {data.lostCount} {stock.lostHelper}
            </p>
          </div>
        </div>
      </Card>

      <Card className="mt-3 !p-0">
        <div className="grid grid-cols-[1fr_auto_3.5rem] gap-3 border-b border-line/70 px-4 py-2.5 text-2xs font-medium text-muted sm:px-5">
          <span>{stock.columns.product}</span>
          <span>{stock.columns.status}</span>
          <span className="text-right">{stock.columns.left}</span>
        </div>
        <ul>
          {data.rows.map((row, index) => (
            <li
              key={stock.products[index]}
              className="grid grid-cols-[1fr_auto_3.5rem] items-center gap-3 border-b border-line/50 px-4 py-2.5 text-[0.8125rem] last:border-0 sm:px-5"
            >
              <span className="truncate text-ink">{stock.products[index]}</span>
              <Tag tone={stockStatusTones[row.status]}>
                {stock.statuses[row.status]}
              </Tag>
              <span className="num text-right font-medium text-ink">
                {row.left}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </Panel>
  );
}

type TileProps = {
  label: string;
  value: string;
  valueClass: string;
  children: ReactNode;
};

function Tile({ label, value, valueClass, children }: TileProps) {
  return (
    <div className="rounded-xl bg-brand-50 px-3 py-2.5">
      <p className="truncate text-2xs text-body">{label}</p>
      <p className={`num mt-0.5 text-lg font-semibold ${valueClass}`}>
        {value}
      </p>
      <p className="num truncate text-2xs text-muted">{children}</p>
    </div>
  );
}

export function SerialFragment({ screens }: FragmentProps) {
  const { serial } = screens;
  const data = demoScreens.serial;

  return (
    <Panel>
      <Card className="sm:p-5">
        <CardTitle>{serial.title}</CardTitle>
        <div className="mt-3 flex gap-2">
          <span className="num flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-line px-3 py-2 text-[0.8125rem] text-ink">
            <Icon name="search" className="size-4 shrink-0 text-muted" />
            <span className="truncate">{data.number}</span>
          </span>
          <span className="rounded-lg bg-brand-600 px-3.5 py-2 text-[0.8125rem] font-medium text-white">
            {serial.search}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-brand-50 px-3 py-2.5">
          <div className="min-w-0">
            <p className="text-2xs text-muted">{serial.product}</p>
            <p className="truncate text-[0.8125rem] font-medium text-ink">
              {serial.productName}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-2xs text-muted">{serial.state}</p>
            <Tag tone="info">{serial.stateValue}</Tag>
          </div>
        </div>

        <ol className="mt-4">
          {data.rows.map((row, index) => {
            const step = serial.rows[index];
            const last = index === data.rows.length - 1;

            return (
              <li
                key={row.record}
                className="relative flex gap-3 pb-4 last:pb-0"
              >
                {!last && (
                  <span className="absolute top-5 bottom-0 left-[0.5625rem] w-px bg-brand-200" />
                )}
                <span
                  className={`relative mt-0.5 grid size-[1.1875rem] shrink-0 place-items-center rounded-full ring-2 ring-brand-200 ${
                    last ? "bg-brand-600 text-white" : "bg-white text-brand-600"
                  }`}
                >
                  <span className="size-1.5 rounded-full bg-current" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="flex items-baseline justify-between gap-3 text-[0.8125rem]">
                    <span className="truncate font-medium text-brand-700">
                      {step?.document}{" "}
                      <span className="num font-normal">{row.record}</span>
                    </span>
                    <span className="num shrink-0 text-2xs text-muted">
                      {row.date}
                    </span>
                  </p>
                  <p className="flex items-center gap-1.5 text-2xs text-body">
                    <span className="truncate">{step?.from}</span>
                    <Icon name="arrowRight" className="size-3 shrink-0" />
                    <span className="truncate">{step?.to}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Card>

      <Card className="relative mt-3 sm:-mt-2 sm:ml-auto sm:w-[78%] sm:p-5 sm:shadow-float">
        <div className="flex items-center justify-between gap-2">
          <p className="flex items-center gap-2 text-sm font-semibold text-ink">
            <Icon name="camera" className="size-4 text-brand-600" />
            {serial.aiTitle}
            <Tag tone="accent">{serial.beta}</Tag>
          </p>
          <Tag tone="success">{serial.found}</Tag>
        </div>
        <dl className="mt-3 space-y-2 text-[0.8125rem]">
          <div className="flex items-baseline justify-between gap-3">
            <dt className="text-body">{serial.detected}</dt>
            <dd className="num truncate font-medium text-ink">{data.number}</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-body">{serial.confidence}</dt>
            <dd className="flex items-center gap-2">
              <span className="block h-1.5 w-16 rounded-full bg-brand-100">
                <GrowBar
                  className="block h-full rounded-full bg-brand-600"
                  style={{ width: `${data.confidence}%` }}
                />
              </span>
              <span className="num font-medium text-ink">
                {data.confidence}%
              </span>
            </dd>
          </div>
        </dl>
      </Card>
    </Panel>
  );
}
