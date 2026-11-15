import Image from "next/image";

export function Avatars({ sources, size = 32 }: { sources: string[]; size?: number }) {
  return <span className="inline-flex -space-x-2" aria-hidden="true">
    {sources.map((source) => (
      <Image key={source} src={source} alt="" width={size} height={size} className="shrink-0 rounded-full object-cover" />
    ))}
  </span>;
}
