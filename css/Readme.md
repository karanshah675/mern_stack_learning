# All videos notes

January 15, 2024 

## 👉video 14 - introduction of CSS.

- In this video, the instructor provides a small introduction to CSS (Cascading Style Sheets). CSS is a styling language used to control the appearance of web pages. It allows web developers to define the layout, colors, fonts, and other visual aspects of a website. By separating the presentation style from the HTML structure, CSS enables greater flexibility and consistency in web design. Understanding CSS is essential for creating visually appealing and user-friendly websites.

## 👉video 15 - inline, internal and external CSS.

### 1.Internal CSS:

Internal CSS is applied within the HTML document itself using the `<style>` tag within the `<head>` section. It allows you to define styles for a specific HTML document.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal CSS Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
        }
        h1 {
            color: #333;
        }
    </style>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph with internal CSS.</p>
</body>
</html>

```

### 2.Inline CSS:

Inline CSS is applied directly to a specific HTML element using the `style` attribute. It provides styling on a per-element basis.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inline CSS Example</title>
</head>
<body>
    <h1 style="color: blue; text-align: center;">This is a Heading</h1>
    <p style="font-size: 16px; line-height: 1.5;">This is a paragraph with inline CSS.</p>
</body>
</html>

```

### 3.External CSS:

External CSS is stored in a separate CSS file and linked to the HTML document. This allows for the separation of style and content, making it easier to manage and maintain styles across multiple pages.

**HTML File:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph with external CSS.</p>
</body>
</html>

```

**CSS File (styles.css):**

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
}

h1 {
    color: #333;
}

```

## 👉video 16 - shoutout to guy who made exercise-1.

## 👉video 17 - Selectors in CSS.

### 1. **Universal Selector (\*)**:

- Selects all elements on the page.
- Example:
    
    ```css
    * {
        margin: 0;
        padding: 0;
    }
    
    ```
    

### 2. **Type Selector (Element Selector)**:

- Selects all instances of a specified HTML element.
- Example:
    
    ```css
    p {
        color: blue;
    }
    
    ```
    

### 3. **Class Selector (.)**:

- Selects elements with a specific class attribute.
- Example:
    
    ```css
    .highlight {
        background-color: yellow;
    }
    
    ```
    

### 4. **ID Selector (#)**:

- Selects a single element with a specific ID attribute.
- Example:
    
    ```css
    #header {
        font-size: 24px;
    }
    
    ```
    

### 5. **Descendant Selector ( )**:

- Selects an element that is a descendant of another specified element.
- Example:
    
    ```css
    article p {
        font-style: italic;
    }
    
    ```
    

### 6. **Child Selector (>)**:

- Selects an element that is a direct child of another specified element.
- Example:
    
    ```css
    nav > ul {
        list-style-type: none;
    }
    
    ```
    

### 7. **Adjacent Sibling Selector (+)**:

- Selects an element that is directly preceded by a specified element.
- Example:
    
    ```css
    h2 + p {
        font-weight: bold;
    }
    
    ```
    

### 8. **Attribute Selector ([attr=value])**:

- Selects elements with a specific attribute and value.
- Example:
    
    ```css
    input[type="text"] {
        border: 1px solid #ccc;
    }
    
    ```
    

### 9. **Pseudo-classes (:)**:

- Selects elements based on their state or position.
- Example:
    
    ```css
    a:hover {
        color: red;
    }
    
    ```
    

### 10. **Pseudo-elements (::)**:

```
- Selects a specific part of an element.
- Example:
  ```css
  p::first-line {
      font-weight: bold;
  }
  ```

```

- to understand more selectors go to [Selector in css](https://www.w3schools.com/css/css_selectors.asp)

January 16, 2024 

## 👉video 18 - Box model in CSS.

Certainly! Here are some notes on the CSS Box Model, `box-sizing: border-box`, and margin collapse:

### 1. **CSS Box Model:**

- The CSS Box Model is a fundamental concept in web design and layout.
- It describes the layout of elements in a webpage as a box, consisting of content, padding, border, and margin.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/448d7fcf-bd42-4070-b17d-71bec52d429e/c18f0f19-4209-430d-9e93-c808da8c4763/Untitled.png)

