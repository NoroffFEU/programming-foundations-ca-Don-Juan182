[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14339718&assignment_repo_type=AssignmentRepo)

This object has the following properties:
-Brand (String), the manufacturer of the vehicle
-Speed (Number), the vehicle velocity in "kmh"
-Range (Number), the vehicle range in "km"
-maxEnginePower (Number), the vehicle maximum engine power in "hp"
-Kilometers (Number), the vehicle driven distance in "km"
-transmissionAutomatic (Boolean), the vehicle transmission is automatic
-Electric (Boolean), the vehicle´s fuel type is electric
-ParkingMode (Boolean), indicates if the parking mode is activated or not
-appsInstalled (Array or/and strings), lists the names of applications installed in the vehicle´s system

Additionallly, this object inclues a function that technically is a method since it is associated with an object.

-activateParkingMode (function), a method that checks if the ParkingMode property is true. If it is, the vehicle´s engine is truned off, and "Engine stopped" is logged to the console. It is a simulation.
