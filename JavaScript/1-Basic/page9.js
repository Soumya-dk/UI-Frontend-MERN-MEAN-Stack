let modules="user";
switch(modules){
    case "product":
        console.log("Re-direct to product management module");
        break;
    case "user":
    case "customer":
        console.log("Re-direct to account management module");
        break;
    case "billing":
        console.log("Re-direct to billing management module");
        break;
    default:
        console.log("Display Home page with list of module to choose");
}