- **Content:** The actual content of the box, where text and images appear.
- **Padding:** Clear space around the content, inside the border.
- **Border:** A border surrounding the padding (if any).
- **Margin:** Clears an area outside the border, preventing interaction with adjacent elements.

### 2. **`box-sizing: border-box`:**

- By default, the `box-sizing` property is set to `content-box`.
- With `box-sizing: border-box`, the total width and height of an element include padding and border, not just the content.
- This makes it easier to work with sizing elements, as you can explicitly set the width and height without worrying about adding padding and border separately.

```css
/* Default: content-box */
box-sizing: content-box;

/* Including padding and border in the total width and height */
box-sizing: border-box;

```

### 3. **Margin Collapse:**

- **Margin collapse** occurs when the top and bottom margins of adjacent block-level elements overlap, and the larger margin value is applied, while the smaller is ignored.
- It doesn't happen with padding, borders, or inline elements.
- Consider the following scenario:

```html
<div style="margin-bottom: 20px;"></div>
<div style="margin-top: 30px;"></div>

```

- The effective margin between these two divs will be 30px (the larger margin value).
- To prevent margin collapse, you can use techniques such as adding padding or border to one of the elements, or using clearfix solutions.

 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/448d7fcf-bd42-4070-b17d-71bec52d429e/dfc3c2fc-ad24-4f6a-8b9f-2dc2580184f2/Untitled.png)

## 👉video 19 - font and text properties in CSS.

### 1. **Fonts in CSS:**

- **Font Family:**
    - Specifies the typeface or font family for an element.
    - Multiple font family values can be specified as a fallback in case the browser doesn't support the first choice.
    
    ```css
    font-family: "Helvetica", Arial, sans-serif;
    
    ```
    
- **Font Size:**
    - Sets the size of the font.
    - It can be specified in various units like pixels (`px`), ems (`em`), or percentages (%).
    
    ```css
    font-size: 16px;
    
    ```
    
- **Font Style:**
    - Italicizes the text if set to `italic`.
    
    ```css
    font-style: italic;
    
    ```
    
- **Font Weight:**
    - Defines the thickness of the characters.
    - Values can be normal, bold, bolder, lighter, or numeric values from 100 to 900.
    
    ```css
    font-weight: bold;
    
    ```
    
- **Font Variant:**
    - Controls the use of small caps.
    
    ```css
    font-variant: small-caps;
    
    ```
    

### 2. **Text Property in CSS:**

- **Color:**
    - Sets the color of the text.
    
    ```css
    color: #333;
    
    ```
    
- **Text Alignment:**
    - Aligns text within its containing element.
    
    ```css
    text-align: center;
    
    ```
    
- **Text Decoration:**
    - Controls text underlining, overlining, and line-through.
    
    ```css
    text-decoration: underline;
    
    ```
    
- **Text Transformation:**
    - Changes the capitalization of text.
    
    ```css
    text-transform: uppercase;
    
    ```
    
- **Line Height:**
    - Sets the height of a line of text.
    
    ```css
    line-height: 1.5;
    
    ```
    
- **Letter Spacing:**
    - Adjusts the space between characters.
    
    ```css
    letter-spacing: 2px;
    
    ```
    
- **Word Spacing:**
    - Adjusts the space between words.
    
    ```css
    word-spacing: 4px;
    
    ```
    
- **Text Shadow:**
    - Adds a shadow to the text.
    
    ```css
    text-shadow: 2px 2px 4px #999;
    
    ```
    
- **Overflow:**
    - Specifies what should happen if the text overflows the containing element.
    
    ```css
    overflow: hidden;
    
    ```
    

## 👉video 20 - Exercise-2.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div > p {
        background-color: blue;
        color: white;
      }
      div > p:first-child {
        background-color: yellow;
        color: red;
      }
    </style>
  </head>
  <body>
    <!-- Write html and css code to style a paragraph inside a div which contains 5 other 
paragraphs. 
The first paragraph must have background color yellow and text color red. 
The other paragraphs must have background color blue and text color white. 
The HMTL is written below for your reference. Do not change this html -->

    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        explicabo consectetur dicta fuga ea at vitae suscipit, repellendus illum
        deleniti laboriosam ipsa distinctio.
      </p>
      <p>I am another para</p>
      <p>I am also another para</p>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        explicabo consectetur dicta fuga ea at vitae suscipit, repellendus illum
        deleniti laboriosam ipsa distinctio.
      </p>
      <p>I am another para</p>
      <p>I am also another para</p>
    </div>
  </body>
