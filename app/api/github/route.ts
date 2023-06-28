import { getReposGH } from "@/app/lib/getReposGH";
import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

// export async function POST(request: Request) {
//   const repos = await getReposGH();


//   const projectRecords = repos.map((project:ProjectRecordGH) => ({
//     name: project.name,
//     technologies: "technologies",
//     description: "description",
//     imageUrl: "imageUrl",
//     githubUrl: project.html_url,
//     liveUrl: project.homepage?.toString() || "",
//   }));

//   try {
//     const createdProjects = await prisma.project.createMany({
//       data: projectRecords,
//     });

//     console.log('Created projects:', createdProjects);
//   } catch (error) {
//     console.error('Error creating projects:', error);
//   } finally {
//     await prisma.$disconnect();
//   }
//   const reposJSON = JSON.stringify({ message: `db has been updated` });

//   return new Response(reposJSON, {
//     headers: { "Content-Type": "application/json" },
//   });
// }

 

