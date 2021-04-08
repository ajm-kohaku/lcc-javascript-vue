<template>
  <div>
    <h1>Hello &amp; Welcome</h1>
    <p>
      This little sub-domain recreates the course work I did for a javascript
      class I took at Lansing Community College for Spring 2019. This site is
      built on vuejs so I'll only be able to recreate the spirit of the
      assignments and not necessarily the code as it was originally written. For
      the code as it was submitted, you can check it out on my
      <a
        href="https://github.com/ajm-kohaku/CITW165-javascript"
        target="_blank"
        rel="noopener noreferrer"
        class="app-page-link"
        >github</a
      >
      account.
    </p>
    <p>
      I didn't keep the syllabus from the course. So I'll explain here what I
      remember of each assignment. Use the navigation above to view each
      assignment.
    </p>
    <ul>
      <li>
        <h4>Assignment 1</h4>
        <div>
          The first assignment doesn't links to it. The first assignment created
          the student site itself with dead links to each assignment to be
          filled in as the semester progressed.
        </div>
      </li>
      <li>
        <h4>Assignment 2</h4>
        <div>
          Use <code>document.write()</code> to write a portion of the page.
          Doing that doesn't really make sense in a vue app so I created a
          component to mimic the behavior instead.
        </div>
      </li>
      <li>
        <h4>Assignment 3</h4>
        <div>
          The original intent of this assignment was to learn how to use var.
          However, I'm using vuejs's v-text instead. Enjoy more Bob Ross Ipsum.
        </div>
      </li>
      <li>
        <h4>Assignment 4</h4>
        <div>
          I'm not entirely sure what the objective of this assignment was.
          Looking at the javascript I wrote, I imagine it had something to do
          with using arrays and potentially how to use the
          <code>new Date()</code> function.
        </div>
        <div>
          Because of the way I layed out my site originally, I ran into a css
          problem with the sidebar that neither google or my professor could
          help me with. Luckily I know a Senior Front-End Developer and she
          helped me figure everything out. It turned into such an interesting
          problem that she brought it up at a few talks on css later in the
          year.
        </div>
      </li>
      <li>
        <h4>Assignment 5</h4>
        <div>
          This assignment had to do with conditionals using
          <code>if/else/else if</code>
        </div>
        <div>
          In addition to the grading rubric conditional, I used vue conditionals
          to display text.
        </div>
      </li>
      <li>
        <h4>Assignment 6</h4>
        <div>
          This incorporated <code>for loop</code> and adding classes through
          javascript
        </div>
        <div>
          Oh boy, lots of changes on this one. I did this one by using
          <code>v-for</code> on a list object and adding <code>:class</code> to
          assign classes on the fly. I also played around with the
          <code>mounted()</code> function to add a class on load and assign 2
          list items.
        </div>
      </li>
      <li>
        <h4>Assignment 7</h4>
        <div>
          We were introduced to <code>document.addEventListener()</code> in this
          assignment. The original events used were: click, input, and onkeyup.
          In vue, I used the vue <code>@click</code> directive to trigger the
          click event for the record/play button. And <code>v-model</code> for
          the input and onkeyup events to two-way bind an input to a div tag.
        </div>
      </li>
      <li>
        <h4>Assignment 8</h4>
        <div>
          I still have the physical copy of this book, and I had to look up what
          we might have been trying to accomplish here. It looks like we started
          using jquery here and learned how to delegate events in jquery. I'm
          not writing jquery on this site, so I'm doing the vuejs equivalent.
          <p>
            I created a component for the list items and used v-for to display
            the array of components. Instead of using jquery's animate function,
            I used css keyframes. What triggers deleting the list item was also
            changed. Now, you have to click the trashcan in order to delete the
            game from the list. Since the trashcan is inside of a component, I
            used emit to trigger the list item should be deleted. Also, I used
            the html code instead of a background image for the trashcan.
          </p>
        </div>
      </li>
      <li>
        <h4>Assignment 9</h4>
        <div>
          This was a rather interesting assignment. It was broken down into
          three distinct pieces. 1st, create an accordion style list. 2nd,
          create a way to add data to a .json file. The finished product of
          this, however, only creates a basic form that goes no where... because
          the internet yo. And lastly, create a photo viewer. I had the most fun
          with this last exercise.
          <p>
            Part 1 displays when the main assignment page is loaded. For this
            one, I created an accordion component that I reused for each example
            text.
          </p>
          <p>
            Part 2 clicks off the "Local Storage Example". That's just a very
            basic form, with no validation that takes you to a "Thank You" page.
          </p>
          <p>
            Part 3 loads 3 images with two sizes; a square thumbnail, and the
            full image. I used a mouseover event to trigger the larger view to
            change using 2 way bindings. The assignment also calls for creating
            a modal so I used bootstrap to create a modal with an even larger
            version of the image. I did a bit of sass manipulation to override
            the default modal max width. It's not perfect but it gets the point
            across.
          </p>
        </div>
      </li>
      <li>
        <h4>Assignment 10</h4>
        <div>
          The last assignment created a form. It didn't have to go anywhere. For
          this, I'll use bootstrap's form validation techniques. It still
          doesn't go anywhere though.
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>