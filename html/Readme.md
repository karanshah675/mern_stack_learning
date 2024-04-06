# All videos notes

## 👉video 1 - how website works.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/448d7fcf-bd42-4070-b17d-71bec52d429e/d2b545ec-012e-4172-b181-633a48240260/Untitled.png)

1. for any website we need one browser to render a webpage.
2. we are client and website comes from server-side called database.
3. every website has there own dns(domain name) to remember website name because we can not remember ip addresses.
4. each website has there unique ip address.

## 👉video 3 - basic structure of html.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/448d7fcf-bd42-4070-b17d-71bec52d429e/3256bf8d-3bc3-4465-a8cd-290c5dc97df4/Untitled.png)

## 👉video 4 - heading, paragraph and anchor tag.

1. **`<h1>` Tag (Heading Tag):**
    - **Definition:** The `<h1>` tag is used to define the main heading of a document. It represents the highest level of importance.
    - **Usage:** There are `<h1>` to `<h6>` tags, with `<h1>` being the most important and `<h6>` the least. It is important to use headings in a hierarchical order, with `<h1>` being the main title of the page.
    - **Example:**
        
        ```html
        <h1>This is the Main Heading</h1>
        
        ```
        
2. **`<p>` Tag (Paragraph Tag):**
    - **Definition:** The `<p>` tag is used to define paragraphs in HTML. It represents a block of text and is commonly used for structuring content.
    - **Usage:** Text content within a `<p>` tag is displayed with space above and below it, creating a clear separation from other content.
    - **Example:**
        
        ```html
        <p>This is a paragraph of text. It can contain multiple sentences and provides a structured way to present information.</p>
        
        ```
        
3. **`<a>` Tag (Anchor Tag):**
    - **Definition:** The `<a>` tag, also known as the anchor tag, is used to create hyperlinks in HTML. It allows users to navigate to another document or resource when clicked.
    - **Attributes:**
        - `href`: Specifies the URL of the linked resource.
        - `target`: Specifies where to open the linked document (e.g., in a new tab or window).
    - **Usage:** The `<a>` tag can wrap around text, images, or other HTML elements to make them clickable links.
    - **Example:**
        
        ```html
        <a href="<https://www.example.com>" target="_blank">Visit Example.com</a>
        
        ```
        

## 👉video 5 - image, list and tables.

 

1. **`<img>` Tag (Image Tag):**
    - **Definition:** The `<img>` tag is used to embed images in an HTML document.
    - **Attributes:**
        - `src`: Specifies the source (URL or file path) of the image.
        - `alt`: Provides alternative text for accessibility and displays if the image fails to load.
        - `width` and `height`: Specify the width and height of the image in pixels.
    
    ```html
    <img src="image.jpg" alt="Description of the image" width="300" height="200">
    
    ```
    
2. **List Tags:**
    - **`<ul>` Tag (Unordered List):**
        - Represents an unordered list, typically displayed with bullet points.
        - Contains `<li>` (list item) elements.
        
        ```html
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        
        ```
        
    - **`<ol>` Tag (Ordered List):**
        - Represents an ordered list, displayed with numbers or letters.
        - Contains `<li>` elements.
        
        ```html
        <ol>
          <li>First Item</li>
          <li>Second Item</li>
          <li>Third Item</li>
        </ol>
        
        ```
        
    - **`<li>` Tag (List Item):**
        - Represents an item in a list (`<ul>` or `<ol>`).
        - Must be nested inside `<ul>` or `<ol>`.
        
        ```html
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        
        ```
        
3. **`<table>` Tag (Table):**
    - **Definition:** The `<table>` tag is used to create tables in HTML.
    - **Elements:**
        - `<tr>` (Table Row): Represents a row in the table.
        - `<th>` (Table Header): Represents a header cell in a table.
        - `<td>` (Table Data): Represents a data cell in a table.
    
    ```html
    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </table>
    
    ```
    
    - **Attributes:**
        - `border`: Specifies the width of the table border (not recommended, use CSS for styling).
        - `width`: Specifies the width of the table.
        - `cellspacing` and `cellpadding`: Control the space between cells.
    
    ```html
    <table border="1" width="100%" cellspacing="0" cellpadding="5">
      <!-- Table content goes here -->
    </table>
    
    ```
    

