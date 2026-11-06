// Select the database
use("contact");

// Create the collection
db.createCollection("contactlist");

// Insert the five contacts
db.contactlist.insertMany([
  {
    lastName: "Ben",
    firstName: "Moris",
    email: "ben@gmail.com",
    age: 26,
  },
  {
    lastName: "Kefi",
    firstName: "Seif",
    email: "kefi@gmail.com",
    age: 15,
  },
  {
    lastName: "Emilie",
    firstName: "brouge",
    email: "emilie.b@gmail.com",
    age: 40,
  },
  {
    lastName: "Alex",
    firstName: "brown",
    age: 4,
  },
  {
    lastName: "Denzel",
    firstName: "Washington",
    age: 3,
  },
]);

// Display all contacts
db.contactlist.find().pretty();

// Find one contact using its ID
const ben = db.contactlist.findOne({
  lastName: "Ben",
  firstName: "Moris",
});

db.contactlist.findOne({
  _id: ben._id,
});

// Display contacts older than 18
db.contactlist.find({
  age: { $gt: 18 },
});

// Display contacts older than 18 with "ah" in their name
db.contactlist.find({
  age: { $gt: 18 },
  $or: [
    { firstName: { $regex: "ah", $options: "i" } },
    { lastName: { $regex: "ah", $options: "i" } },
  ],
});

// Update Kefi's first name
db.contactlist.updateOne(
  {
    lastName: "Kefi",
    firstName: "Seif",
  },
  {
    $set: {
      firstName: "Anis",
    },
  },
);

// Verify the update
db.contactlist.findOne({
  lastName: "Kefi",
});

// Delete contacts younger than 5
db.contactlist.deleteMany({
  age: { $lt: 5 },
});

// Display the final contact list
db.contactlist.find().pretty();
