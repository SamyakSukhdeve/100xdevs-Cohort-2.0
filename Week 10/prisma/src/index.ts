import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertUser = async (
  email: string,
  firstname: string,
  lastname: string,
  password: string
) => {
  const res = await prisma.user.create({
    data: {
      email,
      fistname: firstname,
      lastname,
      password,
    },
    select: {
      id: true,
      password: true,
    },
  });

  console.log(res);
};

// insertUser("samyaksukhdeve12@gmail.com", "samyak", "sukhdeve", "9881422305");

interface UpdateParams {
  firstname: string;
  lastname: string;
}

const updateUser = async (
  email1: string,
  { firstname, lastname }: UpdateParams
) => {
  const res = await prisma.user.update({
    data: {
      fistname: firstname,
      lastname: lastname,
    },
    where: {
      email: email1,
    },
    select: {
      fistname: true,
      lastname: true,
    },
  });
  console.log(res);
};

// updateUser("samyaksukhdeve12@gmail.com", {
//   firstname: "Ojus",
//   lastname: "sukhdeve",
// });

const getUser = async (email: string) => {
  const res = await prisma.user.findFirst({ where: { email: email } });
  console.log(res);
};
// getUser("samyaksukhdeve12@gmail.com");