</html>
```

## 👉video 21 - specificity and cascade.

### CSS Specificity and Cascade

**Specificity:**

CSS specificity is a crucial concept in web development, determining the priority of styles when multiple conflicting rules apply to an HTML element. It is calculated based on the types of selectors used in a CSS rule. Understanding specificity is essential for precise styling.

1. **Inline Styles:**
    - Highest specificity.
    - Applied directly to an HTML element using the `style` attribute.
2. **ID Selectors:**
    - High specificity.
    - Selected using the `#id` syntax.
3. **Class Selectors:**
    - Medium specificity.
    - Selected using the `.class` syntax.
4. **Element Selectors:**
    - Lowest specificity.
    - Selected using the HTML element name.

**Inline Style > ID Selector > Class or Attribute Selector > Element Selector > Universal Selector**

**Example:**

```css
#header {
  color: red; /* High specificity */
}

.header {
  color: blue; /* Medium specificity */
}

div {
  color: green; /* Low specificity */
}

```

**Cascade:**

The cascade in CSS refers to the order in which styles are applied to HTML elements. It follows a specific hierarchy, ensuring that styles are inherited and overridden in a predictable manner.

1. **Order of Importance:**
    - **Inline Styles:** Applied directly to an element, taking the highest precedence.
    - **Internal Stylesheet:** Styles defined within a `<style>` tag in the HTML document.
    - **External Stylesheet:** Linked external stylesheets, considered last in the cascade.
2. **Specificity Rules:**
    - Styles with higher specificity take precedence over those with lower specificity.
    - If specificity is equal, the last defined rule in the stylesheet wins.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    #header {
      color: red; /* High specificity */
    }

    .header {
      color: blue; /* Medium specificity */
    }

    div {
      color: green; /* Low specificity */
    }
  </style>
</head>
<body>
  <div id="header" class="header">Hello, CSS!</div>
</body>
</html>

```

## **The Cascade Algorithm**

CSS stands for Cascading Stylesheets. The cascade is the algorithm for solving conflicts where multiple CSS rules apply to an HTML element. It's the reason that the text of the button styled with the above CSS will be purple.

Understanding the cascade algorithm helps you understand how the browser resolves conflicts like this. The cascade algorithm has 4 distinct stages.

1. **Position and order of appearance**: the order in which your CSS rules appear
2. **Specificity**: an algorithm that determines which CSS selector has the strongest match
3. **Origin**: the order in which CSS appears and where it comes from, whether that is a browser style, CSS from a browser extension, or your authored CSS
4. **Importance**: some CSS rules are weighted more heavily than others, especially with the `!important` rule type

Lets look into all these one by one

### **Specificity Calculation**

To calculate specificity, assign a value to each part of the selector:

- Universal Selector: 0
- Element selectors and pseudo-elements: 1
- Class selectors, attribute selectors, and pseudo-classes: 10
- ID selectors: 100
- Inline styles: 1000

## 👉video 22 - sizing units.

### CSS Sizing Units

In CSS, sizing units play a crucial role in determining the dimensions of elements, specifying lengths, and controlling layouts. Choosing the appropriate units is essential for creating responsive and well-designed web pages.

- *1. **Absolute Units:**
- **Pixels (`px`):**
    - Represents a single dot on a computer screen.
    - Provides a fixed and absolute size.
    - Commonly used for defining exact dimensions.
- **Points (`pt`):**
    - Typically used for print styles.
    - Equal to 1/72nd of an inch.
    - Renders differently on various devices due to different screen resolutions.
- **Inches (`in`), Centimeters (`cm`), Millimeters (`mm`):**
    - Rarely used in web design due to varying screen sizes and resolutions.
    - More suitable for print styles.

**2. Relative Units:**

- **Em (`em`):**
    - Relative to the font-size of the nearest parent or the element itself.
    - Well-suited for scalable and accessible designs.
    - 1em is equal to the current font-size.
- **Rem (`rem`):**
    - Relative to the font-size of the root element (`html`).
    - Offers a consistent size throughout the document.
    - Helpful for maintaining a consistent layout.
- **Percentage (`%`):**
    - Relative to the parent element's size.
    - Widely used for responsive layouts.
    - Useful when you want a child element to be a certain percentage of its parent's size.

**3. Viewport Units:**

- **Viewport Width (`vw`) and Viewport Height (`vh`):**
    - Relative to the size of the viewport (the browser window).
    - Useful for creating responsive designs based on the available screen space.
- **Viewport Minimum (`vmin`) and Viewport Maximum (`vmax`):**
    - `vmin` is relative to the smaller dimension (width or height) of the viewport.
    - `vmax` is relative to the larger dimension of the viewport.
    - Helpful for maintaining a balance between width and height in responsive designs.

**Example:**

```css
body {
  font-size: 16px; /* Set a base font size for better scalability */
}

