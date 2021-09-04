<script>
  export let title;
  export let textColor;
  export let backGroundColor;
  export let URL;
</script>

<a href={URL} style="color: {textColor}; background: {backGroundColor};"
  >{title}</a
>

<style>
  a {
    text-decoration: inherit;
    color: inherit;
    display: block;
    margin: 10px;
    padding: 30px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 600;
  }
</style>
