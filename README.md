# jquery_parallax

Use this to automatically shift the background image of a div depending on how far you've scrolled past it to give a parallax type effect.

Requires jQuery in header of page:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
```

Assumes that there is a div somewhere like this:

```html
<style>
  .parallax {
    height: 400px;
    width: 100%;
    background-image: url("SOMEBGIMAGE.jpg");
    background-position-y: 0%;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
  

<div class="parallax">
</div>
```
