import InstallButton from "@/components/install-drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function Home() {
  return (
    <div className="grid font-mono grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <InstallButton />
      </main>
      <footer className="row-start-3 flex gap-[24px] w-full flex-wrap items-center justify-center">
        <form className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex gap-2">
              <Input
                id="search-word"
                placeholder="Enter a word to search"
                className="flex-1 min-w-xs"
              />
              <Button type="submit">Search</Button>
            </div>
          </div>
        </form>
      </footer>
    </div>
  );
}
