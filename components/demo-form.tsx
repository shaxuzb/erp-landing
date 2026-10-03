"use client";

import * as m from "motion/react-m";
import { useId, useState, type SubmitEvent } from "react";
import type { Dictionary } from "@/content/dictionaries";
import {
  buildDemoMessage,
  buildTelegramUrl,
  findInvalidFields,
  readDemoRequest,
  type DemoRequestField,
} from "@/lib/demo-request";
import { Icon } from "./icon";
import { EASE_OUT } from "./motion/reveal";

type FormState =
  | { status: "editing"; invalid: DemoRequestField[] }
  | { status: "sent"; telegramUrl: string };

const fieldClass =
  "mt-2 block h-12 w-full rounded-xl border border-line bg-paper px-4 text-base text-ink placeholder:text-muted/70 transition-colors hover:border-brand-300 focus:border-brand-500 focus:bg-white focus:outline-2 focus:outline-offset-0 focus:outline-brand-200 aria-invalid:border-loss";

const labelClass = "block text-sm font-medium text-ink";

const primaryButton =
  "flex h-14 w-full items-center justify-center gap-2 rounded-[0.875rem] bg-brand-600 text-base font-semibold text-white shadow-[0_8px_20px_-8px_rgb(109_40_217/0.7)] transition-[background-color,scale] duration-200 hover:bg-brand-500 active:scale-[0.98] active:bg-brand-700";

export function DemoForm({ form }: { form: Dictionary["form"] }) {
  const [state, setState] = useState<FormState>({
    status: "editing",
    invalid: [],
  });
  const id = useId();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const request = readDemoRequest(new FormData(event.currentTarget));
    const invalid = findInvalidFields(
      request,
      form.activities.map((activity) => activity.value),
    );

    if (invalid.length > 0) {
      setState({ status: "editing", invalid });
      return;
    }

    const activityLabel =
      form.activities.find((activity) => activity.value === request.activity)
        ?.label ?? request.activity;
    const telegramUrl = buildTelegramUrl(
      buildDemoMessage(form.message, request, activityLabel),
    );

    // Tugma bosilgan zahoti ochiladi — brauzer buni qalqib chiquvchi oyna deb
    // to'smaydi. To'sib qo'ysa, quyidagi holatda havola tugma bo'lib turadi.
    window.open(telegramUrl, "_blank", "noopener,noreferrer");
    setState({ status: "sent", telegramUrl });
  };

  if (state.status === "sent") {
    return (
      <m.div
        role="status"
        className="flex min-h-80 flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <m.span
          className="grid size-16 place-items-center rounded-full bg-brand-600 text-white shadow-[0_12px_28px_-10px_rgb(109_40_217/0.8)]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 16,
            delay: 0.1,
          }}
        >
          <Icon name="send" className="size-7" />
        </m.span>
        <p className="display mt-6 text-2xl text-ink">{form.successTitle}</p>
        <p className="mt-2 max-w-xs text-pretty text-body">
          {form.successText}
        </p>
        <a
          href={state.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${primaryButton} mt-7 max-w-xs`}
        >
          {form.openTelegram}
          <Icon name="arrowRight" className="size-[1.1em]" />
        </a>
      </m.div>
    );
  }

  const describe = (field: DemoRequestField) => {
    const hasError = state.invalid.includes(field);

    return {
      inputProps: {
        id: `${id}-${field}`,
        name: field,
        required: true,
        "aria-invalid": hasError || undefined,
        "aria-describedby": hasError ? `${id}-${field}-error` : undefined,
      },
      error: hasError && (
        <p id={`${id}-${field}-error`} className="mt-1.5 text-sm text-loss">
          {form.errors[field]}
        </p>
      ),
    };
  };

  const name = describe("name");
  const phone = describe("phone");
  const company = describe("company");
  const activity = describe("activity");

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor={name.inputProps.id} className={labelClass}>
          {form.name}
        </label>
        <input
          {...name.inputProps}
          type="text"
          autoComplete="name"
          placeholder={form.namePlaceholder}
          className={fieldClass}
        />
        {name.error}
      </div>

      <div>
        <label htmlFor={phone.inputProps.id} className={labelClass}>
          {form.phone}
        </label>
        <input
          {...phone.inputProps}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder={form.phonePlaceholder}
          className={fieldClass}
        />
        {phone.error}
      </div>

      <div>
        <label htmlFor={company.inputProps.id} className={labelClass}>
          {form.company}
        </label>
        <input
          {...company.inputProps}
          type="text"
          autoComplete="organization"
          placeholder={form.companyPlaceholder}
          className={fieldClass}
        />
        {company.error}
      </div>

      <div>
        <label htmlFor={activity.inputProps.id} className={labelClass}>
          {form.activity}
        </label>
        <select {...activity.inputProps} defaultValue="" className={fieldClass}>
          <option value="" disabled>
            {form.activityPlaceholder}
          </option>
          {form.activities.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {activity.error}
      </div>

      <button type="submit" className={primaryButton}>
        <Icon name="send" className="size-[1.1em]" />
        {form.submit}
      </button>

      <p className="text-center text-sm text-pretty text-muted">{form.hint}</p>
    </form>
  );
}
