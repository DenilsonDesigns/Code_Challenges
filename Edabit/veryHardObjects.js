// Nearest Chapter

// Create a function that returns which chapter is nearest to the page you're on.
// If two chapters are equidistant, return the chapter with the higher page number.
function nearestChapter(chapt, page) {
  let rChap = "";
  let currSmallDiff = Infinity;

  for (const [k, v] of Object.entries(chapt)) {
    console.log(k, v);
    if (Math.abs(v - page) <= currSmallDiff) {
      currSmallDiff = Math.abs(v - page);
      rChap = k;
    }
  }

  return rChap;
}

// Ungroup Data in an Object
// You volunteered to help out teaching a preschool in your area!
// You were given an array of all students and some important data about them,
// grouped by their teacher.
// Create a function that will ungroup every student so you
// can look at their details individually.
function ungroupStudents(students) {
  let r = [];

  students.forEach((el) => {
    el.data.forEach((student) => {
      r.push({
        teacher: el.teacher,
        name: student.name,
        ...student,
      });
    });
  });

  return r;
}

console.log(
  // ***
  ungroupStudents([
    {
      teacher: "Ms. Car",
      data: [
        {
          name: "James",
          emergencyNumber: "617-771-1082",
        },
        {
          name: "Alice",
          alergies: ["nuts", "carrots"],
        },
      ],
    },
    {
      teacher: "Mr. Lamb",
      data: [
        {
          name: "Aaron",
          age: 3,
        },
      ],
    },
  ])
  // ***
);
