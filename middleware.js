
import { timingSafeEqual } from "node:crypto";

function safeEqual(a, b) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);

  return left.length === right.length &&
    timingSafeEqual(left, right);
}

export default function middleware(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // Protect only the admin page and its subpaths.
  if (path !== "/admin" && !path.startsWith("/admin/")) {
    return;
  }

  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  // Fail closed if credentials have not been configured.
  if (!username || !password) {
    return new Response("Admin authentication is not configured.", {
      status: 503,
    });
  }

  const header = request.headers.get("authorization") || "";
  const match = header.match(/^Basic\s+([A-Za-z0-9+/=]+)$/i);

  if (match) {
    try {
      const decoded = Buffer.from(match[1], "base64").toString("utf8");
      const separator = decoded.indexOf(":");

      if (separator !== -1) {
        const suppliedUser = decoded.slice(0, separator);
        const suppliedPassword = decoded.slice(separator + 1);

        if (
          safeEqual(suppliedUser, username) &&
          safeEqual(suppliedPassword, password)
        ) {
          return;
        }
      }
    } catch {
      // Invalid credentials are rejected below.
    }
  }

  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Sindhu Sharma Admin", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  runtime: "nodejs",
  matcher: ["/admin", "/admin/:path*"],
};
