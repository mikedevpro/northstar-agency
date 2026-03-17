import {
  figmaShowcase,
  placeholderFigmaEmbedUrl,
  placeholderFigmaFileUrl,
} from "../data/content";
const embedPrefix = "/embed?embed_host=share&url=";

export default function FigmaShowcase() {
  const configuredValue = (figmaShowcase.figmaUrl || "").trim();
  const isPlaceholder =
    configuredValue === placeholderFigmaEmbedUrl ||
    configuredValue === placeholderFigmaFileUrl;

  const decodeIfPossible = (value) => {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  };

  const isEmbedUrl = configuredValue.includes(embedPrefix);
  const figmaFileUrl = isEmbedUrl
    ? decodeIfPossible(configuredValue.replace(embedPrefix, ""))
    : configuredValue;
  const figmaEmbedUrl = isEmbedUrl
    ? configuredValue
    : `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(configuredValue)}`;

  const isConfigured =
    configuredValue &&
    !isPlaceholder &&
    configuredValue.startsWith("https://www.figma.com/");

  return (
    <section id="figma" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:items-center">
        <div>
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700/80">Figma source</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {figmaShowcase.title}
          </h2>
          <p className="mt-5 leading-8 text-slate-600">{figmaShowcase.description}</p>
          {isConfigured && (
            <a
              href={figmaFileUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Open Figma file
            </a>
          )}
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-200/70">
          {isConfigured ? (
            <iframe
              title="Figma design"
              src={figmaEmbedUrl}
              className="h-80 w-full rounded-[1.25rem] bg-[#eef3ff]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-80 w-full flex-col items-start justify-center rounded-[1.25rem] bg-[#eef3ff] px-6">
              <p className="text-sm font-medium text-slate-700">No Figma file connected yet.</p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                Add your real Figma share URL in `figmaShowcase.figmaUrl` to show the live embed.
                Current value is a placeholder.
              </p>
              <a
                href={placeholderFigmaFileUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700"
              >
                Update placeholder
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
