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

**Remaining time:** Bonus office hours for HW1.
