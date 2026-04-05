/** Matches server/api-plugin.ts — used for static hosting (GitHub Pages) via FormSubmit. */
const FORMSUBMIT_RECIPIENT = "donatellodetroitpizza@outlook.com";

function safeParseJson(text: string): Record<string, unknown> {
  if (!text.trim()) return {};
  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    return {};
  }
}

/** FormSubmit often returns HTTP 200 with { success: "false", message: "..." }. */
function jsonBodyIndicatesFailure(data: Record<string, unknown>): boolean {
  if (data.ok === false) return true;
  if (data.success === false || data.success === "false") return true;
  return false;
}

function errorTextFromBody(data: Record<string, unknown>, fallback: string): string {
  if (typeof data.message === "string" && data.message.trim()) {
    return data.message.trim();
  }
  if (typeof data.error === "string" && data.error.trim()) {
    return data.error.trim();
  }
  return fallback;
}

async function postSubscribeJson(
  url: string,
  body: Record<string, unknown>
): Promise<{ ok: true } | { ok: false; error: string }> {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = safeParseJson(await res.text());
  if (!res.ok) {
    return {
      ok: false,
      error: errorTextFromBody(data, "Algo salió mal, intenta de nuevo."),
    };
  }
  if (jsonBodyIndicatesFailure(data)) {
    return {
      ok: false,
      error: errorTextFromBody(data, "Algo salió mal, intenta de nuevo."),
    };
  }
  return { ok: true };
}

async function submitViaWeb3Forms(
  accessKey: string,
  email: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "Donatello Pizza — reclamo 10% (banner)",
      from_name: "Banner promocional",
      email,
      message: `Suscriptor al banner 10%: ${email}`,
    }),
  });
  const data = safeParseJson(await res.text());
  if (res.ok && data.success === true) return { ok: true };
  const err =
    (typeof data.message === "string" && data.message) ||
    "Algo salió mal, intenta de nuevo.";
  return { ok: false, error: err };
}

async function submitViaFormSubmit(
  email: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  const url = `https://formsubmit.co/ajax/${encodeURIComponent(FORMSUBMIT_RECIPIENT)}`;
  return postSubscribeJson(url, {
    _subject: "Donatello Pizza — reclamo 10% (banner)",
    _replyto: email,
    _captcha: "false",
    email,
    message: `Suscriptor al banner 10%: ${email}`,
  });
}

/**
 * Dev: Vite middleware /api/subscribe.
 * Production (static): FormSubmit → FORMSUBMIT_RECIPIENT, or override with env.
 */
export async function submitBannerLead(
  email: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  const customUrl = import.meta.env.VITE_SUBSCRIBE_URL?.trim();
  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

  if (import.meta.env.DEV) {
    return postSubscribeJson("/api/subscribe", { email });
  }

  if (customUrl) {
    return postSubscribeJson(customUrl, { email });
  }

  if (web3Key) {
    return submitViaWeb3Forms(web3Key, email);
  }

  return submitViaFormSubmit(email);
}
