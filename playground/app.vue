<template>
  <div class="container">
    <h2>Fill Colors</h2>
    <ul>
      <li>
        Use the base color:
        <svg-icon name="admin/badge" />
        <svg-icon name="admin/form/bug" />
        <svg-icon name="user/badge" />
      </li>
      <li style="color: teal;">
        Use the text color:
        <svg-icon name="fire" />
        <svg-icon name="path-in-g-fill-monochrome" />
      </li>
      <li>
        Use defined svg with colors:
        <svg-icon name="javascript" />
        <svg-icon name="css3" />
        <svg-icon name="nodejs" />
        <svg-icon name="iconfont/vue-logo" />
      </li>
    </ul>

    <h2>Stroke</h2>
    <ul>
      <li>
        Define a stroke color:
        <svg-icon
          name="user/badge"
          stroke="red"
        />
      </li>
      <li>
        Define a stroke width:
        <svg-icon
          name="user/badge"
          stroke="red"
          stroke-width="2"
        />
      </li>
    </ul>

    <h2>Sizes</h2>
    <ul>
      <li>
        Use the text size:
        <svg-icon name="user/badge" />
      </li>
      <li>
        Use a custom size:
        <svg-icon
          name="user/badge"
          size="3rem"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style>
.container {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.svg-icon {
  margin-left: 0.5rem;
}
</style>
