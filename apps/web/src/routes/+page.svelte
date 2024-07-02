<script lang="ts">
  import { onMount } from 'svelte';

  import { PUBLIC_TEST_ENV_VAR } from '$env/static/public';
  import Meta from '$lib/components/Meta.svelte';
  import Comments from '$lib/features/comment/Comments.svelte';
  import { commentStore } from '$lib/features/comment/commentStore.svelte';
  import { userStore } from '$lib/features/user/userStore.svelte';
  import { sectionFrameVariants } from '$lib/variants/sectionFrameVariants';

  import CommentForm from './CommentForm.svelte';
  import LoginMessage from './LoginMessage.svelte';

  const meta = {
    type: 'website' as const,
    title: `WebApp Template (web)`,
    canonical: 'https://webapp-template.usagizmo.com',
  };

  onMount(() => {
    commentStore.fetchComments();
  });
</script>

<h3>The env var is {PUBLIC_TEST_ENV_VAR}</h3>

<Meta {...meta} />

<div class="mx-auto max-w-[792px] space-y-5">
  {#if userStore.user}
    <CommentForm />
  {:else}
    <LoginMessage />
  {/if}

  <section class={sectionFrameVariants({ pad: 'x' })}>
    <div class="pb-[14px]">
      <!-- attention -->
      <div class="flex items-center justify-center border-b border-slate-200 pt-2.5 pb-2">
        <p class="text-sm text-zinc-500">Comments will be deleted as appropriate.</p>
      </div>

      <Comments />
    </div>
  </section>
</div>