.container {
  width: 80%; /* 80% of the parent element's width */
  max-width: 1200px; /* Maximum width to ensure readability on larger screens */
  margin: 0 auto; /* Center the container horizontally */
}

.box {
  width: 300px; /* Fixed width in pixels */
  padding: 1em; /* Padding relative to font size */
  margin-bottom: 2rem; /* Margin relative to root font size */
}

@media screen and (max-width: 600px) {
  .box {
    width: 100%; /* Responsive width for smaller screens */
  }
}

```

January 18, 2024 

## 👉video 23 - display properties in css.

1. **`display`**: This property sets how an element is displayed. The values include:
    - **`block`**: The element generates a block-level box, meaning it starts on a new line and stretches the full width of its container.
    - **`inline`**: The element generates an inline box, meaning it does not start on a new line and only takes up as much width as necessary.
    - **`inline-block`**: The element generates an inline-level block container. It behaves like an inline element but can have its own width and height.
    - `**none` :** The element will gone from page.
    
    Example:
    
    ```css
    cssCopy code
    div {
        display: block;
    }
    
    span {
        display: inline;
    }
    
    p {
        display: inline-block;
    }
    
    p {
        display: none;
    }
    ```
    
2. **`visibility`**: This property determines whether an element is visible or hidden. Values include:
    - **`visible`**: The element is visible.
    - **`hidden`**: The element is hidden but still takes up space in the layout.
    
    Example:
    
    ```css
    cssCopy code
    .hidden-element {
        visibility: hidden;
    }
    
    ```
    

## 👉video 24 - box-shadow, text-shadow and outline properties in css.

### 1. **`box-shadow`:**

The **`box-shadow`** property is used to add shadows to elements. It takes multiple values to define the shadow's appearance:

```css
cssCopy code
/* Syntax */
box-shadow: h-offset v-offset blur spread color inset;

/* Example */
div {
    box-shadow: 5px 5px 10px #888888;
}

```

- **`h-offset`**: Horizontal offset of the shadow.
- **`v-offset`**: Vertical offset of the shadow.
- **`blur`**: Optional. The blur radius, creating a blurred effect.
- **`spread`**: Optional. The spread radius, which affects the size of the shadow.
- **`color`**: Shadow color.
- **`inset`**: Optional. If present, the shadow will be inset (inside the box).

### 2. **`text-shadow`:**

Similar to **`box-shadow`**, **`text-shadow`** is used to add shadows specifically to text elements:

```css
cssCopy code
/* Syntax */
text-shadow: h-offset v-offset blur color;

/* Example */
h1 {
    text-shadow: 2px 2px 4px #333333;
}

```

- **`h-offset`**: Horizontal offset of the shadow.
- **`v-offset`**: Vertical offset of the shadow.
- **`blur`**: Optional. The blur radius, creating a blurred effect.
- **`color`**: Shadow color.

### 3. **`outline`:**

The **`outline`** property is used to style the outline of an element. It's often used in conjunction with the **`:focus`** pseudo-class for better accessibility:

```css
cssCopy code
/* Syntax */
outline: width style color;

/* Example */
input:focus {
    outline: 2px solid #3498db;
}

```

- **`width`**: The width of the outline.
- **`style`**: The style of the outline (e.g., **`dotted`**, **`dashed`**, **`solid`**).
- **`color`**: The color of the outline.

## 👉video 25 - list style properties in css.

### `list-style`:

The `list-style` property is shorthand for setting the individual properties related to list items.

```css
/* Syntax */
list-style: list-style-type list-style-position list-style-image;

