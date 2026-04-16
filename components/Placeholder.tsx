interface Props { title: string }

export default function Placeholder({ title }: Props) {
  return (
    <div className="min-h-svh flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="eyebrow mb-4">In Arbeit</p>
        <h1 className="font-serif text-h1 font-normal text-navy leading-tight m-0 mt-3">
          {title}
        </h1>
        <p className="font-sans text-body text-warmgray leading-loose mt-4">
          Diese Seite wird in Phase 2 aufgebaut.
        </p>
      </div>
    </div>
  )
}
