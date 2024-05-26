

# Two Types of the exports/ import:

1) Default export /import:

 - there is only one default export in one file.. 

                    export default Component/variable;
                    import Component from "path";
 Example :  
                    import CDN_URL from "../././.";
       

2) Named export  / import

 - allows to export multiple things from a same file...
 
                        export const Component;
                        import {Component} from "path";

 Example : 
       export const LOGO_URL = "https://img.freepik.com/premium-vector/burger-logo-design-vector-fast-food-restaurant-cafe-symbol_18099-2283.jpg";


# App Food
 
* Header
* -Logo
* -Nav Items
* Body
*  -Search
*  -Restaurant Container
*   -ResaurantCard
*       - Img
*       - Name of the Res, Star Rating, Cuisine, delivery time, etc
* Footer
* -Copyright
* -Links
* -Address
* -Contact
*/


# React Hooks
- Normal JS utility funcitons {lies insider the (node_modules -> react) }

1) Two most important hooks:

- useState() = used to generate super powerful state variables in React 
- useEffect()