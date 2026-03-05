export function RootSkeleton() {
  return (
    <div className="bg-background min-h-screen w-full flex flex-col">
      {/* A subtle top loading bar */}
      <div className="w-full h-1 bg-gold/5 overflow-hidden">
        <div className="h-full bg-gold/20 animate-pulse w-1/3" />
      </div>
      <div className="max-w-5xl mx-auto w-full px-4 md:px-4 lg:px-8 mt-20">
        {/* Simple skeleton shapes matching your layout */}
        <div className="h-12 w-48 bg-white/5 rounded-lg animate-pulse mb-6" />
        <div className="h-64 w-full bg-white/5 rounded-2xl animate-pulse" />
      </div>
    </div>
  );
}