## 👉video 6 - SEO and core web vitals

### SEO (Search Engine Optimization):

1. **Definition:**
    - SEO is the practice of optimizing a website to improve its visibility in search engine results.
    - The goal is to increase organic (non-paid) traffic to the site.
2. **Key Elements:**
    - **Keywords:** Identify and use relevant keywords in titles, headings, and content.
    - **Quality Content:** Create high-quality, valuable, and relevant content for users.
    - **Meta Tags:** Optimize meta tags (title, description) for each page.
    - **URL Structure:** Use clean and descriptive URLs.
    - **Image Optimization:** Optimize images with descriptive filenames and alt text.
    - **Mobile-Friendly Design:** Ensure the website is responsive for mobile users.
3. **On-Page SEO:**
    - **Title Tag:** Include the main keyword in the title tag.
    - **Header Tags:** Use heading tags (h1, h2, etc.) to structure content.
    - **Meta Description:** Write compelling meta descriptions that summarize page content.
    - **Internal Linking:** Link to other relevant pages within the website.
4. **Off-Page SEO:**
    - **Backlinks:** Acquire high-quality backlinks from reputable websites.
    - **Social Signals:** Engage in social media to boost visibility and traffic.
    - **Local SEO:** Optimize for local searches with accurate business information.
5. **Technical SEO:**
    - **Site Speed:** Ensure fast loading times for better user experience and search ranking.
    - **Mobile Optimization:** Optimize the site for mobile devices.
    - **Sitemap:** Submit a sitemap to search engines for better indexing.
6. **SEO Tools:**
    - Use tools like Google Analytics, Google Search Console, and keyword research tools.

### Web Vitals:

1. **Definition:**
    - Web Vitals are a set of metrics designed by Google to measure the user experience on websites.
    - They focus on aspects like loading speed, interactivity, and visual stability.
2. **Core Web Vitals:**
    - **Largest Contentful Paint (LCP):** Measures how long it takes for the main content to load.
    - **First Input Delay (FID):** Measures the time it takes for a page to become interactive.
    - **Cumulative Layout Shift (CLS):** Measures visual stability, particularly unexpected layout shifts.
3. **Importance:**
    - Google considers Web Vitals as a ranking factor.
    - Positive user experience leads to higher user satisfaction and retention.
4. **Improvement Strategies:**
    - **Optimize Images:** Compress and properly size images to improve LCP.
    - **Prioritize Critical Requests:** Ensure critical resources are loaded first.
    - **Minimize JavaScript:** Optimize and reduce the impact of JavaScript on FID.
    - **Avoid Layout Shifts:** Make sure elements don’t unexpectedly move during page load.
5. **Monitoring and Tools:**
    - Use tools like Google Page Speed Insights, Lighthouse, and Search Console for monitoring and improvement suggestions.

## 👉video 7 - From and Input tags

### `<form>` Tag:

1. **Definition:**
    - The `<form>` tag is used to create an HTML form, which is a container for user input elements.
    - Forms are crucial for user interaction and data submission on websites.
2. **Attributes:**
    - `action`: Specifies the URL where the form data will be sent upon submission.
    - `method`: Defines the HTTP method (e.g., GET or POST) for sending form data.
    
    ```html
    <form action="/submit_form" method="post">
      <!-- Form content goes here -->
    </form>
    
    ```
    
3. **Form Elements:**
    - The `<form>` tag can contain various form elements like `<input>`, `<textarea>`, `<select>`, and more.
    
    ```html
    <form action="/submit_form" method="post">
      <input type="text" name="username" placeholder="Username">
      <input type="password" name="password" placeholder="Password">
      <button type="submit">Submit</button>
    </form>
    
    ```
    
4. **`<fieldset>` and `<legend>` Tags:**
    - `<fieldset>` groups related form elements.
    - `<legend>` provides a caption for the `<fieldset>`.
    
    ```html
    <form action="/submit_form" method="post">
      <fieldset>
        <legend>User Information</legend>
        <!-- Form elements related to user information -->
      </fieldset>
      <button type="submit">Submit</button>
    </form>
    
    ```
    

### `<input>` Tag:

1. **Definition:**
    - The `<input>` tag is used to create various types of input fields within a form.
2. **Common Types:**
    - **Text Input:**
        
        ```html
        <input type="text" name="username" placeholder="Username">
        
        ```
        
    - **Password Input:**
        
        ```html
        <input type="password" name="password" placeholder="Password">
        
        ```
        
    - **Checkbox:**
        
        ```html
        <input type="checkbox" name="subscribe" id="subscribe" checked>
        <label for="subscribe">Subscribe to Newsletter</label>
        
        ```
        
    - **Radio Button:**
        
        ```html
        <input type="radio" name="gender" value="male" id="male">
        <label for="male">Male</label>
        
        <input type="radio" name="gender" value="female" id="female">
        <label for="female">Female</label>
        
        ```
        
    - **Submit Button:**
        
        ```html
        <input type="submit" value="Submit">
        
        ```
        
    - **File Upload:**
        
        ```html
        <input type="file" name="file_upload">
        
        ```
        
3. **Attributes:**
    - `type`: Specifies the type of input field (text, password, checkbox, radio, etc.).
    - `name`: Provides a name for the input, which is used when submitting the form.
    - `value`: Specifies the initial value for the input field.
    
    ```html
    <input type="text" name="username" value="JohnDoe">
    
    ```
    
4. **Other Attributes:**
    - Depending on the type of input, there are additional attributes such as `placeholder`, `checked`, `required`, etc.
    
    ```html
    <input type="text" name="email" placeholder="Enter your email" required>
    
    ```
    

## 👉video 8 - Inline & Block elements

### **Inline Elements:**

1. **Definition:**
    - Inline elements are HTML tags that do not start on a new line and only take up as much width as necessary.
    - They do not create a new block or section within the HTML structure.
2. **Examples of Inline Elements:**
    1. **`<span>`**: Defines a small section of text and is often used for styling.
    2. **`<a>`**: Creates hyperlinks to navigate to other pages or resources.
    3. **`<strong>`**: Represents text with strong importance, typically displayed as bold.
    4. **`<em>`**: Emphasizes text, often displayed in italic.
    5. **`<img>`**: Embeds images into the document.
    6. **`<abbr>`**: Represents an abbreviation or acronym.
    7. **`<cite>`**: Defines the title of a creative work.
    8. **`<code>`**: Indicates a short piece of code.
    9. **`<br>`**: Inserts a line break within text.
    10. **`<i>`**: Represents text in an alternate voice or mood, often displayed in italic.

### **Block-Level Elements:**

1. **Definition:**
    - Block-level elements are HTML tags that typically start on a new line and extend the full width of their container.
    - They create distinct blocks or sections within the HTML structure.
2. **Examples of Block-Level Elements:**
    1. **`<div>`**: Defines a generic container used for styling or grouping other elements.
    2. **`<p>`**: Represents a paragraph of text.
    3. **`<h1>`**, **`<h2>`**, **`<h3>`**, **`<h4>`**, **`<h5>`**, **`<h6>`**: Headings that define the hierarchy of text.
    4. **`<ul>`**, **`<ol>`**, **`<li>`**: Creates unordered and ordered lists.
    5. **`<blockquote>`**: Represents a block of text that is a quotation from another source.
    6. **`<pre>`**: Defines preformatted text, preserving both spaces and line breaks.
    7. **`<hr>`**: Represents a horizontal rule, often used to separate content.
    8. **`<table>`**, **`<tr>`**, **`<th>`**, **`<td>`**: Defines tables and their components.
    9. **`<form>`**: Creates a form for user input.
    10. **`<address>`**: Represents contact information for the author or owner of a document.
    11. **`<footer>`**, **`<header>`**, **`<nav>`**, **`<article>`**: Part of HTML5's semantic elements for structural organization.
    12. **`<figure>`**, **`<figcaption>`**: Used to mark up media content and its caption.
    13. **`<section>`**: Represents a section of a document.
    14. **`<article>`**: Represents a self-contained piece of content that could be distributed and reused independently.
    15. **`<aside>`**: Defines content that is tangentially related to the content around it.

<aside>
💡 **quick quiz = Without using `<br>` tag write a vertical form which contain name, city and pincode.**

</aside>

`**<code>:**`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quick Quiz</title>
  </head>
  <body>
    <table>
      <form action="">
        <tr>
          <td><label for="name">name</label></td>
        </tr>
        <tr>
          <td><input type="text" name="" id="name" /></td>
        </tr>
        <tr>
          <td><label for="city">City</label></td>
        </tr>
        <tr>
          <td><input type="text" name="" id="city" /></td>
        </tr>
        <tr>
          <td><label for="pincode">pincode</label></td>
        </tr>
        <tr>
          <td><input type="number" name="" id="pincode" /></td>
        </tr>
      </form>
    </table>
  </body>
</html>
```

**Screenshot:**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/448d7fcf-bd42-4070-b17d-71bec52d429e/7291db6d-5d12-41f4-ab3b-a1756a54097c/Untitled.png)

## 👉video 9 - id and classes in html

Certainly! Here are notes on using IDs and classes in HTML:

### ID Attribute:

1. **Definition:**
    - The `id` attribute is used to uniquely identify a specific HTML element on a web page.
    - Each `id` value must be unique within a document.
2. **Syntax:**
    - The `id` attribute is added to an HTML element with the following syntax:
        
        ```html
        <tagname id="uniqueIdentifier">Content</tagname>
        
        ```
        
    - Example:
        
        ```html
        <div id="header">This is the header</div>
        
        ```
        
3. **Usage:**
    - IDs are often used for styling specific elements with CSS.
    - JavaScript can also use IDs to reference and manipulate specific elements.
4. **Example - Styling with CSS:**
    
    ```html
    <style>
      #header {
        background-color: #333;
        color: #fff;
        padding: 10px;
      }
    </style>
    
    ```
    

### Class Attribute:

1. **Definition:**
    - The `class` attribute is used to group together HTML elements that share common styles or behavior.
    - Multiple elements can have the same class.
2. **Syntax:**
    - The `class` attribute is added to an HTML element with the following syntax:
        
        ```html
        <tagname class="className1 className2">Content</tagname>
        
        ```
        
    - Example:
        
        ```html
        <p class="important-text">This is an important paragraph.</p>
        
        ```
        
3. **Usage:**
    - Classes are extensively used in styling web pages with CSS.
    - JavaScript can target elements with specific classes for dynamic behavior.
4. **Example - Styling with CSS:**
    
    ```html
    <style>
      .important-text {
        font-weight: bold;
        color: red;
      }
    </style>
    
    ```
    
5. **Multiple Classes:**
    - An element can have multiple classes by separating them with spaces.
    
    ```html
    <div class="box rounded-border">This is a styled box</div>
    
    ```
    
    ```css
    .box {
      border: 1px solid #ccc;
      padding: 10px;
    }
    
    .rounded-border {
      border-radius: 5px;
    }
    
    ```
    

## 👉video 10 - video, audio and media in html

### `<video>` Tag:

1. **Definition:**
    - The `<video>` tag is used to embed video content into an HTML document.
2. **Attributes:**
    - `src`: Specifies the URL or file path of the video.
    - `controls`: Adds playback controls (play, pause, volume, etc.) to the video.
    - `width` and `height`: Define the dimensions of the video player.
    
    ```html
    <video src="example.mp4" controls width="600" height="400">
      Your browser does not support the video tag.
    </video>
    
    ```
    
3. **Additional Attributes:**
    - `autoplay`: Starts playing the video automatically.
    - `loop`: Loops the video playback.
    - `muted`: Mutes the audio of the video.
    - `poster`: Specifies an image to display before the video starts.
    
    ```html
    <video src="example.mp4" autoplay loop muted poster="video-thumbnail.jpg" width="600" height="400">
      Your browser does not support the video tag.
    </video>
    
    ```
    
4. **Fallback Content:**
    - Content between the opening and closing `<video>` tags serves as fallback in browsers that do not support the video tag.

### `<audio>` Tag:

1. **Definition:**
    - The `<audio>` tag is used to embed audio content into an HTML document.
2. **Attributes:**
    - `src`: Specifies the URL or file path of the audio file.
    - `controls`: Adds playback controls (play, pause, volume, etc.) to the audio player.
    
    ```html
    <audio src="audio-example.mp3" controls>
      Your browser does not support the audio tag.
    </audio>
    
    ```
    
3. **Additional Attributes:**
    - `autoplay`: Starts playing the audio automatically.
    - `loop`: Loops the audio playback.
    - `muted`: Mutes the audio.
    - `preload`: Specifies if and how the audio should be loaded when the page loads (`none`, `metadata`, `auto`).
    
    ```html
    <audio src="audio-example.mp3" autoplay loop muted preload="auto">
      Your browser does not support the audio tag.
    </audio>
    
    ```
    
4. **Fallback Content:**
    - Content between the opening and closing `<audio>` tags serves as fallback in browsers that do not support the audio tag.
5. **Supported Formats:**
    - Different browsers support different audio and video formats. To ensure compatibility, provide the media in multiple formats.
    
    ```html
    <audio controls>
      <source src="audio-example.mp3" type="audio/mp3">
      <source src="audio-example.ogg" type="audio/ogg">
      Your browser does not support the audio tag.
    </audio>
    
    ```
    

<aside>
💡 **quick quiz : create a website which shows videos of different category and audio of different categories.**

</aside>

`**<code>**`:

```html
<!-- @ que : create a website which shows videos of different catagory and audio of different categories. -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quick Quiz - 2 </title>
</head>
<body>
    <div class="videos">
        <h1>videos</h1>
        <div class="">
            <h2>video </h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XZwBNDGuWGU?si=6FNfayST2_Gnv33c" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    <div class="music">
        <h1>videos</h1>
        <div class="">
            <h2> audio </h2>
            <audio src="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3" controls></audio>
        </div>
    </div>
</body>
</html>
```

## 👉video 11 - semantic tags in html

### Semantic Tags in HTML:

1. **Definition:**
    - Semantic tags in HTML are elements that carry meaning about the structure and content of a web page.
    - They provide additional information to both browsers and developers about the purpose and context of the content.
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/448d7fcf-bd42-4070-b17d-71bec52d429e/536a27f2-346f-4b04-b805-d7bb614664c3/Untitled.png)
    
2. **Benefits of Semantic Tags:**
    - **Improved Accessibility:** Semantic tags contribute to a more accessible web by providing better structure for screen readers and other assistive technologies.
    - **Search Engine Optimization (SEO):** Search engines use semantic HTML to better understand the content and context of a page, potentially improving search rankings.
    - **Code Readability:** Semantic tags make the HTML code more readable and understandable, both for developers and anyone inspecting the code.
3. **Common Semantic Tags:**
    - `<header>`: Represents a group of introductory or navigational content. Typically contains headings, logos, and navigation menus.
        
        ```html
        <header>
          <h1>Website Title</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>
        
        ```
        
    - `<nav>`: Defines a navigation menu, often placed within the `<header>` or `<footer>` of a page.
        
        ```html
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        
        ```
        
    - `<main>`: Represents the main content of a document. It excludes headers, footers, and sidebars.
        
        ```html
        <main>
          <h2>Main Content Heading</h2>
          <p>This is the main content of the page.</p>
        </main>
        
        ```
        
    - `<article>`: Represents a self-contained piece of content, such as a news article, blog post, or forum post.
        
        ```html
        <article>
          <h3>Article Title</h3>
          <p>Article content goes here.</p>
        </article>
        
        ```
        
    - `<section>`: Defines a section of a document and is often used to group related content together.
        
        ```html
        <section>
          <h2>Section Heading</h2>
          <p>Section content goes here.</p>
        </section>
        
        ```
        
    - `<aside>`: Represents content that is tangentially related to the content around it, such as a sidebar or related links.
        
        ```html
        <aside>
          <h3>Related Links</h3>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
          </ul>
        </aside>
        
        ```
        
    - `<footer>`: Represents the footer of a document or section, typically containing metadata, copyright information, and links to related resources.
        
        ```html
        <footer>
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </footer>
        
        ```
        
4. **Custom Semantic Tags:**
    - HTML5 allows developers to create custom semantic tags using the `<div>` element and assigning meaningful class names. For example:
        
        ```html
        <div class="testimonial">
          <p>Customer testimonial content goes here.</p>
        </div>
        
        ```
        
    
    While `<div>` itself is not semantic, using it with meaningful class names adds semantic value.
    

## 👉video 12 - Exercise 1: create a website which have 12 file; 6 are video and 6 are audio, and show preview of those.

`**<code>`:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exersice-1</title>
  </head>
  <body>
    <header>
      <nav>
        <ol>
          <li>Home</li>
          <li>Menu</li>
          <li>Setting</li>
        </ol>
      </nav>
    </header>
    <main>
      <section id="video">
        <div class="vid-1">
          <h3>Video - 1</h3>
          <video
            src="https://player.vimeo.com/external/284652268.sd.mp4?s=0bf23f0d69280b20e39fb2dd5501a5b0d4612a77&profile_id=164&oauth2_token_id=57447761"
            width="400"
            controls
            autoplay
            muted
            loop
          ></video>
        </div>
        <div class="vid-2">
          <h3>Video - 2</h3>
          <video
            src="https://player.vimeo.com/external/352012012.sd.mp4?s=7b6f82678265a4c6c75831a304e781a28fd40469&profile_id=164&oauth2_token_id=57447761"
            width="400"
            controls
            autoplay
            muted
            loop
          ></video>
        </div>
        <div class="vid-3">
          <h3>Video - 3</h3>
          <video
            src="https://player.vimeo.com/external/352012062.sd.mp4?s=5bad7de0866856c767206de312bd158f9d9813ab&profile_id=164&oauth2_token_id=57447761"
            width="400"
            controls
            autoplay
            muted
            loop
          ></video>
        </div>
        <div class="vid-4">
          <h3>Video - 4</h3>
          <video
            src="https://player.vimeo.com/external/392289251.sd.mp4?s=0b80dc8802ce4e423dc5cfac641b046e2eac208b&profile_id=164&oauth2_token_id=57447761"
            width="400"
            controls
            autoplay
            muted
            loop
          ></video>
        </div>
        <div class="vid-5">
          <h3>Video - 5</h3>
          <video
            src="https://player.vimeo.com/external/371745222.sd.mp4?s=17a4f2bb178b42f6a7b7dfeeeb1a131227ee32b3&profile_id=164&oauth2_token_id=57447761"
            width="400"
            controls
            autoplay
            muted
            loop
          ></video>
        </div>
        <div class="vid-6">
          <h3>Video - 6</h3>
          <video
            src="https://player.vimeo.com/external/372806824.sd.mp4?s=4bcb4b5585216f01bd21919c21a4dd1f989dfdc6&profile_id=164&oauth2_token_id=57447761"
            width="400"
            controls
            autoplay
            muted
            loop
          ></video>
        </div>
      </section>
      <section id="audio">
        <div class="vid-1">
          <h3>Audio - 1</h3>
          <audio
            src="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
            controls
            autoplay
          ></audio>
        </div>
        <div class="vid-2">
          <h3>Audio - 2</h3>
          <audio
            src="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
            controls
            autoplay
          ></audio>
        </div>
        <div class="vid-3">
          <h3>Audio - 3</h3>
          <audio
            src="https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"
            controls
            autoplay
          ></audio>
        </div>
        <div class="vid-4">
          <h3>Audio - 4</h3>
          <audio
            src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
            controls
            autoplay
          ></audio>
        </div>
        <div class="vid-5">
          <h3>Audio - 5</h3>
          <audio
            src="https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"
            controls
            autoplay
          ></audio>
        </div>
        <div class="vid-6">
          <h3>Audio - 6</h3>
          <audio
            src="https://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg"
            controls
            autoplay
          ></audio>
        </div>
      </section>
    </main>
    <footer>
      <p>all rights resevered &copy;2024</p>
    </footer>
  </body>
</html>
```

**Screenshot:**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/448d7fcf-bd42-4070-b17d-71bec52d429e/b58cf5aa-1a71-42ab-94b2-c672894f78b8/Untitled.png)

## 👉video 13 -   **HTML Entities, Quotation Tag, Obsolete HTML Tags, Character Sets.**

### HTML Entities:

1. **Definition:**
    - HTML entities are codes that represent reserved characters or characters that have a special meaning in HTML.
    - They are used to display characters that are not easily typable on a keyboard or may conflict with HTML syntax.
2. **Common Entities:**
    - `&lt;`: Less than (<)
    - `&gt;`: Greater than (>)
    - `&amp;`: Ampersand (&)
    - `&quot;`: Double quotation mark (")
    - `&apos;`: Single quotation mark (') - not as widely supported
3. **Numeric Character References:**
    - Numeric character references can be used to represent characters based on their Unicode or ASCII values.
    - Example: `&#65;` represents the uppercase letter 'A'.
4. **Use Cases:**
    - Preventing HTML interpretation: `&lt;script&gt;` will be displayed as `<script>` instead of being interpreted as an HTML tag.
    - Displaying special characters: `&copy;` represents the copyright symbol ©.

### HTML Quotation Tag:

1. **`<q>` Tag:**
    - The `<q>` tag is used to define short, inline quotations.
    - Example:
        
        ```html
        <p>The <q>quick brown fox</q> jumps over the lazy dog.</p>
        
        ```
        
    - Renders as: "The quick brown fox jumps over the lazy dog."
2. **`<blockquote>` Tag:**
    - The `<blockquote>` tag is used for longer, block-level quotations.
    - Example:
        
        ```html
        <blockquote>
          <p>This is a blockquote with multiple lines of text.</p>
          <p>It can span multiple paragraphs.</p>
        </blockquote>
        
        ```
        
    - Provides indentation and styling for block-level quotes.

### Obsolete HTML Tags:

1. **Definition:**
    - Obsolete HTML tags are tags that were once part of the HTML standard but are no longer recommended for use.
    - They may not be supported consistently across browsers, and modern alternatives are available.
2. **Examples of Obsolete Tags:**
    - `<font>`: Use CSS for font styling instead.
    - `<center>`: Use CSS for centering content.
    - `<strike>`: Use CSS for text strikethrough.
    - `<big>` and `<small>`: Use CSS for text sizing.
3. **Modern Alternatives:**
    - Modern web development encourages the use of CSS for styling and layout, and semantic HTML5 tags for structure.

### Character Sets in HTML:

1. **Definition:**
    - A character set in HTML specifies the set of characters that a web page can use.
    - The character set is defined in the `<meta>` tag within the `<head>` of an HTML document.
2. **Common Character Sets:**
    - **UTF-8:** Universal character set that supports most characters from all languages.
        
        ```html
        <meta charset="UTF-8">
        
        ```
        
    - **ISO-8859-1 (Latin-1):** Supports Western European languages.
        
        ```html
        <meta charset="ISO-8859-1">
        
        ```
        
3. **Setting the Character Set:**
    - Placing the character set declaration at the beginning of the HTML document ensures proper interpretation of special characters.
    - Example:
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <!-- Other head elements -->
        </head>
        <body>
          <!-- Body content -->
        </body>
        </html>
        
        ```