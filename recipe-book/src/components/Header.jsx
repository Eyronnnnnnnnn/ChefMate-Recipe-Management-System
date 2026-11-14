function ChefHatIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-12 h-12 text-orange-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Chef hat top */}
      <path
        d="M17 31
        C11 30 8 26 8 21
        C8 15 13 11 18 12
        C19 7 23 4 28 4
        C33 4 37 7 38 12
        C39 11 41 11 43 11
        C49 11 54 15 54 21
        C54 26 51 30 46 31"
      />

      {/* Bottom of hat */}
      <path d="M17 31V48H47V31" />

      {/* Hat details */}
      <path d="M25 31V40" />
      <path d="M32 31V40" />
      <path d="M39 31V40" />
    </svg>
  );
}

export default function Header() {
  return (
    <div className="w-full h-24 px-14 flex items-center border-b border-gray-500/30">

      {/* Logo + Title */}
      <div className="flex items-center gap-4 flex-1">
        <ChefHatIcon />

        <h1 className="text-2xl font-bold text-gray-900">
          Recipe Book
        </h1>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8">

        <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm">
          All
        </button>

        <button className="flex items-center gap-2 text-sm text-gray-700">
          ♡
          Favorites
        </button>

        <button className="flex items-center gap-2 text-sm text-gray-700">
          +
          My Recipes
        </button>

      </div>

    </div>
  );
}