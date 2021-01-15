<template>
  <div>
    <h1>Assignment 2</h1>
    <h2>Use <code>document.write()</code></h2>

    <p>
      A few months ago a co-worker shared with me an awesome alternate lipsum
      ipsum site. The
      <a
        href="https://www.bobrosslipsum.com/"
        rel="noopener noreferrer"
        target="_blank"
        >Bob Ross Lipsum</a
      >
      site is great for creating pre-generated text in an organic and uplifting
      way. I hope you enjoy the insights of Mr. Ross below.
    </p>
    <doc />
  </div>
</template>

<script>
import Doc from "@/components/Assignment2Doc";

export default {
  name: "Assignment2",
  components: {
    Doc,
  },
};
</script>