```

- `list-style-type`: Specifies the appearance of the list item marker. Values include:
    - `none`: No marker.
    - `disc`: A filled circle.
    - `circle`: An unfilled circle.
    - `square`: A filled square.
    - `decimal`: Decimal numbers (1, 2, 3, ...).
    - `decimal-leading-zero`: Decimal numbers with leading zeros (01, 02, 03, ...).
    - `lower-roman`: Lowercase Roman numerals (i, ii, iii, ...).
    - `upper-roman`: Uppercase Roman numerals (I, II, III, ...).
    - `lower-alpha`: Lowercase letters (a, b, c, ...).
    - `upper-alpha`: Uppercase letters (A, B, C, ...).

```css
/* Example */
ul {
    list-style-type: square;
}

```

- `list-style-position`: Specifies the position of the list item marker. Values include:
    - `outside`: The marker is outside the content flow.
    - `inside`: The marker is inside the content flow.

```css
/* Example */
ol {
    list-style-position: inside;
}

```

- `list-style-image`: Specifies an image as the list item marker. You can use `url()` to provide the path to the image.

```css
/* Example */
ul {
    list-style-image: url('bullet.png');
}

```

### Individual List Properties:

If you prefer, you can use individual properties for more control:

- `list-style-type`: Specifies the list item marker type.
- `list-style-position`: Specifies the position of the list item marker.
- `list-style-image`: Specifies an image as the list item marker.

```css
/* Example */
ul {
    list-style-type: square;
    list-style-position: inside;
    list-style-image: url('bullet.png');
}

```

## 👉video 26 - overflow properties in css.

### 1. **`overflow`:**

The **`overflow`** property specifies how content that overflows the element's box should be handled.

```css
cssCopy code
/* Syntax */
overflow: visible | hidden | scroll | auto;

```

- **`visible`**: Default value. Content is not clipped, and it may overflow the box.
    
    ```css
    cssCopy code
    /* Example */
    .overflow-visible {
        overflow: visible;
    }
    
    ```
    
- **`hidden`**: Content that overflows the box is clipped and not visible.
    
    ```css
    cssCopy code
    /* Example */
    .overflow-hidden {
        overflow: hidden;
    }
    
    ```
    
- **`scroll`**: Adds a scrollbar to the box, allowing the user to scroll to see the clipped content.
    
    ```css
    cssCopy code
    /* Example */
    .overflow-scroll {
        overflow: scroll;
    }
    
    ```
    
- **`auto`**: Similar to **`scroll`**, but a scrollbar is added only if the content overflows the box.
    
    ```css
    cssCopy code
    /* Example */
    .overflow-auto {
        overflow: auto;
    }
    
    ```
    

### 2. **`overflow-x` and `overflow-y`:**

The **`overflow`** property can be applied separately to the horizontal (**`x`**) and vertical (**`y`**) axes using **`overflow-x`** and **`overflow-y`**.

```css
cssCopy code
/* Example */
.overflow-x-scroll {
    overflow-x: scroll;
}

.overflow-y-hidden {
    overflow-y: hidden;
}

```

These properties are useful when you want to control the overflow behavior independently in the horizontal and vertical directions.

## 👉video 27 - Exersice-2 shoutout.

## 👉video 28 - position property in css.

### `position` Property:

The `position` property in CSS is used to specify the positioning method of an element within its containing element. It works in conjunction with other properties like `top`, `right`, `bottom`, and `left` to determine the final placement.

```css
/* Syntax */
position: static | relative | absolute | fixed | sticky;

