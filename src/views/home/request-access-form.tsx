"use client";

import { useEffect, useId, useRef, useState, type SubmitEvent } from "react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RequestAccessForm() {
  const emailId = useId();
  const errorId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const confirmationRef = useRef<HTMLParagraphElement>(null);
  const [email, setEmail] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [sent, setSent] = useState(false);

  const valid = EMAIL.test(email.trim());
  const invalid = attempts > 0 && !valid;

  useEffect(() => {
    if (sent) confirmationRef.current?.focus();
  }, [sent]);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempts((count) => count + 1);
    if (valid) setSent(true);
    else inputRef.current?.focus();
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="relative mt-10 md:max-w-md"
    >
      {!sent && (
        <div className="relative flex flex-col gap-2">
          <label htmlFor={emailId} className="sr-only">
            Email address
          </label>
          <input
            ref={inputRef}
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={invalid}
            aria-describedby={invalid ? errorId : undefined}
            className="text-control bg-field caret-green aria-invalid:inset-ring-error focus-visible:bg-field-focus focus-visible:shadow-field-focus aria-invalid:focus-visible:shadow-field-error h-11 w-full rounded-full px-8 text-white placeholder:text-white/57 focus-visible:outline-2 focus-visible:outline-transparent aria-invalid:inset-ring-2 motion-safe:transition-[background-color,box-shadow] md:h-13 md:pr-44 md:pl-7"
          />
          <button
            type="submit"
            className="text-control bg-green text-page shadow-cta hover:bg-green-hover v-focus h-11 w-full cursor-pointer rounded-full text-center transition-[background-color] active:translate-y-px active:shadow-none md:absolute md:top-1 md:right-1 md:w-43"
          >
            Request Access
          </button>
        </div>
      )}
      <div role="status">
        {sent && (
          <p
            ref={confirmationRef}
            tabIndex={-1}
            className="text-control text-green flex h-24 items-center justify-center md:h-13 md:justify-start"
          >
            Thanks! We&rsquo;ll email you when pod opens.
          </p>
        )}
      </div>
      {invalid && (
        <p
          key={attempts}
          id={errorId}
          role="alert"
          className="text-note text-error absolute inset-x-0 top-full mt-2 md:pl-8"
        >
          Oops! Please check your email
        </p>
      )}
    </form>
  );
}
