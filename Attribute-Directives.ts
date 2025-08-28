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


.active { color: green; font-weight: bold; }
.inactive { color: gray; }
.disabled { opacity: 0.5; }
.success { background-color: lightgreen; }
.error { background-color: pink; }
.big-text { font-size: 24px; }
.highlight { background-color: yellow; }
.base { padding: 5px; border: 1px solid black; }



