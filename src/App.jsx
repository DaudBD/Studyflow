
import { LuNotebookPen } from "react-icons/lu";
function App() {


  return (
    <header class="sticky top-0 z-40 border-b border-border bg-paper/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" class="flex items-center gap-2">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <LuNotebookPen class="h-5 w-5" />
          </div>
          <span class="font-heading text-lg font-bold text-ink">StudyFlow</span>
        </a>
        <nav class="hidden items-center gap-7 md:flex">
          <a
            href="#features"
            class="text-sm font-medium text-muted hover:text-ink"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            class="text-sm font-medium text-muted hover:text-ink"
          >
            How it works
          </a>
          <a
            href="#pricing"
            class="text-sm font-medium text-muted hover:text-ink"
          >
            Pricing
          </a>
          <a href="#faq" class="text-sm font-medium text-muted hover:text-ink">
            FAQ
          </a>
        </nav>
        <div class="hidden items-center gap-3 md:flex">
          <a
            class="text-sm font-medium text-ink"
            href="/login"
            data-discover="true"
          >
            Log in
          </a>
          <a href="/login" data-discover="true">
            <button class="inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-white hover:bg-primary-hover border border-transparent text-sm px-3 py-1.5 ">
              Get started
            </button>
          </a>
        </div>
        <button class="text-ink md:hidden" aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu"
            aria-hidden="true"
          >
            <path d="M4 5h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 19h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default App
