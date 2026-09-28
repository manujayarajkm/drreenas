import React from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

interface ThemeToggleProps {
  className?: string
  variant?: "topbar" | "navbar" | "expanded"
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  variant = "navbar",
}) => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  if (variant === "topbar") {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all duration-200 border ${
          isDark
            ? "bg-amber-400/10 border-amber-400/40 text-amber-300 hover:bg-amber-400/20 shadow-sm shadow-amber-400/10"
            : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
        } ${className}`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span className="relative flex items-center justify-center w-3.5 h-3.5">
          {isDark ? (
            <Sun className="w-3.5 h-3.5 text-amber-400 animate-in spin-in-180 duration-300" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-sky-300 animate-in spin-in-180 duration-300" />
          )}
        </span>
        <span className="tracking-wide">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
    )
  }

  if (variant === "expanded") {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
          isDark
            ? "bg-slate-800/90 text-amber-300 hover:bg-slate-800"
            : "bg-slate-100 text-slate-800 hover:bg-slate-200"
        } ${className}`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span className="flex items-center gap-2.5">
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-sky-600" />
          )}
          <span>{isDark ? "Appearance: Dark Mode" : "Appearance: Light Mode"}</span>
        </span>
        <span className="text-xs px-2 py-0.5 rounded-md bg-background text-foreground border border-border">
          {isDark ? "Switch to Light" : "Switch to Dark"}
        </span>
      </button>
    )
  }

  // Default "navbar" variant: sleek circular icon toggle
  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-all duration-200 border ${
        isDark
          ? "bg-slate-800/90 border-slate-700/80 text-amber-300 hover:bg-slate-800 hover:text-amber-200 shadow-sm"
          : "bg-slate-100 border-slate-200/80 text-slate-700 hover:bg-slate-200 hover:text-slate-900 shadow-sm"
      } ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  )
}