```

- `static`: Default value. The element is positioned according to the normal flow of the document.
    
    ```css
    /* Example */
    .static-position {
        position: static;
    }
    
    ```
    
- `relative`: The element is positioned relative to its normal position.
    
    ```css
    /* Example */
    .relative-position {
        position: relative;
        top: 10px;
        left: 20px;
    }
    
    ```
    
- `absolute`: The element is positioned absolute to its first positioned (not static) ancestor element.
    
    ```css
    /* Example */
    .absolute-position {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    ```
    
- `fixed`: The element is positioned relative to the browser window and stays fixed even when scrolling.
    
    ```css
    /* Example */
    .fixed-position {
        position: fixed;
        top: 10px;
        right: 10px;
    }
    
    ```
    
- `sticky`: The element is positioned based on the user's scroll position. It becomes `fixed` once it crosses a specified point during scrolling.
    
    ```css
    /* Example */
    .sticky-position {
        position: sticky;
        top: 0;
    }
    
    ```
    

## 👉video 29 - Exersice-3.

- make card using html and css:

![card.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/448d7fcf-bd42-4070-b17d-71bec52d429e/86ac668b-ae80-4068-96a8-0b5bbba7c1af/card.png)

`**html code`:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exersice-3</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- card.png is a file which contains a card Image. 
        Write html and css code to design this card. Use #html -->
    <main>
      <div class="container">
        <section class="card">
          <article class="card-img">
            <img
              src="https://images.pexels.com/photos/5032035/pexels-photo-5032035.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              height="200"
              width="100%"
            />
          </article>
          <section class="card-btn1">
            <ol>
              <li>nature</li>
              <li>lake</li>
            </ol>
          </section>
          <section class="card-heading">
            <h1>Lago di Braies</h1>
          </section>
          <section class="card-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus voluptate sit dolore, atae sed illo consectetur necessitatibus atque. 
          </section>
          <section class="card-btn2">
            <button>read more</button>
          </section>
        </section>
      </div>
    </main>
  </body>
</html>
```

**`css code`:**

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
 
body{
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: gainsboro;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    text-transform: capitalize;
   
}
.container{
    background-color: #fff;
    width: 25vw;
    border-radius: 10px;
    border: 1px solid rgba(220, 220, 220, 0.61);
    box-shadow: 6px 4px 13px 3px #00000060;
}
.card{
    padding: 14px;
}
.card-img{
     margin: -6px -6px 0;
    border-radius: 8px;
}
.card-img img{
    border-radius: 8px;
}
.card-btn1 ol{
    display: flex;
    margin: 7px;
    padding: 0;
    /* padding: 0 20px; */
}
.card-btn1 ol li{
    list-style-type: none;
    padding: 2px 7px;
    margin: 5px 5px 0 0;
    border: 2px solid gainsboro;
    border-radius: 42px;
    color: grey;
}

.card-heading h1{
    margin: 20px 0;
    color: #0e2632;
    font-size: 30px
}

.card-content{
    color:grey;
    font-size: 17px;
    text-transform: none;
    line-height: 1.5;
}
.card-btn2{
    margin: 20px 0;
    display: flex;
    justify-content: center;
}
.card-btn2 button{
    border: none;
    padding: 14px 20px;
    background-color: #e0efff;
    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
    color: #268bff;
    border-radius: 40px;
}
```

## → output screenshot:

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/448d7fcf-bd42-4070-b17d-71bec52d429e/09693b34-cac7-4f3e-9d6e-0f961b9207b4/Untitled.png)

January 19, 2024 

## 👉video 30 - variable in css.

# CSS Variables (Custom Properties)

## Introduction:

- **Definition:** Custom properties in CSS known as variables.
- **Prefix:** Variables are prefixed with `-`.
- **Scope:** Variables are scoped to the selector where they are defined or globally in the `:root` pseudo-class.

## Syntax:

```css
:root {
  --variable-name: value;
}

selector {
  property: var(--variable-name);
}

```

## Example:

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #333;
  --border-radius: 8px;
}

body {
  color: var(--text-color);
}

.header {
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
}

.button {
  background-color: var(--secondary-color);
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
}

```

## Key Points:

1. **Global Definitions:**
    - Define variables in `:root` for global availability.
    - Use meaningful names for clarity.
2. **Variable Reference:**
    - Reference variables using `var(--variable-name)`.
3. **Reusability:**
    - Enhances code reusability.
    - Allows easy theme changes by modifying variable values.
4. **Dynamic Values:**
    - Change variable values dynamically, affecting all elements using them.
5. **Example Usage:**
    - Apply variables to properties like colors, text, border-radius, etc.
6. **Responsive Design:**
    - Utilize variables in media queries for responsive design adjustments.

## Best Practices:

1. **Meaningful Names:**
    - Use descriptive names for variables to enhance code readability.
2. **Consistency:**
    - Maintain consistency in variable naming conventions.
3. **Scoped Usage:**
    - Scope variables to specific selectors for more localized changes.
4. **Fallback Values:**
    - Provide fallback values for browsers that do not support CSS variables.

## 👉video 31 - media query in css.

# Media Queries in CSS

## Introduction:

- **Purpose:** Media queries in CSS allow the application of styles based on characteristics of the user's device, such as screen size, resolution, or device orientation.
- **Syntax:** Media queries are introduced using the `@media` rule.

## Basic Syntax:

```css
@media media_type and (media_feature) {
  /* Styles to apply for the specified media type and feature */
}

```

## Example:

```css
/* Example of a media query for screens smaller than 600px */
@media screen and (max-width: 600px) {
  body {
    font-size: 14px;
  }

  .header {
    padding: 10px;
  }
}

```

## Key Components:

1. **Media Type:**
    - Specifies the type of media, such as `screen`, `print`, `all`, etc.
2. **Media Features:**
    - Conditions that must be true for the styles within the media query to apply.
    - Examples include `width`, `height`, `orientation`, etc.
3. **Logical Operators:**
    - `and`, `not`, and `,` (comma) are used to create complex conditions.

## Common Media Features:

1. **Width and Height:**
    - `min-width`, `max-width`, `min-height`, `max-height`.
2. **Device Orientation:**
    - `orientation: portrait`, `orientation: landscape`.
3. **Resolution:**
    - `min-resolution`, `max-resolution`.
4. **Aspect Ratio:**
    - `min-aspect-ratio`, `max-aspect-ratio`.

## Example Usage:

1. **Responsive Design:**
    - Adjust layout, font sizes, and other styles based on screen size.
2. **High-Resolution Displays:**
    - Serve higher resolution images to devices with high pixel density.
3. **Print Styles:**
    - Provide specific styles for printed pages using `@media print`.

## Best Practices:

1. **Mobile-First Approach:**
    - Start designing for smaller screens first and then enhance for larger screens.
2. **Test Across Devices:**
    - Test media queries on various devices to ensure responsiveness.
3. **Logical Structure:**
    - Organize media queries logically for better readability and maintenance.
4. **Use Em and Rem Units:**
    - Use relative units like `em` and `rem` for better scalability.

## 👉video 33 - Exersice-4.

- make multi-color navbar with variable, so that we can change color of navbar from variable only.

`**html code`:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>multi-color-navbar</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <section class="navbar">
        <article class="logo">
          <h2>Brand Logo</h2>
        </article>
        <nav>
          <ol class="nav-item">
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>contact</li>
            <li>blog</li>
          </ol>
        </nav>
      </section>
    </header>
  </body>
</html>
```

**`css code`:**

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

:root {
  --color: #fff;
  --back-color: #1d1d1d;
  --hover-color: #ffffffe7;
}
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  text-transform: capitalize;
  color: var(--color);
}
body {
  background-image: url("https://images.pexels.com/photos/3377414/pexels-photo-3377414.jpeg?cs=srgb&dl=pexels-el%C4%ABna-ar%C4%81ja-3377414.jpg&fm=jpg");
}
.navbar {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  background-color: var(--back-color);
}
.logo {
  padding: 20px;
}
.nav-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  font-weight: bold;
}
.nav-item li {
  padding: 5px;
  font-size: 14px;
  list-style-type: none;
}

.nav-item li:first-child {
  background-color: var(--color);
  color: var(--back-color);
  border-radius: 7px;
}

.nav-item li:hover {
  background-color: var(--color);
  color: var(--back-color);
  border-radius: 7px;
  cursor: pointer;
}
.nav-item li:first-child:hover {
  background-color: var(--hover-color);
  color: var(--back-color);
  border-radius: 7px;
  cursor: pointer;
}
.logo:hover {
  cursor: pointer;
}
```

## output:

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/448d7fcf-bd42-4070-b17d-71bec52d429e/b3f18193-5f5e-4279-b6f4-aad5b0abb0b0/Untitled.png)

