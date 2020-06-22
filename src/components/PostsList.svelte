<script>
  import Post, { getTotal } from './Post.svelte'
  const posts = ['a post', 'a newer post']

  window.getTotal = getTotal
</script>

<h1>Today's feed!</h1>

{#each posts as post}
  <Post title={post} />
{/each}

