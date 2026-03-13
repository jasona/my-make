export default function Current() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="text-center">
        <p className="text-neutral-600 text-sm font-mono tracking-widest uppercase mb-3">
          My Make
        </p>
        <p className="text-neutral-400 text-base">
          Run <code className="text-neutral-200 bg-neutral-800 px-1.5 py-0.5 rounded text-sm">/make</code> to generate a component
        </p>
      </div>
    </div>
  )
}