## 👉video 34 - Float and clear.

### Float Property:

1. **Definition:**
    - The `float` property is used to specify whether an element should be placed to the left or right of its container, allowing content to flow around it.
2. **Values:**
    - `left`: The element will be floated to the left.
    - `right`: The element will be floated to the right.
    - `none` (default): The element will not be floated.
3. **Usage:**
    - Example:
        
        ```css
        .float-left {
          float: left;
        }
        
        ```
        
4. **Clearing Floats:**
    - When elements are floated, it's important to clear them to prevent layout issues. This is where the `clear` property comes in.

### Clear Property:

1. **Definition:**
    - The `clear` property is used to control the behavior of an element concerning floated elements. It specifies whether an element should be moved below (cleared) floated elements.
2. **Values:**
    - `left`: The element will be moved below any floated element to the left.
    - `right`: The element will be moved below any floated element to the right.
    - `both`: The element will be moved below any floated element, regardless of its side.
    - `none` (default): No clearing will be applied.
3. **Usage:**
    - Example:
        
        ```css
        .clear-left {
          clear: left;
        }
        
        ```
        
4. **Clearing Techniques:**
    - **Using Clearfix:**
        
        ```css
        .clearfix::after {
          content: "";
          display: table;
          clear: both;
        }
        
        ```
        
    - **Empty div with clear property:**
        
        ```html
        <div style="clear: both;"></div>
        
        ```
        

