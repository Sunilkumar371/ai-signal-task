import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const locations = [
  "Delhi",
  "Hyderabad",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
];

const courseNames = [
  "B.Tech CSE",
  "B.Tech ECE",
  "B.Tech Mechanical",
  "MBA",
  "BBA",
  "B.Com",
  "M.Tech",
];

async function main() {
  console.log("🌱 Seeding database...");

  await prisma.review.deleteMany();
  await prisma.placement.deleteMany();
  await prisma.course.deleteMany();
  await prisma.savedCollege.deleteMany();
  await prisma.college.deleteMany();

  for (let i = 0; i < 50; i++) {
    const college =
      await prisma.college.create({
        data: {
          name: `${faker.company.name()} Institute of Technology`,

          location:
            locations[
              Math.floor(
                Math.random() *
                  locations.length
              )
            ],

          fees:
            faker.number.int({
              min: 50000,
              max: 500000,
            }),

          rating:
            faker.number.float({
              min: 2,
              max: 5,
              fractionDigits: 1,
            }),
        },
      });

    // Courses
    await prisma.course.createMany({
      data: Array.from(
        { length: 3 },
        () => ({
          name: faker.helpers.arrayElement(
            courseNames
          ),

          duration: "4 Years",

          collegeId: college.id,
        })
      ),
    });

    // Placement
    await prisma.placement.create({
      data: {
        averagePackage:
          faker.number.float({
            min: 4,
            max: 20,
            fractionDigits: 1,
          }),

        highestPackage:
          faker.number.float({
            min: 15,
            max: 80,
            fractionDigits: 1,
          }),

        collegeId: college.id,
      },
    });

    // Reviews
    await prisma.review.createMany({
      data: Array.from(
        { length: 5 },
        () => ({
          rating:
            faker.number.float({
              min: 2,
              max: 5,
              fractionDigits: 1,
            }),

          comment:
            faker.lorem.sentence(),

          collegeId: college.id,
        })
      ),
    });
  }

  console.log(
    "✅ Database seeded successfully"
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });