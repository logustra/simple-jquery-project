# Architecture Sass
Properly architecting your Sass project is a crucial starting point to having a maintainable, scalable, and well-organized project. Sass makes separating your project into logical “modules” simple with the `@import` directive, which acts differently than the native CSS `@import` directive in that it **includes** `.scss` **or** `.sass` **files before the final CSS output.**

You can [read the documentation on the](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import) `@import` [directive](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import) to get a good idea of how you can use it to include partial files.

There are many project architectures that you can employ in your project, and each might have their pros and cons. The important thing is that you **choose one and stick with it**. In this article, The **7-1 Pattern** by Hugo Giraudel will be used. To summarize, there are **seven** folders and **one** `main.scss` file for output:

- `base/` – contains global styles, such as resets, typography, colors, etc.
- `components/` – contains each self-contained component in its own .scss partial
- `layout/` – contains styling for larger layout components; e.g. nav, header, footer, etc.
- `pages/` – contains page-specific styling, if necessary
- `themes/` – contains styling for different themes
- `utils/` – contains global mixins, functions, helper selectors, etc.
- `vendors/` – contains 3rd-party styles, mixins, etc.
- `main.scss` – output file that brings together all of the above parts

Source : [scotch.io](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization)

## Features
1. Semantic HTML5
2. Includes Flat Color
3. Includes Typography
4. Autoprefixer   
5. Livereload with Browsersync  
6. Includes Framework
    * [Jquery](https://jquery.com/)
    * [Jquery UI](http://jqueryui.com/)
    * [Bootstrap](http://getbootstrap.com/)
    * [Font Awesome](http://fontawesome.io/)
7. Includes Useful Mixins
    * Breakpoints
    * Clearfix
    * Rem units
    * Background Image
    * Background Tinted Image 
    * Background Image Parallax
    * Background Tinted Image Parallax
    * Background Shapes Image 
    * Background Tinted Shapes Image 
    * Background Shapes Image Parallax 
    * Background Tinted Shapes Image Parallax 

## How to use Mixins
1. Breakpoints
    ```
    @include mq (xxsmall) {
        // your css
    }

    or 

    .example {

        @include mq (xxsmall) {
            // your css
        }
    }
    ```
   
2. Clearfix
    ```
    .example {
        @include clearfix;
    }
    ```
3. Rem units
    ```
    .example {
        @include font-size(14px);
    }
    ```
4. Background Image
    ```
    .example {
        @include bgImg ('../images/image.jpeg', center center, no-repeat, cover);
    }
    ```
5. Background Tinted Image 
    ```
    .example {
        @include bgTintedImg ('../images/image.jpeg', center center, no-repeat, cover, rgba(255, 0, 0, 0.45));
    }
    ```
6. Background Image Parallax
    ```
    .example {
        @include bgImgParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed);
    }
    ```
7. Background Tinted Image Parallax
    ```
    .example {
        @include bgTintedImgParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed, rgba(255, 0, 0, 0.45));
    }
    ```
8. Background Shapes Image
    ```
    .example {
        @include bgShapeLeftImg ('../images/image.jpeg', center center, no-repeat, cover, 87%);
    }
    
    .example {
        @include bgShapeRightImg ('../images/image.jpeg', center center, no-repeat, cover, 87%);
    }
    ```
    
9. Background Tinted Shapes Image 
    ```
    .example {
        @include bgShapeLeftImg ('../images/image.jpeg', center center, no-repeat, cover, 87%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgShapeRightImg ('../images/image.jpeg', center center, no-repeat, cover, 87%, rgba(255, 0, 0, 0.45));
    }
    ```
10. Background Shapes Image Parallax 
    ```
    .example {

        @include bgShapeLeftImgParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%);
    }

    .example {

        @include bgShapeRightImgParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%);
    }
    ```
11. Background Tinted Shapes Image Parallax 
    ```
    .example {

        @include bgTintedShapeLeftImgParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%, rgba(255, 0, 0, 0.45));
    }

    .example {

        @include bgTintedShapeRightImgParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%, rgba(255, 0, 0, 0.45));
    }
    ```


## Instructions
1. Make sure you have these installed
    * [node.js](http://nodejs.org/)
    * [gulp](http://gulpjs.com/)
    * [ruby](https://www.ruby-lang.org/)
    * [Sass](http://sass-lang.com/)

2. Just Clone and Use it :)