### Example:

```css
/* Floating an image to the left */
.image-float {
  float: left;
  margin-right: 10px; /* Optional: Add margin for spacing */
}

/* Clearing the float to avoid layout issues */
.clear-float {
  clear: both;
}

```

## 👉video 35 - More on css selectors.

## 👉video 36 - Exercise-4 solution.

## 👉video 37 - Exercise-5.

**`html code`:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>home-page</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="position">
      <div class="navbar">
        <article class="logo">
          <h2>Brand Logo</h2>
        </article>
        <nav>
          <ol class="nav-item">
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>contact</li>
            <li>blog</li>
          </ol>
        </nav>
      </div>
    </header>
    <main>
      <div class="main-box">
        <div class="sub-box-1">
          <div class="container-1">
            <section class="card">
              <article class="card-img">
                <img
                  src="https://images.pexels.com/photos/5032035/pexels-photo-5032035.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  height="200"
                  width="100%"
                />
              </article>
              <section class="card-btn1">
                <ol>
                  <li>nature</li>
                  <li>lake</li>
                </ol>
              </section>
              <section class="card-heading">
                <h1>Lago di Braies</h1>
              </section>
              <section class="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                voluptatibus voluptate sit dolore, atae sed illo consectetur
                necessitatibus atque.
              </section>
              <section class="card-btn2">
                <button>read more</button>
              </section>
            </section>
          </div>
        </div>
        <div class="sub-box-2">
          <div class="container-2">
            <section class="card">
              <article class="card-img">
                <img
                  src="https://images.pexels.com/photos/5032035/pexels-photo-5032035.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  height="200"
                  width="100%"
                />
              </article>
              <section class="card-btn1">
                <ol>
                  <li>nature</li>
                  <li>lake</li>
                </ol>
              </section>
              <section class="card-heading">
                <h1>Lago di Braies</h1>
              </section>
              <section class="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                voluptatibus voluptate sit dolore, atae sed illo consectetur
                necessitatibus atque.
              </section>
              <section class="card-btn2">
                <button>read more</button>
              </section>
            </section>
          </div>
        </div>
      </div>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem officia,
        fugiat minima dignissimos, earum, ratione beatae cumque labore
        voluptatibus sint maiores enim. Maiores consequatur rerum quaerat quod
        corporis nam tempora?
      </div>
      <div class="bot-logo">
        <div class="bot-back">
          <img src="technical-support.png" alt="" width="50" />
        </div>
      </div>
    </main>
    <footer>
        <div class="footer">
        <article class="footer-logo">
          <h2>Brand Logo</h2>
        </article>
        <nav class="footer-nav">
          <ol class="footer-nav-item">
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>contact</li>
            <li>blog</li>
          </ol>
          <ol class="footer-nav-item">
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>contact</li>
            <li>blog</li>
          </ol>
          <ol class="footer-nav-item">
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>contact</li>
            <li>blog</li>
          </ol>
        </nav>
      </div>
    </footer>
  </body>
</html>
```