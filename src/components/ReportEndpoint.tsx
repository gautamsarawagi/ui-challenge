import { useMemo } from "react";
import { ReportEndpointProps } from "../types";

export function ReportEndpoint({
  endpoint: { url, duration, status },
}: ReportEndpointProps) {
  const styles = useMemo(
    () =>
      status === "SUCCESS"
        ? "border-green-600"
        : "border-red-600",
    [status]
  );

  return (
    <div
      className={`flex p-4 bg-gray-100 text-sm justify-between border-l-2 ${styles}`}
    >
      <code className="text-gray-600">
        {"{{METHOD}}"} {url}
      </code>
      <code className="text-gray-400">{Math.round(duration / 1000)}s</code>
    </div>
  );
}
