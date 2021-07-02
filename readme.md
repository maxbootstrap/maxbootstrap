# MaksucoCSS CSS/JS Helpers
Remember to add/replace your **variables** before importing, 
and then **@import '../node_modules/bootwind/compiled';** or what ever you path is

---
# CSS

## Grid
Use **[Bootstrap 4](https://getbootstrap.com/docs/4.3/layout/grid/)** docs for the grid and is divided in 24 columns

### Containers
You can use `.container-fluid` and `.container` (centered) and  `.container-max` witch is like fluid but with a limit of 1800px


### Rows
`.row` is not mandatory, but you can use them to divide/group columns in rows


### Columns
Same as Bootstrap 4
`.col-auto`
To get them all in a row `.col` `.col-sm` `.col-md` `.col-lg` `.col-xl`

Or to specify the size of each one
`.col-*` `.col-sm-*` `.col-md-*` `.col-lg-*` `.col-xl-*`



---
### Flex


**Center Items Horizontal:** `.justify-start` `.justify-end` `.justify-center` `.justify-between` `.justify-around`

**Center Items Vertical:** `.content-start` `.content-end` `.content-center` `.content-between` `.content-around` 

**Center Self Horizontal:** `.items-start` `.items-end` `.items-center` `.items-baseline` `.items-stretch`

**Center Self Vertical:** `.self-start` `.self-end` `.self-center` `.self-baseline` `.self-stretch` 


**Others:**


---
### Display

`.hidden` `.block` `.inline` `.inline-block` `.table` `.table-row` `.table-cell`

Create a new line to break to div's for example `.breakline`

Also you can target mobile `.sm-*` or desktop `.md-*` only



---
### Widths and Heights
Positions uses **px** as measures

You can use `.w-*` `.h-*` `.min-w-*` `.max-h-*`

You can use`.w-auto` `.w-full` `.w-half` `.w-third` `.w-fourth` `.w-screen`

Eliminate w `.w-unset`, set w same as content `.w-fit`

And also .w-* with gives options in px

**Available in px:**
`0, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 150, 200, 225, 250, 275, 300, 325, 350, 375, 400, 450, 500, 600, 700, 800, 900, 1000`

The same works for `.h`



---
### Position
Positions uses **px** as measures
You can use `.absolute` `.relative` `.fixed`

For absolute you can also `.absolute-t` `.absolute-tl` `.absolute-tr` `.absolute-tc` witch centers on horizontal

`.absolute-b` `.absolute-bl` `.absolute-br` `.absolute-bc` witch centers on horizontal

You can also use `.absolute-c` witch centers on horizontal and vertical, also for just horizontal `.absolute-hc` and just vertical  `.absolute-vc`

You can add more `.top-*` `.bottom-*` `.left-*` `.right-*`
Also `.top-auto`  `.top-center` `.bottom-auto`  `.bottom-center` `.left-auto`  `.left-center` `.right-auto`  `.right-center``

For z-index you can use `.z-*` 10, 20, 30...90, 100 and 1000


---
### Margins and Paddings
Margins uses **rem** as measures

You can use `.m-` `.mt-` `.mb-` `.ml-` `.mr-`... and negative margins `.m--`

Also you can target mobile `.sm-m-*` or desktop `.md-m-*` only

You can use `.p-` `.pt-` `.pb-` `.pl-` `.pr-`

Also you can target mobile `.sm-p-*` or desktop `.md-p-*` only

**Sizes:** 0.25rem, 0.5rem, 0.75rem, 1rem, 1.25rem, 1.5rem, 1.75rem, 2rem, 2.25rem, 2.5rem, 2.75rem, 3rem, 4rem, 5rem, 6rem, 7rem, 8rem, 9rem, 10rem, 11rem;



---
### Text
Margins uses **rem** as measures

**Sizes:** `.text-xs` `.text-sm` `.text-normal` `.text-lg` `.text-xl` `.text-2x` `.text-3x` `.text-4x` `.text-5x` `.text-6x` also `.small`


**Weight:** `.text-normal` `.text-light` `.text-bold` `.text-bolder`


**Align:** `.text-left` `.text-center` `.text-right` `.text-justify`


**Transform:** `.normal` `.italic` `.uppercase` `.lowercase` `.capitalize` `.underline` `.line-through`


**Line Height:** `.line-none` `.line-10` `.line-11` `.line-12` `.line-13` `.line-14` `.line-15` `.line-16` `.line-17` `.line-18` `.line-19` `.line-20` `.line-25` `.line-30`


**Letter Spacing:** `.letter-spacing-xs` `.letter-spacing-sm` `.letter-spacing-normal` `.letter-spacing-lg` `.letter-spacing-xl`

With all classes you can also use it with  `.md-*` to target desktop





---
### Buttons

Use `.btn`

**Aditional Sizes:** `.btn-xs`, `.btn-sm` `.btn-lg` `.btn-xl`.

**Available Colors:** primary, secondary, black, white, gray, blue, indigo, purple, red, green, teal, yellow, orange, white and white.

**.btn:** Use `.btn` combine with `.btn-*` with variants

You can use `.btn-dark` or `.btn-light` OR JUST `.btn`,  and then apply `.bg-*` and `.text-*` or even `.bg-gradient-*` or `.bg-gradient-transparent-*` (also invert the colors)




---
### Badges

Use `.badge`

**Aditional Sizes:** `.badge-xs`, `.badge-sm` `.badge-lg` `.badge-xl`.

**Available Colors:** `.badge-dark`, `.badge-light`

You can use `.badge-dark` or `.badge-light` OR JUST `.badge`,  and then apply `.bg-*` and `.text-*` or even `.bg-gradient-*`




---
### Colors

**Available Colors:*** Available form: primary, secondary, black, white, gray, blue, indigo, purple, red, green, teal, yellow, orange.

**Text:** `.color-*`, also with variants `.color-gray-100` to `.color-gray-900` (variants not available in black, dark and light.)

You can use .hover-color-* like .hover-color-gray

**BG:** `.bg-*`, Available for: primary, secondary, black, white, gray, blue, indigo, purple, red, green, teal, yellow, orange. and also with variants `.bg-gray-100` to `.bg-gray-900` (not available in black, dark and light.). 
*-500 is the base color of each variant group

You can use .hover-bg-* like .hover-bg-gray

You can use .bg-gradient-* like .bg-gradient-gray

You can also use it with `.md-bg-*` `.md-color-*` `.md-hover-color-*` to target desktop

In some basic colors (black, white, light, dark), is possible to add `*-o` to get the same color but with opacity, like `.bg-white-o` 

**BG Gradient:** `.bg-gradient-*-*`, like `.bg-gradient-gray-teal`. or `.bg-gradient` + `.bg-gradient-circular` with just sets a darker surround


---
### BG Diagonal 

**Clip:** `.bg-diagonal` or you can use `.bg-diagonal-inverse`

```
<div class="bg-light bg-diagonal"></div>
```



---
### Shadows

**Sizes:** `.shadow`, `.shadow-xs` `.shadow-sm` `.shadow-lg` `.shadow-xl` `.shadow-full` (All around)

**OR with Colors:** You can also add colors `.shadow-primary` or `.shadow-light`, etc.. and `.shadow-blue-full` for a all around shadow



---
### BG Images

**Sizes:** `.bg-repeat`, `.bg-no-repeat` `.bg-repeat-x` `.bg-repeat-y` `.bg-repeat-round` `.bg-repeat-space` `.bg-auto` `.bg-contain` `.bg-cover`

**Position:** `.bg-c` `.bg-t` `.bg-b` `.bg-l` `.bg-r` `.bg-tl`, `.bg-tr` `.bg-tc` `.bg-bl` `.bg-br` `.bg-bc`



---
### Images and Media

Use `.img-fluid`

**Sizes:** `.object-contain` `.object-cover` `.object-fill` `.object-none` `.object-scale-down` `.object-top` `.object-bottom` `.object-center` `.object-left` `.object-right` `.object-left-bottom` `.object-left-top` `.object-right-top` `.object-right-bottom` 

**Available Colors:** `.badge-dark`, `.badge-light`

You can use `.badge-dark` or `.badge-light` OR JUST `.badge`,  and then apply `.bg-*` and `.text-*` or even `.bg-gradient-*`





---
### Borders and Rounded/Radius

**Radius:** `.rounded-none` `.rounded-sm` `.rounded` `.rounded-lg` `.rounded-full` `.rounded-circle`.

Also you can target mobile `.sm-*` or desktop `.md-*` only

**Borders:** `.border-none` `.border-0` `.border-1` `.border-2` `.border-3` `.border-4` `.border-t-*` `.border-b-*` `.border-l-*` `.border-r-*`.

**Border Colors:** `.border-black` `.border-dark` `.border-transparent` `.border-blue` `.border-teal` `.border-primary` and all the rest.





---
### Overflow

`.overflow-auto` `.overflow-hidden` `.overflow-visible` `.overflow-scroll` `.overflow-x-auto` `.overflow-y-auto` `.overflow-x-hidden` `.overflow-y-hidden` `.overflow-x-visible` `.overflow-y-visible`

`.scroll-x ` `.scroll-y ` `.scroll-touch ` `.scroll-auto`


---
### Opacity

`.opacity-0` `.opacity-25` `.opacity-50` `.opacity-75` `.opacity-100`

Also you can target desktop `.md-*` only




---
### Filters

`.filters-none` `.filters-blur` `.filters-grayscale` `.filters-contrast` `.filters-saturate` `.filters-sepia`

Also you can use `.hover-filter-*`

[Examples](https://alligator.io/css/css-filter-examples/)




---
### Blend Effects

`.blend-*` and  `.bg-blend-*` like `.blend-overlay` `.bg-blend-hue`

Remember bg-blend only works on same element, it's not photoshop, for that you use .blend-*

[Examples](https://alligator.io/css/exploring-blend-modes/)




---
### List

Use `.list` or `.ul` on `<ul>`

**li Margins:** `.list-m-none` `.list-m-5` `.list-m-10` `.list-m-11` `.list-m-12` `.list-m-13` `.list-m-14` `.list-m-15` `.list-m-20`.

For icons use `.list-fa`

**Options for ul:** `.list-fa-check` `.list-fa-dot` `.list-fa-user` `.list-fa-cross` `.list-fa-plus` `.list-fa-heart` `.list-fa-arrow`

**Options for li:** `.li-fa-check` `.li-fa-dot` `.li-fa-user` `.li-fa-cross` `.li-fa-plus` `.li-fa-heart` `.li-fa-arrow`

For icon colors you can use `.list-fa-gray` or to target `<li>` use `.li-fa-*`




---
### Icons
Font awesome is included

To create layered icons you can use `.icon-layer` with `.icon-badge` `.icon-badge-primary` `.icon-badge-orange` `.icon-calendar` and `.icon-file`, don't forget to put  data-icon="24"

**To create a circle around:**
```
<div class='icon-circle bg-teal-100 p-4'>
  <i class='fal fa-thumbs-up fa-2x color-teal-700'></i>
</div>
```



---
### Animations

`.zoom` `.bg-zoom`



---
### Rotations

`.rotation-90` `.rotation-180` `.rotation-270` 

```
<div class="absolute-tr top-20 right-20 z-10 rotate-270 ">.rotate-270</div>
```



---
# Charts

### Progress

Use `.progress` and `.progress-bar`
in `.progress` you can change the color and height of the BG's
```
<div class="progress block h-1">
  <div class="progress-bar" role="progressbar" style="width: 50%"></div>
</div>
```


---
# Forms

Basic: `.form-basic` `.form-basic-select`
Basic: `.form-clean` `.form-clean-select`
Basic: `.form-muted` `.form-muted-select`
Basic: `.form-inner` `.form-inner-select`

```html
<div class="form-basic required">
  <label for="text">Text Field</label>
  <input type="text" id="text" placeholder="Your Text">
  <small class="form-text text-muted">Something.</small>
</div>
```

Sizes: `.form-lg` `.form-sm`

Position: `.form-inline`

#### Checkboxes and Radios

`.form-checkbox`  `.form-radio` `.form-switch`

**Panels:** `.form-panel`
```html
<figure class="form-panel mt-5">
  <input type="radio" id="plan1" name="panel" value="1">
  <label for="plan1">
   <b>Basic</b><span>5</span><div>Por un Año</div>
  </label>
</figure>
```

#### Selects

To show select as button `.form-select-btn`

#### Big Search Input

`.big-search` with an option of `.typeahead` to add a delete icon and hide search icon
```html
<form role="search" method="" class="big-search typeahead form-lg">
  <input type="search" autofocus="" placeholder="something">
  <i class="fa fa-search"></i>
</form>
```


---
## JS
Includes vue, axis and v-validate V2# maksucocss
