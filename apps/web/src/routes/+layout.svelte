<script lang="ts">
  import '../app.css';

  import type { Snippet } from 'svelte';

  import Footer from './Footer.svelte';

  let {
    children,
  }: {
    children: Snippet;
  } = $props();
</script>

<!-- <OnAuthStateChange /> -->

<div class="h-screen bg-gray-100 text-zinc-900">
  <div class="flex h-full flex-col">
    <div class="flex flex-1 flex-col">
      <main class="flex-1 pt-[68px] px-4 pb-16 md:pt-10">
        {@render children()}
      </main>

      <Footer />
    </div>
  </div>
</div>
