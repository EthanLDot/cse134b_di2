## Accessibility Exercise

Two of the best-selling vehicles in the United States are the **Toyota RAV4** (475k units in 2024) and the **Honda CR-V** (402K units in 2024). Visit [toyota.com](https://www.toyota.com) and [automobiles.honda.com](https://automobiles.honda.com/) (confusingly enough, honda.com redirects to the home page of the Honda conglomerate) and, **without using the mouse or scroll wheel**, determine the **starting price of the most expensive trim/version** of each of the models. Leave some general comments on which manufacturer did a better job with accessibility, and some pain points you might have encountered in each.

---
Now try using [https://www.braunability.com/us/en.html](https://www.braunability.com/us/en.html) to find the base price of one of their Toyota Sienna modified minivans. BraunAbility is a mobility company that specializes in wheelchair-accessible vans and wheelchair lifts. How easy was it? Or rather, how difficult?

---

### Accessibility Tree Overview

> “The accessibility tree is a tree of accessibility objects that assistive technology can query for attributes and properties and perform actions on.”  
> In other words, it’s a simplified derivative of the DOM tree that removes nodes with no semantically meaningful content, showing the assistive technology’s view of your webpage.

**To access it on modern versions of Chrome:**  
[Chrome Developers: Full Accessibility Tree](https://developer.chrome.com/static/blog/full-accessibility-tree/video/gGNVLl64MBQvhaYBXAAuRiOs3r92/XQNBCFrPG8YqNSOloDE8.mp4)

---

### Comparing Accessibility Trees

The `divitis`, `mystery1`, and `mystery2` folders are all functionally and (mostly) visually identical. Take a quick look at **divitis** first, and try to access the accessibility tree.

**Question:** Is it obvious from this alone how the page was meant to be organized?  

---

Now throw up the accessibility trees for both **mystery1** and **mystery2** and compare them both. Which of the two makes the page structure easier to understand? Clearly list out at least two changes that were made to enhance the accessibility tree structure.

---

### Discussion

Hopefully one of your responses (big hint!) is the **introduction of ARIA attributes**.  
You will **not** be required in this course (as far as I am aware) to write your own ARIA attributes or roles.

**Class Discussion:**  
Why do you think  
a) Prof. Powell might want to exclude it?  
_(Hint: [MDN: ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA))_  
and  
b) Why might I still be talking about it?

---

### Tampermonkey Demo

Hopefully by the end of this discussion you should easily be able to earn at least some extra credit for HW1.

Tampermonkey is easy to install as an extension for Chrome and some non-Chrome browsers.

Feel free to copy the contents of tampermonkey.js directly into the first created script. Then visit the homepage realethanlee.dev to see if there's any obvious effect.

Once you feel comfortable with Tampermonkey and how it works, figure out how to do the following:

a) Change the header of webaim.org to a similar effect. Note that for whatever reason when I created realethanlee.dev I made the modifiable text an h2 element. webaim.org, in contrast, uses h1 so you will need to create an additional const h1 variable. HINT: You will need to add a new @match entry.

b) Try https://realethanlee.dev/about_me. Do you see the script working there? If not, look in the original script for a GIANT hint and implement the needed changes.

c) Using google or LLM of your choice, figure out how you can get all paragraph/p elements on the page. Change them all to use the "Chiller" font. Make sure this works for both my website and webaim.


**Remaining time:** Bonus office hours for HW1.
