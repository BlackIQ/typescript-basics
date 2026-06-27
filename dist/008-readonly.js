"use strict";
// Read Only
Object.defineProperty(exports, "__esModule", { value: true });
// Enum
var Department;
(function (Department) {
    Department["Financial"] = "Financial";
    Department["IT"] = "IT";
    Department["ICT"] = "ICT";
    Department["Software"] = "Software";
    Department["HR"] = "HR";
})(Department || (Department = {}));
// Make a user
const Amirhossein = {
    id: 124578936,
    department: Department.ICT,
    hireDate: new Date(),
    name: "Amirhossein",
    age: 24,
};
console.log(Amirhossein);
Amirhossein.name = "Amirhossein Mohammadi";
// Amirhossein.id = 2; // You can't. ID is readonly
Amirhossein.department = Department.Software;
console.log(Amirhossein);
//# sourceMappingURL=008-readonly.js.map