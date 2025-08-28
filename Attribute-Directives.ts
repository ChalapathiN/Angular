1. Apply a Single Class Conditionally
<p [ngClass]="isActive ? 'active' : 'inactive'">
  User Status
</p>

2. Apply Multiple Classes Conditionally (Object Syntax)
<p [ngClass]="{ 
      'active': isActive, 
      'disabled': isDisabled 
    }">
  Button
</p>

3. Apply Classes from an Array
<p [ngClass]="['big-text', 'highlight']">
  Hello World
</p>


4. Combine Static & Dynamic Classes
<p class="base" [ngClass]="{ 'success': isSuccess, 'error': isError }">
  Status Message
</p>


5. Apply Class from Component Variable
<p [ngClass]="currentClass">Dynamic Class Example</p>


currentClass = 'highlight';
isActive = true;
isDisabled = false;


.active { color: green; font-weight: bold; }
.inactive { color: gray; }
.disabled { opacity: 0.5; }
.success { background-color: lightgreen; }
.error { background-color: pink; }
.big-text { font-size: 24px; }
.highlight { background-color: yellow; }
.base { padding: 5px; border: 1px solid black; }



-------------------------ngStyle----------------------------

1. Apply a Single Style Dynamically
<p [ngStyle]="{ 'color': textColor }">
  Dynamic text color
</p>

textColor = 'blue';


2. Apply Multiple Styles Dynamically
<p [ngStyle]="{ 
      'color': isError ? 'red' : 'green',
      'font-size': fontSize + 'px' 
    }">
  Status Message
</p>

isError = true;
fontSize = 20;


3. Bind Styles from a Component Object

  <p [ngStyle]="myStyles">Styled Text</p>
 
myStyles = {
    'color': 'purple',
    'font-weight': 'bold',
    'background-color': 'lightyellow'
  };

4. Conditional Styling with Button Click
<button (click)="toggleHighlight()">Toggle Highlight</button>

<p [ngStyle]="{ 
      'background-color': isHighlighted ? 'yellow' : 'transparent',
      'padding': '10px'
    }">
  Click the button to highlight me!
</p>

isHighlighted = false;

toggleHighlight() {
  this.isHighlighted = !this.isHighlighted;
}


5. Combine Static and Dynamic Styles
<p style="border: 1px solid black; padding: 5px;"
   [ngStyle]="{ 'color': isActive ? 'green' : 'gray' }">
  User Status
</p>





