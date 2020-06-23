<script context="module">
  let total = 0

  export const getPostTitle = (title = '', isNew) => `${title.toUpperCase()}${isNew ? '(new)' : ''}`
  export const getTotal = () => total
</script>

<script>
  export let title = ''

  total += 1
  
  let titleFormatted = getPostTitle(title)
</script>

<style>
  .post__container {
      display: inline-block;
      background: #eee;
      padding: 10px;
      width: 375px;
      margin-bottom: 16px;
  }
</style>

<article>
  <div class="post__container">
    <h2>
      {titleFormatted}
    </h2>
    <p>An incredible content 🧭</p>
  </div>
</article>
