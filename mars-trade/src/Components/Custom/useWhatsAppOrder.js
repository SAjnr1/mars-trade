import { useEffect } from "react";

// Her WhatsApp number in international format:
// no "+", no spaces, no dashes, no leading zero. (Ghana: 233 + the number without its 0.)
const WHATSAPP_NUMBER = "233244244332";

// "2026-12-20" -> "20 Dec 2026". Empty becomes "-".
const niceDate = (value) => {
  if (!value) return "-";
  const d = new Date(value + "T00:00:00"); // the time part stops the date shifting a day
  return isNaN(d)
    ? value
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

const clean = (value) => (value || "").trim() || "-";

// Makes the "Send On Whatsapp" button on the custom order page open WhatsApp
// with the message already written. It finds your elements by their class names,
// (the ids #pref, #col, #budget and #date), so your JSX stays exactly as you wrote it.
export default function useWhatsAppOrder() {
  useEffect(() => {
    const form = document.querySelector(".custom-form");
    const button = form && form.querySelector(".custom-btn");
    if (!form || !button) return;

    const what = form.querySelector("#pref");
    const colors = form.querySelector("#col");
    const budget = form.querySelector("#budget");
    const deadline = form.querySelector("#date");

    // Don't allow a deadline in the past (uses the person's local date).
    if (deadline) {
      const now = new Date();
      deadline.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
        .toISOString()
        .split("T")[0];
    }

    const send = () => {
      // "What do you want?" is the one field that must be filled in.
      if (what && !what.value.trim()) {
        what.setCustomValidity("Please tell me what you'd like first.");
        what.reportValidity();
        return;
      }

      const message =
        "Hi! I'd like a custom order.\n" +
        "What: " + clean(what && what.value) + "\n" +
        "Color: " + clean(colors && colors.value) + "\n" +
        "Budget: GH¢ " + clean(budget && budget.value) + "\n" +
        "Deadline: " + niceDate(deadline && deadline.value);

      const link = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
      window.open(link, "_blank", "noopener");
    };

    const clearWarning = () => what && what.setCustomValidity("");

    // The button is a <p> inside a <div>, so make it work with the keyboard too.
    const onKey = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        send();
      }
    };

    button.setAttribute("role", "button");
    button.setAttribute("tabindex", "0");
    button.style.cursor = "pointer";
    button.addEventListener("click", send);
    button.addEventListener("keydown", onKey);
    if (what) what.addEventListener("input", clearWarning);

    return () => {
      button.removeEventListener("click", send);
      button.removeEventListener("keydown", onKey);
      if (what) what.removeEventListener("input", clearWarning);
      button.removeAttribute("role");
      button.removeAttribute("tabindex");
      button.style.cursor = "";
    };
  }, []);
}
