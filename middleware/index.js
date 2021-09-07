const usiesModel = require("../model/usiesModel");
// middleware as the name suggests may be placed somewhere in the middle of the layer of the software and another
const userMiddleware = {};
// Middleware
async function getUsie(req, res, next) {
  let usie;
  try {
    //  = await EmployeesData.findById(req.params.id);
    // employee = await EmployeesData.find({ name: req.params.name });

    usie = await UsiesData.findOne({ name: req.params.name });
    if (usie == null)
      return res.status(404).json({ message: "User NOT Found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log(usie);
  res.usie = usie;
  next();
}

// var myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.listen(3000)

// http:localhost:5000/employees
// const usies = require("./router/usies");
// app.use("/usies", usies);

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to our app");
// });
