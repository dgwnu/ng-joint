# To-Do

## Add Data Data Change Logic

Make sure that munual changes in jointjs element en link position, size and attributes is reflected  
into angular Component Data changes.  
  
Use "dia.Element.events". Maybe "change" event with context should be enough because its covers all  
events.  
Implementation using element and link services combined with callback function to angular Component-method that will handle this OR  
use a Subject (maybe better to use this generic principle??)

## Check Data Change Logig with Cache Mechanism

When the Data Change Logic works that should also give the ablility to save manual changes of element and link positions, creation and deletion between Tabs, Menu's, Routings and other page Navigation events.